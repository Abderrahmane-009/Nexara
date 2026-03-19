import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Clinique Médicale Premium",
    category: "Site Web + Chatbot IA",
    sector: "Santé",
    description:
      "Refonte complète avec prise de rendez-vous automatisée et chatbot qualifiant les patients avant consultation.",
    results: "+156% de RDV en ligne",
    tags: ["Next.js", "IA", "WhatsApp Bot"],
    gradient: "from-[#7C3AED]/20 to-[#06B6D4]/20",
    accentColor: "#7C3AED",
    icon: "🏥",
  },
  {
    title: "Agence Immobilière 360",
    category: "Plateforme E-commerce",
    sector: "Immobilier",
    description:
      "Portail immobilier avec recherche avancée, visite virtuelle et gestion automatisée des leads.",
    results: "+89 leads/mois qualifiés",
    tags: ["React", "Maps API", "CRM"],
    gradient: "from-[#06B6D4]/20 to-[#10B981]/20",
    accentColor: "#06B6D4",
    icon: "🏢",
  },
  {
    title: "Restaurant Gastronomique",
    category: "Site + Réservations IA",
    sector: "Restauration",
    description:
      "Présence digitale premium avec système de réservation intelligent et marketing automatisé.",
    results: "+40% de réservations",
    tags: ["Design Premium", "Bot IA", "Instagram API"],
    gradient: "from-[#F59E0B]/20 to-[#EF4444]/20",
    accentColor: "#F59E0B",
    icon: "🍽️",
  },
  {
    title: "Centre de Formation Pro",
    category: "Application Web Métier",
    sector: "Formation",
    description:
      "LMS sur-mesure avec gestion des inscriptions, suivi apprenants et certification automatique.",
    results: "3× plus d'inscriptions",
    tags: ["LMS", "Tableau de bord", "Paiement DZ"],
    gradient: "from-[#10B981]/20 to-[#7C3AED]/20",
    accentColor: "#10B981",
    icon: "📚",
  },
];

export function PortfolioPreviewSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(124, 58, 237, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container-nexara relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-badge mb-6 w-fit">✦ Portfolio</div>
            <h2 className="section-title text-left">
              Des projets qui
              <br />
              <span className="gradient-text">génèrent des résultats</span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-secondary shrink-0">
            Voir tout le portfolio
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: "rgba(20, 20, 40, 0.8)",
                border: `1px solid rgba(${project.accentColor === '#7C3AED' ? '124, 58, 237' : project.accentColor === '#06B6D4' ? '6, 182, 212' : project.accentColor === '#F59E0B' ? '245, 158, 11' : '16, 185, 129'}, 0.15)`,
              }}
            >
              {/* Project Visual */}
              <div
                className={`h-48 md:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="text-7xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500">
                  {project.icon}
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(13, 13, 26, 0.8)",
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}40`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {project.sector}
                </div>
                <div
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-sm font-bold"
                  style={{
                    background: `${project.accentColor}20`,
                    color: project.accentColor,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${project.accentColor}30`,
                  }}
                >
                  📈 {project.results}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-[#8892A4] mb-2">
                  {project.category}
                </div>
                <h3 className="font-poppins font-bold text-lg text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: project.accentColor }}
                >
                  Voir l'étude de cas
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
