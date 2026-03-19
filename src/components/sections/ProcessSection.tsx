const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Consultation & Analyse",
    description:
      "On débute par un appel ou un échange WhatsApp gratuit pour comprendre votre activité, vos objectifs et les attentes de vos clients. C'est ici que votre projet prend forme.",
    duration: "J+1",
    color: "#7C3AED",
  },
  {
    number: "02",
    icon: "🎨",
    title: "Conception & Maquettes",
    description:
      "Notre équipe conçoit l'architecture de votre solution — wireframes, design UI et prototype interactif soumis à votre validation. Aucune surprise en production.",
    duration: "J+5 à J+10",
    color: "#06B6D4",
  },
  {
    number: "03",
    icon: "⚙️",
    title: "Développement & Intégration",
    description:
      "Développement frontend, backend, intégration des fonctionnalités et configurations SEO. Tests rigoureux à chaque étape pour une qualité irréprochable.",
    duration: "J+15 à J+30",
    color: "#10B981",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Mise en Ligne & Formation",
    description:
      "Déploiement sécurisé, formation à l'utilisation et transfert complet de votre solution. Vous maîtrisez votre outil dès le premier jour.",
    duration: "J+30 à J+45",
    color: "#F59E0B",
  },
  {
    number: "05",
    icon: "📈",
    title: "Suivi & Optimisation",
    description:
      "Accompagnement post-lancement, monitoring des performances, optimisations continues et support réactif sur WhatsApp. Votre partenaire, pas juste un prestataire.",
    duration: "Continu",
    color: "#8B5CF6",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container-nexara relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Notre Process</div>
          <h2 className="section-title">
            De l'idée au lancement,
            <br />
            <span className="gradient-text">un process sans friction</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Transparence et rigueur à chaque étape. Vous savez exactement où en
            est votre projet à tout moment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 hidden lg:block"
            style={{
              background:
                "linear-gradient(180deg, #7C3AED, #06B6D4, #10B981, #F59E0B, #8B5CF6)",
            }}
          />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col lg:flex-row lg:items-center gap-6 group lg:mb-0 mb-8"
                style={{ paddingBottom: i < steps.length - 1 ? "2rem" : "0" }}
              >
                {/* Step Number Circle */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 font-poppins font-black text-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}`,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}30`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-6 rounded-2xl transition-all duration-300 group-hover:border-opacity-50"
                  style={{
                    background: "rgba(20, 20, 40, 0.6)",
                    border: `1px solid rgba(124, 58, 237, 0.12)`,
                  }}
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-poppins font-black text-sm opacity-50"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <h3 className="font-poppins font-bold text-lg text-white">
                        {step.title}
                      </h3>
                    </div>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        background: `${step.color}15`,
                        color: step.color,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#8892A4] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
