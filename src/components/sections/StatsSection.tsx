"use client";

export function StatsSection() {
  const stats = [
    {
      value: "27M+",
      label: "Internautes en Algérie",
      description: "Un marché digital en pleine explosion",
      color: "#7C3AED",
      icon: "🌐",
    },
    {
      value: "75%",
      label: "PME sans site professionnel",
      description: "Une opportunité unique pour votre entreprise",
      color: "#06B6D4",
      icon: "📊",
    },
    {
      value: "360°",
      label: "Approche digitale complète",
      description: "De la stratégie au déploiement",
      color: "#10B981",
      icon: "🔄",
    },
    {
      value: "48h",
      label: "Délai de réponse garanti",
      description: "Réactivité et engagement concrets",
      color: "#F59E0B",
      icon: "⚡",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0D0D1A 0%, rgba(20, 20, 40, 0.5) 50%, #0D0D1A 100%)",
        }}
      />

      <div className="container-nexara relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 text-center group"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div
                className="font-poppins font-black text-3xl md:text-4xl lg:text-5xl mb-2 transition-all duration-300 group-hover:scale-110"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="font-semibold text-white text-sm md:text-base mb-2">
                {stat.label}
              </div>
              <div className="text-[#8892A4] text-xs md:text-sm">
                {stat.description}
              </div>
              <div
                className="mt-4 h-0.5 rounded-full mx-auto w-12 transition-all duration-300 group-hover:w-24"
                style={{ background: stat.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
