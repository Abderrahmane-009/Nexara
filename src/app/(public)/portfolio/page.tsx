import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Réalisations | NEXARA",
  description:
    "Découvrez nos réalisations digitales pour des entreprises algériennes — sites web, chatbots IA, e-commerce et applications web métier.",
};

const categories = ["Tous", "Sites Web", "E-Commerce", "Chatbot IA", "Application Web", "Branding"];

const projects = [
  {
    title: "Clinique Médicale Premium — Alger",
    category: "Sites Web",
    sector: "Santé",
    description: "Refonte complète avec système de prise de RDV en ligne et chatbot qualificateur.",
    results: "+156% de prises de RDV en ligne en 3 mois",
    tags: ["Next.js", "Prisma", "WhatsApp Bot"],
    icon: "🏥",
    gradient: "from-[#7C3AED]/20 to-[#06B6D4]/20",
    accentColor: "#7C3AED",
    slug: "clinique-medicale-alger",
  },
  {
    title: "Immobilier Prestige — Oran",
    category: "Application Web",
    sector: "Immobilier",
    description: "Portail immobilier avec recherche avancée, carte interactive et génération automatique de leads.",
    results: "+89 leads qualifiés par mois",
    tags: ["React", "Maps API", "CRM Intégré"],
    icon: "🏢",
    gradient: "from-[#06B6D4]/20 to-[#10B981]/20",
    accentColor: "#06B6D4",
    slug: "immobilier-prestige-oran",
  },
  {
    title: "Restaurant L'Olivier — Constantine",
    category: "Chatbot IA",
    sector: "Restauration",
    description: "Site vitrine premium avec chatbot IA gérant les réservations 24h/24 sur WhatsApp et le site.",
    results: "+40% de réservations en 6 semaines",
    tags: ["IA Générative", "WhatsApp API", "Réservations"],
    icon: "🍽️",
    gradient: "from-[#F59E0B]/20 to-[#EF4444]/20",
    accentColor: "#F59E0B",
    slug: "restaurant-lolivier-constantine",
  },
  {
    title: "Formation Pro Excellence — Annaba",
    category: "Application Web",
    sector: "Formation",
    description: "LMS complet avec inscriptions en ligne, suivi de progression et délivrance de certificats automatique.",
    results: "×3 d'inscriptions en ligne",
    tags: ["LMS Custom", "Paiement DZ", "Dashboard"],
    icon: "📚",
    gradient: "from-[#10B981]/20 to-[#7C3AED]/20",
    accentColor: "#10B981",
    slug: "formation-pro-excellence",
  },
  {
    title: "Boutique Mode Algéroise",
    category: "E-Commerce",
    sector: "Mode & Beauté",
    description: "E-shop complet avec catalogue produits, panier, intégration CCP et tableau de bord vendeur.",
    results: "85 ventes en ligne le 1er mois",
    tags: ["E-Commerce", "CCP/Baridimob", "Mobile-First"],
    icon: "👗",
    gradient: "from-[#EF4444]/20 to-[#F59E0B]/20",
    accentColor: "#EF4444",
    slug: "boutique-mode-algerie",
  },
  {
    title: "Spa & Bien-Être Premium — Alger",
    category: "Sites Web",
    sector: "Santé & Beauté",
    description: "Site vitrine haut de gamme avec booking en ligne, galerie interactive et automatisation email.",
    results: "Score Lighthouse 97/100",
    tags: ["Design Premium", "Booking", "SEO Local"],
    icon: "💆",
    gradient: "from-[#8B5CF6]/20 to-[#06B6D4]/20",
    accentColor: "#8B5CF6",
    slug: "spa-bien-etre-alger",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Portfolio</div>
          <h1 className="section-title">
            Nos réalisations,
            <br />
            <span className="gradient-text">vos inspirations</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Chaque projet est une collaboration unique, orientée résultats.
            Découvrez comment nous transformons les ambitions digitales en
            succès mesurables.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                cat === "Tous"
                  ? {
                      background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                      color: "white",
                    }
                  : {
                      background: "rgba(124, 58, 237, 0.08)",
                      color: "#8892A4",
                      border: "1px solid rgba(124, 58, 237, 0.15)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(20, 20, 40, 0.8)",
                border: `1px solid rgba(124, 58, 237, 0.12)`,
              }}
            >
              {/* Visual */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="text-7xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(13, 13, 26, 0.85)",
                    color: project.accentColor,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {project.sector}
                </div>
                <div
                  className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1.5 rounded-xl"
                  style={{
                    background: `${project.accentColor}25`,
                    color: project.accentColor,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  📈 {project.results}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-[#8892A4] mb-1">{project.category}</div>
                <h3 className="font-poppins font-bold text-base text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#8892A4] text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-300"
                  style={{ color: project.accentColor }}
                >
                  Voir l'étude de cas
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#8892A4] mb-6">
            Votre projet pourrait être notre prochaine réussite.
          </p>
          <Link href="/devis" className="btn-primary">
            Démarrer votre projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
