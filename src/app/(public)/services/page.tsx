import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services Digitaux | NEXARA",
  description:
    "Chatbots IA, sites web premium, e-commerce, applications web, branding et automatisation. Découvrez toutes les solutions NEXARA pour votre entreprise en Algérie.",
};

const services = [
  {
    icon: "🤖",
    title: "Chatbots IA",
    slug: "chatbots-ia",
    shortDesc: "Automatisation du service client par intelligence artificielle.",
    longDesc:
      "Des chatbots intelligents entraînés sur votre activité, disponibles 24h/24 sur votre site, WhatsApp et Facebook Messenger. Qualifiez automatiquement vos leads et réduisez le temps de traitement client de 70%.",
    useCases: ["Qualification de leads", "Prise de RDV automatique", "FAQ intelligente", "Support client 24/7"],
    price: "Dès 25 000 DZD",
    color: "#7C3AED",
    badge: "🔥 Populaire",
  },
  {
    icon: "🌐",
    title: "Sites Web Premium",
    slug: "sites-web",
    shortDesc: "Vitrine digitale qui convertit et représente votre marque.",
    longDesc:
      "Des sites vitrines haute performance optimisés SEO, conçus pour convertir les visiteurs en clients. Design sur-mesure, mobile-first, ultra-rapide et administrable simplement.",
    useCases: ["Landing pages", "Sites vitrine 5-10 pages", "Sites corporate", "One-page premium"],
    price: "Dès 35 000 DZD",
    color: "#06B6D4",
    badge: null,
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    slug: "ecommerce",
    shortDesc: "Boutiques en ligne performantes, pensées pour vendre.",
    longDesc:
      "Votre boutique en ligne complète avec catalogue produits, panier, paiement sécurisé et tableau de bord de gestion des ventes. Compatible avec les usages algériens.",
    useCases: ["Boutiques mode/beauté", "Artisanat local", "Produits tech", "Services en ligne"],
    price: "Dès 85 000 DZD",
    color: "#10B981",
    badge: null,
  },
  {
    icon: "⚙️",
    title: "Applications Web",
    slug: "applications-web",
    shortDesc: "Solutions métier sur-mesure pour digitaliser vos processus.",
    longDesc:
      "Applications web métier conçues pour votre activité spécifique — gestion interne, CRM, LMS, plateforme booking ou ERP light. Évolutives et sécurisées.",
    useCases: ["CRM métier", "Plateformes formation (LMS)", "Outils de gestion interne", "Portails clients"],
    price: "Sur devis",
    color: "#F59E0B",
    badge: "Nouveau",
  },
  {
    icon: "✨",
    title: "Branding & Design",
    slug: "branding",
    shortDesc: "Identité visuelle forte pour un positionnement premium.",
    longDesc:
      "Logo, charte graphique, guide de marque et déclinaisons digitales. Construisez une identité visuelle qui inspire confiance et se distingue dans votre marché.",
    useCases: ["Logo & identité", "Charte graphique complète", "Supports print & digital", "Brand Guidelines"],
    price: "Dès 18 000 DZD",
    color: "#EF4444",
    badge: null,
  },
  {
    icon: "🔄",
    title: "Automatisation",
    slug: "automatisation",
    shortDesc: "Workflows intelligents pour libérer votre productivité.",
    longDesc:
      "Connectez vos outils, automatisez vos tâches répétitives et créez des pipelines de traitement intelligents. Votre équipe se concentre sur la valeur, pas la routine.",
    useCases: ["Email marketing automatisé", "Sync CRM / e-commerce", "Rapports automatiques", "Lead nurturing"],
    price: "Dès 15 000 DZD/mois",
    color: "#8B5CF6",
    badge: null,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Nos Services</div>
          <h1 className="section-title">
            Tout ce dont votre entreprise
            <br />
            <span className="gradient-text">a besoin pour performer</span>
          </h1>
          <p className="section-subtitle mx-auto">
            De la stratégie à l'exécution, NEXARA vous offre un accompagnement
            complet et sur-mesure pour propulser votre présence digitale en
            Algérie.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card p-8 group"
              style={{
                borderLeft: `3px solid ${service.color}`,
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="font-poppins font-bold text-2xl text-white">
                      {service.title}
                    </h2>
                    {service.badge && (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: `${service.color}20`,
                          color: service.color,
                          border: `1px solid ${service.color}40`,
                        }}
                      >
                        {service.badge}
                      </span>
                    )}
                    <span
                      className="ml-auto text-sm font-semibold px-4 py-1.5 rounded-lg"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                      }}
                    >
                      {service.price}
                    </span>
                  </div>
                  <p className="text-[#E2E8F0] font-medium mb-2">{service.shortDesc}</p>
                  <p className="text-[#8892A4] text-sm leading-relaxed mb-5">
                    {service.longDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.useCases.map((uc, j) => (
                      <span key={j} className="tag">{uc}</span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-secondary text-sm"
                      style={{
                        borderColor: `${service.color}40`,
                        color: service.color,
                      }}
                    >
                      Découvrir ce service
                      <ArrowRight size={16} />
                    </Link>
                    <Link href="/devis" className="btn-primary text-sm">
                      Demander un Devis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#8892A4] mb-6">
            Vous avez un projet qui nécessite plusieurs services combinés ?
          </p>
          <Link href="/contact" className="btn-primary">
            Discutons de votre projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
