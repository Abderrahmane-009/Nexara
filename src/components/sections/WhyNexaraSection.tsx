import { CheckCircle2, XCircle } from "lucide-react";

const advantages = [
  {
    icon: "🎯",
    title: "Expertise locale + standards internationaux",
    description:
      "Nous maîtrisons les nuances du marché algérien (langue, culture, réglementation) tout en appliquant les meilleures pratiques internationales en design, développement et marketing digital.",
  },
  {
    icon: "📱",
    title: "Mobile-first & WhatsApp natif",
    description:
      "Vos solutions sont conçues pour les usages réels algériens — mobile dominant, WhatsApp comme canal principal. Pas de friction, une adoption immédiate.",
  },
  {
    icon: "⚡",
    title: "Livraison rapide sans compromis qualité",
    description:
      "Processus agile éprouvé. Résultats concrets en semaines, pas en mois. Chaque étape est documentée et communiquée en temps réel.",
  },
  {
    icon: "🔒",
    title: "Conformité légale algérienne",
    description:
      "Protection des données conforme à la loi n°18-07, contrats sécurisés, mentions légales irréprochables. Votre sérénité juridique est notre priorité.",
  },
  {
    icon: "📊",
    title: "Approche ROI mesurable",
    description:
      "Chaque décision est orientée résultat. Nous définissons des KPIs clairs dès le départ et vous fournissons des rapports réguliers sur les performances.",
  },
  {
    icon: "🤝",
    title: "Accompagnement humain sur la durée",
    description:
      "Un interlocuteur dédié, disponible sur WhatsApp. Pas de ticket support anonyme — un vrai partenaire qui connaît votre activité.",
  },
];

const comparisons = [
  { feature: "Design premium sur-mesure", nexara: true, competitor: false },
  { feature: "Stack technique internationale", nexara: true, competitor: false },
  { feature: "SEO technique avancé", nexara: true, competitor: false },
  { feature: "Intégration IA & automatisation", nexara: true, competitor: false },
  { feature: "Support WhatsApp 7j/7", nexara: true, competitor: false },
  { feature: "Conformité légale DZ", nexara: true, competitor: false },
  { feature: "Tableau de bord client", nexara: true, competitor: false },
  { feature: "Rapports performances mensuels", nexara: true, competitor: false },
];

export function WhyNexaraSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-nexara relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-6 w-fit">
            ✦ Pourquoi NEXARA
          </div>
          <h2 className="section-title">
            La différence que vous
            <br />
            <span className="gradient-text">méritez vraiment</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Il ne suffit pas d'avoir un site. Il faut une présence digitale qui
            travaille pour vous, 24h/24, avec des résultats mesurables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Advantages */}
          <div className="space-y-6">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:bg-white/3 group"
                style={{ border: "1px solid rgba(124, 58, 237, 0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "rgba(124, 58, 237, 0.12)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                  }}
                >
                  {adv.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-white mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-[#8892A4] text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div
            className="rounded-3xl overflow-hidden sticky top-24"
            style={{
              background: "rgba(20, 20, 40, 0.8)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              boxShadow: "0 20px 60px rgba(124, 58, 237, 0.1)",
            }}
          >
            {/* Table Header */}
            <div
              className="grid grid-cols-3 p-4"
              style={{
                background: "rgba(124, 58, 237, 0.1)",
                borderBottom: "1px solid rgba(124, 58, 237, 0.2)",
              }}
            >
              <div className="text-sm text-[#8892A4] font-medium">
                Caractéristique
              </div>
              <div className="text-center">
                <span className="font-poppins font-bold gradient-text text-sm">
                  NEXARA
                </span>
              </div>
              <div className="text-center text-sm text-[#8892A4]">
                Agences classiques
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#2D2D4F]/30">
              {comparisons.map((comp, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-4 py-3.5 hover:bg-white/2 transition-colors"
                >
                  <div className="text-[#8892A4] text-sm flex items-center">
                    {comp.feature}
                  </div>
                  <div className="flex justify-center items-center">
                    <CheckCircle2
                      size={20}
                      className="text-[#10B981]"
                      fill="rgba(16, 185, 129, 0.15)"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <XCircle
                      size={20}
                      className="text-[#EF4444]/50"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div
              className="p-4 text-center"
              style={{
                background: "rgba(124, 58, 237, 0.05)",
                borderTop: "1px solid rgba(124, 58, 237, 0.15)",
              }}
            >
              <p className="text-[#8892A4] text-xs">
                Comparaison réalisée sur la base des pratiques courantes du
                marché algérien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
