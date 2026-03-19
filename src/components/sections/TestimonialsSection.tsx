import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Samira Benali",
    role: "Directrice",
    company: "Clinique Médecine Privée — Alger",
    content:
      "NEXARA a transformé notre cabinet. Notre site est désormais notre meilleur commercial : les patients arrivent déjà informés, rassurés et prêts à prendre rendez-vous. En 3 mois, nos prises de RDV en ligne ont triplé.",
    rating: 5,
    avatar: "👩‍⚕️",
    sector: "Santé",
    color: "#10B981",
  },
  {
    name: "Karim Meziani",
    role: "Gérant",
    company: "Immobilier Prestige — Oran",
    content:
      "Ce qui m'a convaincu avec NEXARA, c'est leur sérieux dès le premier échange. Ils ont compris notre marché, nos clients et nos contraintes. Le résultat dépasse mes attentes initiales en termes de design et de fonctionnalités.",
    rating: 5,
    avatar: "👨‍💼",
    sector: "Immobilier",
    color: "#7C3AED",
  },
  {
    name: "Nadia Oussedik",
    role: "Fondatrice",
    company: "Restaurant Gastro L'Olivier — Constantine",
    content:
      "Le chatbot IA qu'ils ont développé pour nous gère les réservations, répond aux questions et capte les clients même à 23h. Résultat concret : +40% de réservations en ligne en 6 semaines. Un investissement qui s'est rentabilisé en 2 mois.",
    rating: 5,
    avatar: "👩‍🍳",
    sector: "Restauration",
    color: "#06B6D4",
  },
  {
    name: "Sofiane Larbi",
    role: "Directeur Commercial",
    company: "Formation Pro Excellence — Annaba",
    content:
      "Notre centre de formation avait besoin d'une présence digitale cohérente avec notre positionnement premium. NEXARA a livré exactement ça — et dans les délais annoncés. Le dashboard admin est intuitif, nos équipes l'ont adopté immédiatement.",
    rating: 5,
    avatar: "👨‍🏫",
    sector: "Formation",
    color: "#F59E0B",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container-nexara relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-6 w-fit">
            ✦ Témoignages Clients
          </div>
          <h2 className="section-title">
            Ce que disent ceux qui
            <br />
            <span className="gradient-text">nous ont fait confiance</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Des entreprises algériennes qui ont fait le choix de l'excellence
            digitale. Leurs résultats parlent pour nous.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote
                size={48}
                className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ color: t.color }}
              />

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    fill="#F59E0B"
                    className="text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-[#E2E8F0] text-sm md:text-base leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0"
                  style={{
                    background: `${t.color}20`,
                    border: `2px solid ${t.color}40`,
                  }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-poppins font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-[#8892A4] text-sm">{t.role}</div>
                  <div className="text-[#8892A4] text-xs mt-0.5">{t.company}</div>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${t.color}15`,
                    color: t.color,
                    border: `1px solid ${t.color}30`,
                  }}
                >
                  {t.sector}
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${t.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="text-center mt-10">
          <p className="text-[#8892A4] text-sm">
            Les témoignages présentés sont représentatifs des résultats obtenus par nos clients.
            Les performances réelles varient selon le secteur et la stratégie mise en place.
          </p>
        </div>
      </div>
    </section>
  );
}
