import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Zap, Globe, Shield, Users } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À Propos de NEXARA | Agence Digitale Algérie",
  description:
    "Découvrez NEXARA — notre mission, nos valeurs, notre équipe et notre vision pour la transformation digitale en Algérie. Excellence, transparence et innovation.",
};

const values = [
  {
    icon: <Zap size={24} />,
    title: "Excellence",
    description: "Chaque ligne de code, chaque pixel, chaque mot de copy — nous ne livrons que ce qui dépasse les attentes.",
    color: "#F59E0B",
  },
  {
    icon: <Shield size={24} />,
    title: "Transparence",
    description: "Zéro coût caché, zéro promesse non tenue. Vous savez exactement ce que vous payez et ce que vous obtenez.",
    color: "#10B981",
  },
  {
    icon: <Zap size={24} />,
    title: "Innovation",
    description: "IA, automatisation, design system moderne — nous intégrons les meilleures technologies pour votre avantage concurrentiel.",
    color: "#7C3AED",
  },
  {
    icon: <Globe size={24} />,
    title: "Ancrage Local",
    description: "Nous connaissons le marché algérien de l'intérieur. Nos solutions sont pensées pour vos clients, pas pour un marché générique.",
    color: "#06B6D4",
  },
  {
    icon: <Zap size={24} />,
    title: "Réactivité",
    description: "Délais tenus, réponses rapides sur WhatsApp, livraisons ponctuelles. Votre temps est précieux — nous le respectons.",
    color: "#EF4444",
  },
  {
    icon: <Heart size={24} />,
    title: "Intégrité",
    description: "Nous vous conseillons ce dont vous avez réellement besoin, pas ce qui gonfle la facture. Le partenariat long terme est notre priorité.",
    color: "#8B5CF6",
  },
];

const team = [
  {
    name: "Équipe Direction",
    role: "Stratégie & Vision",
    description: "Pilotage stratégique, relation client grands comptes et développement commercial.",
    avatar: "👔",
    color: "#7C3AED",
  },
  {
    name: "Équipe Design",
    role: "UX/UI & Branding",
    description: "Designers seniors spécialisés B2B avec une expertise sur les marchés MENA.",
    avatar: "🎨",
    color: "#06B6D4",
  },
  {
    name: "Équipe Dev",
    role: "Développement Full-Stack",
    description: "Développeurs React, Node.js et IA avec une stack moderne et des standards internationaux.",
    avatar: "💻",
    color: "#10B981",
  },
  {
    name: "Équipe Marketing",
    role: "SEO & Growth",
    description: "Spécialistes SEO local DZ, content marketing et stratégie d'acquisition digitale.",
    avatar: "📈",
    color: "#F59E0B",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero About */}
      <section className="relative overflow-hidden mb-20">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 58, 237, 0.1) 0%, transparent 60%)",
          }}
        />
        <div className="container-nexara relative z-10 text-center max-w-4xl mx-auto py-10">
          <div className="section-badge mx-auto mb-6 w-fit">✦ À Propos de NEXARA</div>
          <h1 className="section-title mb-6">
            Une agence née de la conviction que
            <br />
            <span className="gradient-text">l'Algérie mérite mieux</span>
          </h1>
          <p className="text-lg text-[#8892A4] leading-relaxed max-w-3xl mx-auto mb-8">
            NEXARA est née d'un constat simple : les entreprises algériennes méritent des
            solutions digitales à la hauteur de leurs ambitions. Pas du low-cost bâclé,
            pas des templates génériques — des solutions premium, construites pour durer,
            adaptées à la réalité algérienne.
          </p>
        </div>
      </section>

      <div className="container-nexara">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div
            className="glass-card p-8"
            style={{ borderLeft: "3px solid #7C3AED" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(124, 58, 237, 0.15)" }}
              >
                <Target size={24} className="text-[#7C3AED]" />
              </div>
              <h2 className="font-poppins font-bold text-xl text-white">Notre Mission</h2>
            </div>
            <p className="text-[#8892A4] leading-relaxed">
              Démocratiser l'excellence digitale pour les entreprises algériennes en apportant
              des standards internationaux — performance, UX, IA et automatisation — adaptés
              aux réalités et opportunités du marché local. Chaque projet livré est une
              contribution concrète à la transformation numérique de l'Algérie.
            </p>
          </div>

          <div
            className="glass-card p-8"
            style={{ borderLeft: "3px solid #06B6D4" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(6, 182, 212, 0.15)" }}
              >
                <Eye size={24} className="text-[#06B6D4]" />
              </div>
              <h2 className="font-poppins font-bold text-xl text-white">Notre Vision 2030</h2>
            </div>
            <p className="text-[#8892A4] leading-relaxed">
              Devenir le partenaire de référence de la transformation numérique en Afrique du
              Nord. NEXARA ambitionne d'accompagner des centaines d'entreprises algériennes
              vers la croissance digitale, en créant un écosystème tech local fort,
              compétitif et exportable.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto mb-6 w-fit">✦ Nos Valeurs</div>
            <h2 className="section-title">
              Ce qui guide chacune
              <br />
              <span className="gradient-text">de nos décisions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <div key={i} className="glass-card p-6 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${value.color}15`,
                    border: `1px solid ${value.color}30`,
                    color: value.color,
                  }}
                >
                  {value.icon}
                </div>
                <h3 className="font-poppins font-bold text-white mb-2">{value.title}</h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto mb-6 w-fit">✦ Notre Équipe</div>
            <h2 className="section-title">
              Des experts qui
              <span className="gradient-text"> s'engagent pour vous</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Une équipe pluridisciplinaire unie autour d'une seule ambition :
              livrer des résultats qui dépassent vos attentes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div key={i} className="glass-card p-6 text-center group">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${member.color}15`,
                    border: `1px solid ${member.color}30`,
                  }}
                >
                  {member.avatar}
                </div>
                <h3 className="font-poppins font-semibold text-white mb-1">{member.name}</h3>
                <div
                  className="text-xs font-medium mb-3"
                  style={{ color: member.color }}
                >
                  {member.role}
                </div>
                <p className="text-[#8892A4] text-xs leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Context */}
        <div
          className="p-8 md:p-12 rounded-3xl mb-20"
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(6, 182, 212, 0.05))",
            border: "1px solid rgba(124, 58, 237, 0.2)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-badge mb-6 w-fit">✦ Le Marché DZ</div>
              <h2 className="font-poppins font-bold text-2xl text-white mb-4">
                Un marché en pleine
                <span className="gradient-text"> transformation</span>
              </h2>
              <p className="text-[#8892A4] leading-relaxed mb-6">
                L'Algérie compte aujourd'hui plus de 27 millions d'internautes, avec un taux
                de pénétration mobile de 80%. Pourtant, 75% des PME algériennes n'ont pas encore
                de présence digitale professionnelle. C'est une opportunité historique — et
                NEXARA est là pour vous aider à la saisir avant vos concurrents.
              </p>
              <ul className="space-y-3 text-sm text-[#8892A4]">
                {[
                  "WhatsApp : canal N°1 de communication B2C",
                  "Instagram : levier majeur d'acquisition locale",
                  "SEO local encore très peu exploité",
                  "Demande explosive en solutions IA pratiques",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "27M+", label: "Internautes", color: "#7C3AED" },
                { value: "80%", label: "Taux mobile", color: "#06B6D4" },
                { value: "75%", label: "PME sans digital", color: "#F59E0B" },
                { value: "+18%", label: "Croissance annuelle", color: "#10B981" },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-5 text-center">
                  <div
                    className="font-poppins font-black text-2xl md:text-3xl mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#8892A4] text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-poppins font-bold text-2xl text-white mb-4">
            Rejoignez les entreprises qui ont choisi
            <span className="gradient-text"> l'excellence</span>
          </h2>
          <p className="text-[#8892A4] mb-8 max-w-xl mx-auto">
            Consultez-nous gratuitement. Partagez votre projet. Laissez-nous
            vous montrer ce que NEXARA peut accomplir pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary">
              Démarrer un Projet
              <ArrowRight size={18} />
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
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
  );
}
