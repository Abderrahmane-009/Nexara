import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tarifs Transparents | NEXARA",
  description:
    "Offres claires en Dinar Algérien. Starter 35 000 DZD, Business 75 000 DZD, Premium IA 150 000 DZD. Aucun coût caché. Découvrez l'offre idéale pour votre entreprise.",
};

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "35 000",
    currency: "DZD",
    period: "projet",
    description: "Pour lancer une présence digitale professionnelle rapidement.",
    highlight: false,
    badge: null,
    features: [
      { text: "Landing page optimisée conversion", included: true },
      { text: "Design 100% personnalisé mobile-first", included: true },
      { text: "SEO de base (meta, titres, schema.org)", included: true },
      { text: "Formulaire de contact + email auto", included: true },
      { text: "Hébergement premium 1 an inclus", included: true },
      { text: "Certificat SSL (https)", included: true },
      { text: "Support WhatsApp 30 jours post-livraison", included: true },
      { text: "Livraison garantie en 10 jours ouvrés", included: true },
      { text: "Blog administrable (CMS)", included: false },
      { text: "Chatbot IA intégré", included: false },
      { text: "E-commerce", included: false },
    ],
    color: "#06B6D4",
    idealFor: "Cliniques, cabinets, artisans, TPE",
  },
  {
    id: "business",
    name: "Business",
    price: "75 000",
    currency: "DZD",
    period: "projet",
    description: "La référence pour une entreprise qui veut se démarquer.",
    highlight: true,
    badge: "⭐ Recommandé",
    features: [
      { text: "Site vitrine 5 à 8 pages premium", included: true },
      { text: "Design sur-mesure brand identity", included: true },
      { text: "Blog / actualités administrable", included: true },
      { text: "SEO technique complet (Lighthouse 90+)", included: true },
      { text: "Analytics & rapports performance", included: true },
      { text: "Formulaire de devis multi-étapes", included: true },
      { text: "Hébergement premium 1 an inclus", included: true },
      { text: "Formation à l'administration (2h)", included: true },
      { text: "Support prioritaire WhatsApp 90 jours", included: true },
      { text: "Livraison garantie en 21 jours ouvrés", included: true },
      { text: "Chatbot IA intégré", included: false },
    ],
    color: "#7C3AED",
    idealFor: "PME, agences, centres de formation, hôtels",
  },
  {
    id: "premium-ia",
    name: "Premium IA",
    price: "150 000",
    currency: "DZD",
    period: "projet",
    description: "Plateforme digitale avancée avec IA et automatisation intégrées.",
    highlight: false,
    badge: "🚀 Full Stack",
    features: [
      { text: "Tout du plan Business inclus", included: true },
      { text: "E-commerce complet (catalogue + panier + paiement)", included: true },
      { text: "Chatbot IA entraîné sur votre activité", included: true },
      { text: "Automatisation workflow (email, CRM)", included: true },
      { text: "Dashboard analytics avancé (KPIs)", included: true },
      { text: "Intégrations API tierces (WhatsApp, etc.)", included: true },
      { text: "Tableau de bord admin complet", included: true },
      { text: "Formation équipe incluse (4h)", included: true },
      { text: "Livraison garantie en 30 jours ouvrés", included: true },
      { text: "Support premium 6 mois", included: true },
      { text: "Rapport mensuel de performance", included: true },
    ],
    color: "#F59E0B",
    idealFor: "E-commerce, restaurants, immobilier, multi-services",
  },
];

const addons = [
  {
    name: "Chatbot IA Add-on",
    price: "25 000 DZD",
    description: "Ajout d'un chatbot IA personnalisé à n'importe quel site existant.",
    icon: "🤖",
  },
  {
    name: "Maintenance Mensuelle",
    price: "8 000 DZD/mois",
    description: "Mises à jour, sauvegardes, monitoring et support technique continu.",
    icon: "🔧",
  },
  {
    name: "SEO Premium",
    price: "15 000 DZD/mois",
    description: "Optimisation continue, création de contenu SEO et rapports mensuels.",
    icon: "📈",
  },
  {
    name: "Gestion Réseaux Sociaux",
    price: "20 000 DZD/mois",
    description: "Création et publication de contenus sur Facebook, Instagram et LinkedIn.",
    icon: "📱",
  },
];

const faqs = [
  {
    q: "Les paiements sont-ils en Dinar Algérien ?",
    a: "Oui, tous nos tarifs sont en DZD. Nous acceptons les virements bancaires CCP/Baridimob, les paiements par chèque et les règlements en espèces pour les clients algériens.",
  },
  {
    q: "Que comprend exactement 'hébergement 1 an inclus' ?",
    a: "Hébergement serveur cloud performant, nom de domaine (.dz ou .com au choix), certificat SSL/TLS, sauvegardes automatiques quotidiennes et monitoring 24/7.",
  },
  {
    q: "Puis-je ajouter des fonctionnalités après la livraison ?",
    a: "Absolument. Nos projets sont conçus pour être évolutifs. Chaque ajout de fonctionnalité est devisé et facturé séparément selon la complexité.",
  },
  {
    q: "Y a-t-il des frais récurrents après la livraison ?",
    a: "L'hébergement (1 an inclus) est ensuite facturé environ 6 000 à 12 000 DZD/an selon le plan. La maintenance et le SEO sont optionnels et proposés en abonnement.",
  },
  {
    q: "Comment se déroule la collaboration à distance ?",
    a: "Nous travaillons via WhatsApp, email et Google Meet. Chaque projet dispose d'un espace de suivi partagé. Les échanges sont fluides et les validations rapides.",
  },
];

export default function TarifsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Tarifs</div>
          <h1 className="section-title">
            Des investissements clairs,
            <br />
            <span className="gradient-text">des résultats mesurables</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Tarifs transparents en Dinar Algérien. Zéro coût caché. Choisissez
            le plan adapté à votre ambition.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlight ? "featured" : ""} relative`}
            >
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

              <div className="mb-6 mt-2">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{
                    background: `${plan.color}15`,
                    color: plan.color,
                    border: `1px solid ${plan.color}30`,
                  }}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-poppins font-black text-4xl text-white">
                    {plan.price}
                  </span>
                  <span className="text-[#8892A4] text-sm mb-1">
                    {plan.currency}
                  </span>
                </div>
                <p className="text-[#8892A4] text-sm mb-3">{plan.description}</p>
                <div
                  className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full"
                  style={{
                    background: `${plan.color}10`,
                    color: plan.color,
                  }}
                >
                  🎯 Idéal pour : {plan.idealFor}
                </div>
              </div>

              <div className="gradient-divider mb-6" />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-sm ${!feature.included ? "opacity-40" : ""}`}
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: feature.included ? plan.color : "#8892A4" }}
                    />
                    <span
                      className={feature.included ? "text-[#E2E8F0]" : "text-[#8892A4] line-through"}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link
                  href={`/devis?plan=${plan.id}`}
                  className="block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  style={
                    plan.highlight
                      ? {
                          background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
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
                  Choisir {plan.name}
                </Link>
                <a
                  href={getWhatsAppLink(
                    `Bonjour NEXARA, je suis intéressé par le plan ${plan.name} à ${plan.price} DZD.`
                  )}
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

        {/* Enterprise */}
        <div
          className="p-8 md:p-12 rounded-3xl text-center mb-20"
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(6, 182, 212, 0.05))",
            border: "1px solid rgba(124, 58, 237, 0.2)",
          }}
        >
          <div className="text-4xl mb-4">🏢</div>
          <h2 className="font-poppins font-bold text-2xl text-white mb-4">
            Enterprise — Sur Devis
          </h2>
          <p className="text-[#8892A4] max-w-2xl mx-auto mb-6">
            Applications métier complexes, projets multi-sites, intégrations ERP/CRM,
            accompagnement stratégique long terme ou volumes importants. Nous construisons
            une solution entièrement adaptée à vos besoins.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Architecture sur-mesure", "Équipe dédiée", "SLA garanti", "Accompagnement stratégique", "Formation complète"].map((f, i) => (
              <span key={i} className="tag">{f}</span>
            ))}
          </div>
          <Link href="/contact" className="btn-primary">
            Demander un devis Enterprise
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Add-ons */}
        <div className="mb-20">
          <h2 className="font-poppins font-bold text-2xl text-white text-center mb-10">
            Options & <span className="gradient-text">Add-ons</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon, i) => (
              <div key={i} className="glass-card p-5 text-center">
                <div className="text-3xl mb-3">{addon.icon}</div>
                <h3 className="font-semibold text-white mb-1 text-sm">
                  {addon.name}
                </h3>
                <div className="gradient-text font-bold text-base mb-2">
                  {addon.price}
                </div>
                <p className="text-[#8892A4] text-xs">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-poppins font-bold text-2xl text-white text-center mb-10">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex gap-3">
                  <HelpCircle size={20} className="text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-[#8892A4] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
