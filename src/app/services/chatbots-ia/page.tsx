import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  MessageSquare,
  Zap,
  Brain,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chatbots IA — NEXARA | Automatisez votre service client en Algérie",
  description:
    "Déployez un chatbot IA sur mesure pour votre business en Algérie. Répondez à vos clients 24h/24 en arabe, français et anglais. ROI prouvé pour cliniques, hôtels, immobilier.",
  keywords: [
    "chatbot ia algérie",
    "chatbot whatsapp algérie",
    "assistant virtuel algérie",
    "automatisation service client algérie",
    "chatbot clinique algérie",
  ],
};

const benefits = [
  {
    icon: Clock,
    title: "Disponibilité 24h/24, 7j/7",
    description:
      "Votre chatbot répond instantanément à vos clients, même le week-end et les jours fériés.",
    color: "#7C3AED",
  },
  {
    icon: TrendingUp,
    title: "Réduction des coûts jusqu'à 60%",
    description:
      "Automatisez les questions répétitives et libérez votre équipe pour des tâches à haute valeur ajoutée.",
    color: "#06B6D4",
  },
  {
    icon: MessageSquare,
    title: "Multilingue : FR / AR / EN",
    description:
      "Communication fluide dans les trois langues du marché algérien, avec prise en charge du dialecte.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Intégration WhatsApp Business",
    description:
      "Directement là où se trouvent vos clients algériens — WhatsApp, Messenger ou votre site web.",
    color: "#10B981",
  },
  {
    icon: Brain,
    title: "IA Conversationnelle Avancée",
    description:
      "Propulsé par GPT-4 / Gemini. Votre chatbot apprend, s'améliore et comprend le contexte métier.",
    color: "#7C3AED",
  },
  {
    icon: Users,
    title: "Escalade intelligente vers humain",
    description:
      "Quand c'est nécessaire, le chatbot transfère la conversation à votre équipe avec tout le contexte.",
    color: "#06B6D4",
  },
];

const useCases = [
  {
    sector: "Cliniques & Santé",
    icon: "🏥",
    problems: ["Appels répétitifs pour prendre rendez-vous", "Questions sur les tarifs et services", "Suivi des patients chronophage"],
    solutions: [
      "Prise de rendez-vous automatique 24h/24",
      "FAQ médicale personnalisée",
      "Rappels de rendez-vous automatiques",
      "Collecte d'informations pré-consultation",
    ],
    result: "–70% d'appels entrants, +35% de rendez-vous confirmés",
    color: "#7C3AED",
  },
  {
    sector: "Hôtels & Restaurants",
    icon: "🏨",
    problems: ["Réservations manquées hors heures d'ouverture", "Questions répétitives sur le menu/chambres", "Expérience client fragile"],
    solutions: [
      "Réservations en temps réel",
      "Menu interactif avec photos",
      "Promotions et offres spéciales automatiques",
      "Avis clients collectés post-séjour",
    ],
    result: "+45% de réservations directes, note Google améliorée",
    color: "#06B6D4",
  },
  {
    sector: "Immobilier",
    icon: "🏢",
    problems: ["Prospects non qualifiés chronophages", "Visites inutiles", "Suivi des leads manuel"],
    solutions: [
      "Qualification automatique des prospects",
      "Présentation des biens avec visite virtuelle",
      "Agenda de visites automatisé",
      "CRM intégré avec notifications",
    ],
    result: "+60% de leads qualifiés, –50% de temps agent",
    color: "#F59E0B",
  },
  {
    sector: "Centres de Formation",
    icon: "🎓",
    problems: ["Demandes de renseignements massives", "Inscriptions manuelles laborieuses", "Suivi des apprenants difficile"],
    solutions: [
      "Conseiller pédagogique virtuel",
      "Inscriptions et paiements automatisés",
      "Rappels de cours et devoirs",
      "Support aux apprenants 24h/24",
    ],
    result: "+80% d'inscriptions en ligne, satisfaction +4.7/5",
    color: "#10B981",
  },
];

const packages = [
  {
    name: "Chatbot Starter",
    price: "45 000",
    description: "Idéal pour démarrer votre automatisation",
    features: [
      "Scénarios de conversation (15 flux)",
      "Intégration site web",
      "Formation initiale",
      "Support 30 jours",
      "Tableau de bord analytics basique",
    ],
    cta: "Commencer",
    highlight: false,
  },
  {
    name: "Chatbot Business",
    price: "85 000",
    description: "Pour les entreprises avec fort volume de contacts",
    features: [
      "Scénarios illimités + IA conversationnelle",
      "Intégration WhatsApp Business officielle",
      "Multilingue FR/AR/EN",
      "CRM integration (Notion / HubSpot)",
      "Dashboard analytics avancé",
      "Formation équipe complète",
      "Support 90 jours prioritaire",
    ],
    cta: "Choisir Business",
    highlight: true,
  },
  {
    name: "Chatbot IA Premium",
    price: "Sur devis",
    description: "Solution enterprise sur mesure",
    features: [
      "GPT-4 / Gemini personnalisé sur vos données",
      "Intégrations multi-canaux (WA + Messenger + Web)",
      "Escalade humaine intelligente",
      "Analyses sentiment clients",
      "Formation continue de l'IA",
      "SLA garanti + support dédié",
    ],
    cta: "Demander un devis",
    highlight: false,
  },
];

const faq = [
  {
    q: "Combien de temps pour déployer un chatbot ?",
    a: "Entre 2 et 4 semaines selon la complexité. Les premiers flux sont opérationnels dès la première semaine.",
  },
  {
    q: "Faut-il une expertise technique pour gérer le chatbot ?",
    a: "Non. Nous livrons une interface d'administration simple. Votre équipe peut modifier les réponses sans coder.",
  },
  {
    q: "Le chatbot comprend-il le dialecte algérien ?",
    a: "Oui. Nous fine-tunons spécifiquement sur le vocabulaire et expressions algériennes pour une expérience naturelle.",
  },
  {
    q: "Quelle est l'intégration avec WhatsApp Business ?",
    a: "Nous utilisons l'API officielle Meta WhatsApp Business. Votre numéro existant peut être connecté.",
  },
  {
    q: "Y a-t-il un coût mensuel après le déploiement ?",
    a: "Oui, une maintenance mensuelle optionnelle (à partir de 8 000 DZD/mois) couvre les mises à jour et l'hébergement.",
  },
];

export default function ChatbotsIAPage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
        <div className="container-nexara relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-badge mb-6">
              <Bot size={14} />
              Intelligence Artificielle
            </div>
            <h1 className="font-poppins font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              Chatbots{" "}
              <span className="gradient-text">IA sur Mesure</span>
              <br />
              pour le Marché Algérien
            </h1>
            <p className="text-xl text-[#8892A4] mb-10 max-w-2xl mx-auto leading-relaxed">
              Automatisez votre service client avec l'intelligence artificielle. 
              Disponible 24h/24, multilingue, et parfaitement adapté aux habitudes 
              de vos clients algériens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=chatbot" className="btn-primary text-base px-8 py-4">
                <Zap size={18} />
                Démarrer mon projet IA
              </Link>
              <Link href="#use-cases" className="btn-secondary text-base px-8 py-4">
                Voir les cas d'usage
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "24/7", label: "Disponibilité garantie" },
              { value: "–60%", label: "Coûts support réduits" },
              { value: "3 s", label: "Temps de réponse moyen" },
              { value: "+95%", label: "Satisfaction clients" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div
                  className="font-poppins font-black text-3xl mb-1"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#8892A4]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <div className="section-badge">
              <CheckCircle size={14} />
              Avantages clés
            </div>
            <h2 className="section-title">
              Pourquoi un Chatbot IA{" "}
              <span className="gradient-text">Change Tout</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Vos concurrents répondent encore manuellement à 23h. Vous, votre chatbot le fait en 3 secondes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${benefit.color}20`, border: `1px solid ${benefit.color}40` }}
                >
                  <benefit.icon size={22} style={{ color: benefit.color }} />
                </div>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <div className="section-badge">
              <Users size={14} />
              Secteurs cibles
            </div>
            <h2 className="section-title">
              Solutions <span className="gradient-text">Sectorielles</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Chaque secteur a ses spécificités. Nos chatbots sont conçus pour votre métier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc) => (
              <div
                key={uc.sector}
                className="glass-card p-8 hover:border-opacity-60 transition-all"
                style={{ borderColor: `${uc.color}30` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{uc.icon}</span>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-xl">{uc.sector}</h3>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs text-[#8892A4] uppercase tracking-wider mb-2 font-semibold">
                    Problèmes résolus
                  </p>
                  <ul className="space-y-1">
                    {uc.problems.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-[#8892A4]">
                        <span className="text-red-400">✗</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <p className="text-xs text-[#06B6D4] uppercase tracking-wider mb-2 font-semibold">
                    Ce que notre chatbot apporte
                  </p>
                  <ul className="space-y-1">
                    {uc.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-[#E2E8F0]">
                        <CheckCircle size={14} style={{ color: uc.color, flexShrink: 0 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{ background: `${uc.color}15`, color: uc.color, border: `1px solid ${uc.color}30` }}
                >
                  📈 Résultat client : {uc.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <div className="section-badge">
              <Star size={14} />
              Offres & Tarifs
            </div>
            <h2 className="section-title">
              Choisissez votre <span className="gradient-text">Formule</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`glass-card pricing-card ${pkg.highlight ? "featured" : ""}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      ⭐ Plus populaire
                    </span>
                  </div>
                )}
                <h3 className="font-poppins font-bold text-white text-xl mb-2">{pkg.name}</h3>
                <p className="text-[#8892A4] text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  {pkg.price !== "Sur devis" ? (
                    <>
                      <span className="font-poppins font-black text-4xl text-white">{pkg.price}</span>
                      <span className="text-[#8892A4] ml-1">DZD</span>
                    </>
                  ) : (
                    <span className="font-poppins font-black text-3xl gradient-text">{pkg.price}</span>
                  )}
                </div>
                <div className="gradient-divider mb-6" />
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#E2E8F0]">
                      <CheckCircle size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/devis?service=chatbot&plan=${encodeURIComponent(pkg.name)}`}
                  className={pkg.highlight ? "btn-primary w-full" : "btn-secondary w-full"}
                >
                  {pkg.cta}
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Questions <span className="gradient-text">Fréquentes</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="glass-card p-6">
                <h3 className="font-semibold text-white mb-2 flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">Q.</span>
                  {item.q}
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding">
        <div className="container-nexara">
          <div
            className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.15) 100%)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10">
              <span className="text-5xl mb-4 block">🤖</span>
              <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
                Prêt à automatiser votre service client ?
              </h2>
              <p className="text-[#8892A4] text-lg mb-8 max-w-xl mx-auto">
                Démarrez votre projet chatbot IA en 48h. Audit gratuit de votre besoin inclus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis?service=chatbot" className="btn-primary text-base px-8 py-4">
                  <Zap size={18} />
                  Démarrer — Audit gratuit
                </Link>
                <a
                  href="https://wa.me/213XXXXXXXXX?text=Bonjour NEXARA, je suis intéressé par un chatbot IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
