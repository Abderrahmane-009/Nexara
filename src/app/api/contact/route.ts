import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Les champs nom, email et message sont obligatoires." },
        { status: 400 }
      );
    }

    // Save to database
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
        status: "NEW",
      },
    });

    // Also create a lead
    await prisma.lead.upsert({
      where: { id: email },
      update: {},
      create: {
        email,
        name,
        phone: phone || null,
        source: "contact_form",
        status: "NEW",
      },
    }).catch(() => {
      // Lead creation is optional - ignore errors
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
