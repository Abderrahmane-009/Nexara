import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, sector, service, budget, timeline, description } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Les champs nom, email et service sont obligatoires." },
        { status: 400 }
      );
    }

    // Save devis request
    const devis = await prisma.devis.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        sector: sector || null,
        service,
        budget: budget || null,
        timeline: timeline || null,
        description: description || null,
        status: "NEW",
      },
    });

    // Also create/update lead
    try {
      await prisma.lead.create({
        data: {
          email,
          name,
          phone: phone || null,
          company: company || null,
          source: "devis_form",
          status: "NEW",
          notes: `Service: ${service}, Budget: ${budget || "non précisé"}`,
        },
      });
    } catch {
      // Ignore duplicate lead error
    }

    return NextResponse.json({ success: true, id: devis.id });
  } catch (error) {
    console.error("Devis API Error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const devis = await prisma.devis.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json(devis);
  } catch (error) {
    console.error("Devis GET Error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
