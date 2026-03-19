import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "35 000",
    currency: "DZD",
    period: "projet",
    description: "Idéal pour lancer une présence professionnelle rapide et efficace.",
    badge: null,
    highlight: false,
    features: [
      "Landing page optimisée conversion",
      "Design personnalisé mobile-first",
      "SEO de base (meta, schema)",
      "Formulaire de contact",
      "Hébergement 1 an inclus",
      "Livraison en 10 jours",
      "Support WhatsApp 30 jours",
    ],
    cta: "Démarrer",
    color: "#06B6D4",
  },
  {
    id: "business",
    name: "Business",
    price: "75 000",
    currency: "DZD",
    period: "projet",
    description: "La solution complète pour une présence digitale sérieuse et différenciante.",
    badge: "⭐ Le plus choisi",
    highlight: true,
    features: [
      "Site vitrine 5 à 8 pages",
      "Design premium sur-mesure",
      "Blog administrable (CMS)",
      "SEO technique complet",
      "Analytics & performances",
      "Formulaire de devis intégré",
      "Hébergement 1 an inclus",
      "Livraison en 21 jours",
      "Support prioritaire 90 jours",
    ],
    cta: "Choisir Business",
    color: "#7C3AED",
  },
  {
    id: "premium-ia",
    name: "Premium IA",
    price: "150 000",
    currency: "DZD",
    period: "projet",
    description: "Plateforme digitale avancée avec intelligence artificielle et automatisation.",
    badge: "🚀 Maximum impact",
    highlight: false,
    features: [
      "Tout du plan Business",
      "E-commerce complet",
      "Chatbot IA personnalisé",
      "Automatisation workflows",
      "Dashboard analytics avancé",
      "Intégrations API",
      "Formation équipe incluse",
      "Livraison en 30 jours",
      "Support 6 mois premium",
    ],
    cta: "Choisir Premium IA",
    color: "#F59E0B",
  },
];

export function PricingPreviewSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(124, 58, 237, 0.07) 0%, transparent 60%)",
        }}
      />

      <div className="container-nexara relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Nos Tarifs</div>
          <h2 className="section-title">
            Des offres claires,
            <br />
            <span className="gradient-text">sans mauvaise surprise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tarifs transparents en Dinar Algérien. Aucun coût caché. Vous savez
            exactement ce que vous payez et ce que vous obtenez.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlight ? "featured" : ""} relative`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap"
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(135deg, #7C3AED, #06B6D4)"
                      : `${plan.color}20`,
                    color: plan.highlight ? "white" : plan.color,
                    border: plan.highlight ? "none" : `1px solid ${plan.color}40`,
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6 mt-2">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{
                    background: `${plan.color}15`,
                    color: plan.color,
                    border: `1px solid ${plan.color}30`,
                  }}
                >
                  <Star size={10} />
                  {plan.name}
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span
                    className="font-poppins font-black text-4xl"
                    style={{ color: plan.highlight ? "white" : "#E2E8F0" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#8892A4] text-sm mb-1">
                    {plan.currency} / {plan.period}
                  </span>
                </div>
                <p className="text-[#8892A4] text-sm">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className="gradient-divider mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: plan.color }}
                    />
                    <span className="text-[#E2E8F0]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="space-y-3">
                <Link
                  href={`/devis?plan=${plan.id}`}
                  className="block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  style={
                    plan.highlight
                      ? {
                          background:
                            "linear-gradient(135deg, #7C3AED, #06B6D4)",
                          color: "white",
                          boxShadow: "0 8px 30px rgba(124, 58, 237, 0.3)",
                        }
                      : {
                          background: `${plan.color}15`,
                          color: plan.color,
                          border: `1px solid ${plan.color}40`,
                        }
                  }
                >
                  {plan.cta}
                </Link>
                <a
                  href={getWhatsAppLink(`Bonjour NEXARA, je suis intéressé par le plan ${plan.name} à ${plan.price} DZD.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 px-6 rounded-xl text-sm text-[#8892A4] hover:text-white transition-colors border border-[#2D2D4F] hover:border-[#7C3AED]"
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Note */}
        <div
          className="mt-10 p-6 md:p-8 rounded-2xl text-center"
          style={{
            background: "rgba(20, 20, 40, 0.6)",
            border: "1px solid rgba(124, 58, 237, 0.15)",
          }}
        >
          <p className="text-white font-semibold mb-2 text-lg">
            🏢 Projet Enterprise ou sur-mesure ?
          </p>
          <p className="text-[#8892A4] text-sm mb-4 max-w-2xl mx-auto">
            Applications métier complexes, intégrations avancées, projets
            multi-sites ou accompagnement stratégique sur le long terme.
            Parlons de vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-secondary text-sm">
              Nous contacter
              <ArrowRight size={16} />
            </Link>
            <Link href="/tarifs" className="btn-primary text-sm">
              Voir tous les détails tarifaires
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
