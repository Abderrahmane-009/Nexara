import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🤖",
    title: "Chatbots IA",
    slug: "chatbots-ia",
    description:
      "Automatisez votre service client 24h/24 avec des chatbots intelligents entraînés sur votre activité. Disponible sur votre site, WhatsApp et Facebook.",
    features: ["Disponible 24/7", "Multi-canal", "Personnalisable", "Analytics inclus"],
    color: "#7C3AED",
    badge: "🔥 Populaire",
  },
  {
    icon: "🌐",
    title: "Sites Web Premium",
    slug: "sites-web",
    description:
      "Sites vitrines haute performance, optimisés SEO et conçus pour convertir. Design sur-mesure qui reflète l'excellence de votre marque.",
    features: ["Design sur-mesure", "SEO technique", "Ultra-rapide", "Mobile-first"],
    color: "#06B6D4",
    badge: null,
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    slug: "ecommerce",
    description:
      "Boutiques en ligne complètes avec gestion des stocks, paiement intégré et tableau de bord pour piloter vos ventes au quotidien.",
    features: ["Paiement sécurisé", "Gestion stocks", "Analytics ventes", "Mobile app ready"],
    color: "#10B981",
    badge: null,
  },
  {
    icon: "⚙️",
    title: "Applications Web",
    slug: "applications-web",
    description:
      "Solutions métier sur-mesure pour digitaliser vos processus internes, automatiser vos workflows et gagner en efficacité opérationnelle.",
    features: ["Sur-mesure", "Évolutif", "Sécurisé", "API-ready"],
    color: "#F59E0B",
    badge: "Nouveau",
  },
  {
    icon: "✨",
    title: "Branding & Design",
    slug: "branding",
    description:
      "Identité visuelle forte et cohérente — logo, charte graphique, supports print et digital — pour asseoir votre positionnement premium.",
    features: ["Identité complète", "Guide de marque", "Déclinaisons UI", "Supports digitaux"],
    color: "#EF4444",
    badge: null,
  },
  {
    icon: "🔄",
    title: "Automatisation",
    slug: "automatisation",
    description:
      "Automatisez vos tâches répétitives, synchronisez vos outils et créez des workflows intelligents pour vous concentrer sur l'essentiel.",
    features: ["Gain de temps", "Zéro erreur", "Intégrations", "ROI mesurable"],
    color: "#8B5CF6",
    badge: null,
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-nexara">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-6 w-fit">
            ✦ Nos Services
          </div>
          <h2 className="section-title">
            Des solutions digitales
            <br />
            <span className="gradient-text">pensées pour performer</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            De la conception à la mise en ligne, NEXARA vous accompagne avec
            des solutions éprouvées, adaptées aux réalités du marché algérien.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="service-card group relative">
              {/* Badge */}
              {service.badge && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${service.color}20`,
                    color: service.color,
                    border: `1px solid ${service.color}40`,
                  }}
                >
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div
                className="service-icon w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-poppins font-bold text-xl text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#8892A4] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feat, j) => (
                  <span key={j} className="tag text-xs">
                    {feat}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/services/${service.slug}`}
                className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: service.color }}
              >
                En savoir plus
                <ArrowRight size={16} />
              </Link>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary inline-flex">
            Découvrir tous nos services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
