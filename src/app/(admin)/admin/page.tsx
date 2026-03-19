import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, FileText, Briefcase } from "lucide-react";

async function getDashboardData() {
  try {
    const [leadsCount, devisCount, projectsCount, articlesCount, recentLeads, recentDevis] =
      await Promise.all([
        prisma.lead.count(),
        prisma.devis.count(),
        prisma.project.count(),
        prisma.article.count(),
        prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
        prisma.devis.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
      ]);

    return {
      leadsCount,
      devisCount,
      projectsCount,
      articlesCount,
      recentLeads,
      recentDevis,
    };
  } catch {
    return {
      leadsCount: 0,
      devisCount: 0,
      projectsCount: 0,
      articlesCount: 0,
      recentLeads: [],
      recentDevis: [],
    };
  }
}

const statusColors: Record<string, string> = {
  NEW: "#06B6D4",
  CONTACTED: "#F59E0B",
  QUALIFIED: "#7C3AED",
  IN_REVIEW: "#F59E0B",
  CONVERTED: "#10B981",
  ACCEPTED: "#10B981",
  REJECTED: "#EF4444",
  LOST: "#EF4444",
};

export default async function AdminDashboardPage() {
  const data = await getDashboardData();

  const stats = [
    {
      label: "Total Leads",
      value: data.leadsCount,
      icon: <Users size={20} />,
      color: "#7C3AED",
      href: "/admin/leads",
    },
    {
      label: "Demandes de Devis",
      value: data.devisCount,
      icon: <FileText size={20} />,
      color: "#06B6D4",
      href: "/admin/devis",
    },
    {
      label: "Projets Portfolio",
      value: data.projectsCount,
      icon: <Briefcase size={20} />,
      color: "#10B981",
      href: "/admin/projets",
    },
    {
      label: "Articles Blog",
      value: data.articlesCount,
      icon: <TrendingUp size={20} />,
      color: "#F59E0B",
      href: "/admin/articles",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-poppins font-black text-2xl text-white mb-2">
          Tableau de bord NEXARA
        </h1>
        <p className="text-[#8892A4]">
          Vue d'ensemble de l'activité de votre agence.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, i) => (
          <Link
            key={i}
            href={stat.href}
            className="glass-card p-5 group hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `${stat.color}20`,
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>
              <ArrowRight
                size={16}
                className="text-[#8892A4] group-hover:text-white transition-colors"
              />
            </div>
            <div
              className="font-poppins font-black text-3xl mb-1"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-[#8892A4] text-sm">{stat.label}</div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(20, 20, 40, 0.6)",
            border: "1px solid rgba(124, 58, 237, 0.15)",
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-white">Derniers Leads</h2>
            <Link
              href="/admin/leads"
              className="text-xs text-[#7C3AED] hover:text-[#06B6D4] transition-colors"
            >
              Voir tout →
            </Link>
          </div>

          {data.recentLeads.length === 0 ? (
            <div className="text-center py-8 text-[#8892A4] text-sm">
              Aucun lead pour le moment. Partagez votre site !
            </div>
          ) : (
            <div className="space-y-3">
              {data.recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div>
                    <div className="text-white text-sm font-medium">
                      {lead.name || lead.email}
                    </div>
                    <div className="text-[#8892A4] text-xs">{lead.email}</div>
                  </div>
                  <div
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      background: `${statusColors[lead.status] || "#8892A4"}20`,
                      color: statusColors[lead.status] || "#8892A4",
                    }}
                  >
                    {lead.status}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Devis */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(20, 20, 40, 0.6)",
            border: "1px solid rgba(6, 182, 212, 0.15)",
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-white">Derniers Devis</h2>
            <Link
              href="/admin/devis"
              className="text-xs text-[#06B6D4] hover:text-[#7C3AED] transition-colors"
            >
              Voir tout →
            </Link>
          </div>

          {data.recentDevis.length === 0 ? (
            <div className="text-center py-8 text-[#8892A4] text-sm">
              Aucune demande de devis pour le moment.
            </div>
          ) : (
            <div className="space-y-3">
              {data.recentDevis.map((devis) => (
                <div
                  key={devis.id}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div>
                    <div className="text-white text-sm font-medium">
                      {devis.name}
                    </div>
                    <div className="text-[#8892A4] text-xs">{devis.service}</div>
                  </div>
                  <div
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      background: `${statusColors[devis.status] || "#8892A4"}20`,
                      color: statusColors[devis.status] || "#8892A4",
                    }}
                  >
                    {devis.status}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div
        className="mt-6 p-6 rounded-2xl"
        style={{
          background: "rgba(124, 58, 237, 0.05)",
          border: "1px solid rgba(124, 58, 237, 0.15)",
        }}
      >
        <h2 className="font-semibold text-white mb-4">Actions rapides</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/admin/projets", label: "➕ Ajouter un projet" },
            { href: "/admin/articles", label: "✍️ Écrire un article" },
            { href: "/admin/temoignages", label: "⭐ Ajouter un témoignage" },
          ].map((action, i) => (
            <Link key={i} href={action.href} className="btn-secondary text-sm py-2">
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
