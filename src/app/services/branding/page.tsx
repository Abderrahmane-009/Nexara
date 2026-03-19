import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  Layers,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Branding & Identité Visuelle — NEXARA | Algérie",
  description:
    "Créez une identité de marque mémorable pour votre entreprise en Algérie. Logo, charte graphique, supports de communication. Design premium inspiré du marché local.",
  keywords: [
    "branding algérie",
    "création logo algérie",
    "identité visuelle algérie",
    "charte graphique algérie",
    "design graphique algérie",
  ],
};

const services = [
  {
    icon: "✨",
    title: "Création de Logo",
    description: "Logo vectoriel professionnel avec déclinaisons couleur, noir/blanc, versions horizontale et verticale.",
    deliverables: ["3 concepts originaux", "Révisions illimitées", "Formats AI / SVG / PNG / PDF", "Guide d'utilisation"],
    price: "À partir de 25 000 DZD",
    color: "#7C3AED",
  },
  {
    icon: "🎨",
    title: "Charte Graphique Complète",
    description: "Guide de style exhaustif : typographie, palette de couleurs, icônes, espacement, règles d'utilisation.",
    deliverables: ["Document PDF 30+ pages", "Palette de couleurs codifiée", "Typographies sélectionnées", "Exemples d'application"],
    price: "À partir de 45 000 DZD",
    color: "#06B6D4",
  },
  {
    icon: "📦",
    title: "Brand Kit Complet",
    description: "Tout ce dont vous avez besoin pour une marque cohérente : logo + charte + supports.",
    deliverables: ["Logo + charte complète", "Carte de visite / papeterie", "Templates réseaux sociaux", "Présentation PowerPoint"],
    price: "À partir de 75 000 DZD",
    color: "#F59E0B",
  },
  {
    icon: "🏪",
    title: "Identité Retail / Signalétique",
    description: "Enseigne, PLV, uniformes, packaging. Identité physique de votre point de vente.",
    deliverables: ["Maquettes enseigne", "Templates PLV", "Uniformes et badges", "Manuel signalétique"],
    price: "Sur devis",
    color: "#10B981",
  },
  {
    icon: "📱",
    title: "Branding Digital",
    description: "Présence cohérente sur tous vos canaux digitaux : site, réseaux sociaux, email.",
    deliverables: ["Avatars et banners réseaux", "Templates posts IG/FB/LinkedIn", "Signature email HTML", "Newsletter template"],
    price: "À partir de 35 000 DZD",
    color: "#7C3AED",
  },
  {
    icon: "📋",
    title: "Supports Commerciaux",
    description: "Brochures, catalogues, plaquettes, présentations commerciales qui vendent.",
    deliverables: ["Brochure A4 recto-verso", "Catalogue produits", "Présentation client", "Devis / Facture modèles"],
    price: "À partir de 20 000 DZD",
    color: "#06B6D4",
  },
];

const designProcess = [
  {
    step: "01",
    title: "Brief & Inspiration",
    desc: "Nous découvrons votre histoire, vos valeurs, votre cible et vos ambitions. Moodboard inspirationnel.",
    emoji: "💭",
  },
  {
    step: "02",
    title: "Exploration Créative",
    desc: "3 directions créatives distinctes. Vous choisissez la direction qui résonne avec votre vision.",
    emoji: "🎭",
  },
  {
    step: "03",
    title: "Affinage & Validation",
    desc: "Révisions collaboratives jusqu'à perfection. Votre satisfaction est notre priorité.",
    emoji: "✏️",
  },
  {
    step: "04",
    title: "Livraison & Déploiement",
    desc: "Tous les fichiers sources + guide d'utilisation. Accompagnement pour le déploiement.",
    emoji: "🚀",
  },
];

const portfolio = [
  {
    name: "Clinique Al Shifa",
    sector: "Santé",
    description: "Identité médicale premium avec nuances bleu-vert et typographie rassurante.",
    tags: ["Logo", "Charte", "Signalétique"],
    color: "#06B6D4",
  },
  {
    name: "Café Zitoun",
    sector: "Restauration",
    description: "Branding chaleureux inspiré de l'artisanat algérien avec accents dorés.",
    tags: ["Logo", "Packaging", "Réseaux"],
    color: "#F59E0B",
  },
  {
    name: "ImmoPro DZ",
    sector: "Immobilier",
    description: "Image corporative luxe pour agence immobilière premium à Alger.",
    tags: ["Brand Kit", "Supports", "Digital"],
    color: "#7C3AED",
  },
  {
    name: "FormaTech",
    sector: "Formation",
    description: "Identité moderne et pédagogique pour centre de formation technologique.",
    tags: ["Logo", "Charte", "Site web"],
    color: "#10B981",
  },
];

const values = [
  {
    title: "Identité Unique",
    desc: "Jamais de templates génériques. Chaque marque est pensée et créée de zéro.",
    icon: "💎",
  },
  {
    title: "Ancrage Local",
    desc: "Nous intégrons les codes culturels algériens tout en respectant les standards internationaux.",
    icon: "🇩🇿",
  },
  {
    title: "Cohérence Totale",
    desc: "Du logo au site web, en passant par les réseaux — votre marque parle d'une seule voix.",
    icon: "🎯",
  },
  {
    title: "Transmission de Valeurs",
    desc: "Votre design raconte votre histoire et crée une connexion émotionnelle avec vos clients.",
    icon: "❤️",
  },
];

export default function BrandingPage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #F59E0B, transparent)" }}
        />
        <div className="container-nexara relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-badge mb-6">
              <Palette size={14} />
              Branding & Design
            </div>
            <h1 className="font-poppins font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              Une Marque qui{" "}
              <span className="gradient-text-gold">Inspire</span>
              <br />& qui se Souvient
            </h1>
            <p className="text-xl text-[#8892A4] mb-10 max-w-2xl mx-auto leading-relaxed">
              Votre logo est la première impression que vous faites. 
              Nous créons des identités visuelles premium qui reflètent vos valeurs 
              et captivent votre marché algérien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=branding" className="btn-gold text-base px-8 py-4">
                <Sparkles size={18} />
                Créer mon identité de marque
              </Link>
              <Link href="#portfolio-branding" className="btn-secondary text-base px-8 py-4">
                <Eye size={18} />
                Voir nos créations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 text-center">
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-poppins font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-[#8892A4] text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Nos Services de{" "}
              <span className="gradient-text">Branding</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="glass-card p-6"
                style={{ borderColor: `${s.color}25` }}
              >
                <span className="text-4xl block mb-3">{s.icon}</span>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-[#8892A4] text-sm mb-4">{s.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold mb-2" style={{ color: s.color }}>
                    INCLUS :
                  </p>
                  <ul className="space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                        <CheckCircle size={12} style={{ color: s.color, flexShrink: 0 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="text-sm font-bold px-3 py-1.5 rounded-lg inline-block"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Notre <span className="gradient-text">Processus Créatif</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {designProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  {step.emoji}
                </div>
                <div className="text-xs font-bold text-[#7C3AED] mb-1">{step.step}</div>
                <h3 className="font-poppins font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[#8892A4] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio-branding" className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <div className="section-badge">
              <Layers size={14} />
              Réalisations
            </div>
            <h2 className="section-title">
              Quelques <span className="gradient-text">Marques Créées</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((p) => (
              <div
                key={p.name}
                className="glass-card p-6 text-center"
                style={{ borderColor: `${p.color}25` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 font-poppins font-black text-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${p.color}40, ${p.color}20)`, border: `1px solid ${p.color}40` }}
                >
                  {p.name.charAt(0)}
                </div>
                <h3 className="font-poppins font-bold text-white mb-1">{p.name}</h3>
                <p className="text-xs text-[#8892A4] mb-3">{p.sector}</p>
                <p className="text-sm text-[#E2E8F0] mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {p.tags.map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(124,58,237,0.2) 100%)",
              border: "1px solid rgba(245,158,11,0.3)",
            }}
          >
            <span className="text-5xl block mb-4">🎨</span>
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
              Votre marque mérite d'être extraordinaire
            </h2>
            <p className="text-[#8892A4] text-lg mb-8 max-w-xl mx-auto">
              Brief gratuit. 3 concepts créatifs. Satisfaction garantie ou remboursé.
            </p>
            <Link href="/devis?service=branding" className="btn-gold text-base px-8 py-4">
              <Sparkles size={18} />
              Démarrer mon projet branding
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
