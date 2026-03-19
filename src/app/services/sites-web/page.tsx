import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Search,
  TrendingUp,
  Shield,
  Clock,
  ChevronRight,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Création Sites Web Premium — NEXARA | Algérie",
  description:
    "Créez votre site web vitrine ou institutionnel premium en Algérie. Design sur mesure, SEO local optimisé, mobile-first. Livraison rapide. Standards internationaux.",
  keywords: [
    "création site web algérie",
    "site vitrine algérie",
    "agence web alger",
    "site web professionnel algérie",
    "développement web algérie",
  ],
};

const features = [
  {
    icon: Smartphone,
    title: "100% Mobile-First",
    description: "73% des algériens naviguent sur mobile. Votre site est parfait sur tous les écrans.",
    color: "#7C3AED",
  },
  {
    icon: Search,
    title: "SEO Local Optimisé",
    description: "Positionnement Google sur vos mots-clés locaux : ville, quartier, secteur.",
    color: "#06B6D4",
  },
  {
    icon: Zap,
    title: "Performance Maximale",
    description: "Score Lighthouse >95. Temps de chargement <2s même sur réseau 3G.",
    color: "#F59E0B",
  },
  {
    icon: Palette,
    title: "Design Premium Sur Mesure",
    description: "Interface unique qui reflète votre identité de marque et convainc vos visiteurs.",
    color: "#10B981",
  },
  {
    icon: Shield,
    title: "Sécurité & HTTPS",
    description: "Certificat SSL, protection contre les attaques, sauvegardes automatiques.",
    color: "#7C3AED",
  },
  {
    icon: Clock,
    title: "Livraison en 2-3 Semaines",
    description: "Process structuré et transparent. Vous validez chaque étape.",
    color: "#06B6D4",
  },
];

const siteTypes = [
  {
    type: "Site Vitrine",
    icon: "🌐",
    description: "Présentez votre activité de manière professionnelle et générez des leads qualifiés.",
    pages: ["Accueil impactante", "À propos / Notre équipe", "Services détaillés", "Galerie / Réalisations", "Témoignages clients", "Contact avec formulaire"],
    idealFor: "PME, artisans, professionnels libéraux, associations",
    price: "À partir de 35 000 DZD",
    color: "#7C3AED",
  },
  {
    type: "Site Institutionnel",
    icon: "🏢",
    description: "Crédibilité maximale pour les entreprises établies, avec contenu riche et blog.",
    pages: ["5 à 8 pages sur mesure", "Blog / Actualités", "Espace presse", "Offres d'emploi", "Formulaires avancés", "Multilangue FR/AR/EN"],
    idealFor: "Grandes entreprises, institutions, groupes algériens",
    price: "À partir de 75 000 DZD",
    color: "#06B6D4",
  },
  {
    type: "Landing Page",
    icon: "🎯",
    description: "Page unique ultra-optimisée pour convertir une campagne publicitaire ou produit.",
    pages: ["Design conversion-first", "Formulaire lead capture", "Preuve sociale intégrée", "A/B testing ready", "Analytics poussé", "Intégration CRM"],
    idealFor: "Campagnes Google Ads, lancement produit, événements",
    price: "À partir de 25 000 DZD",
    color: "#F59E0B",
  },
];

const process = [
  { step: "01", title: "Brief & Découverte", desc: "Nous analysons votre activité, vos concurrents et vos objectifs.", duration: "Jour 1-2" },
  { step: "02", title: "Maquettes & Design", desc: "Création des wireframes puis design haute fidélité validé par vous.", duration: "Jour 3-7" },
  { step: "03", title: "Développement", desc: "Intégration Next.js, optimisations SEO et performance.", duration: "Jour 8-14" },
  { step: "04", title: "Tests & Livraison", desc: "Tests cross-browser, mobile, vitesse. Mise en ligne avec formation.", duration: "Jour 15-18" },
];

const packages = [
  {
    name: "Starter",
    price: "35 000",
    unit: "DZD",
    description: "Landing page ou site vitrine 3 pages",
    features: [
      "Design sur mesure responsive",
      "Jusqu'à 3 pages",
      "Formulaire de contact",
      "Intégration Google Maps",
      "SEO de base",
      "SSL gratuit inclus",
      "Formation utilisation",
    ],
    cta: "Choisir Starter",
    highlight: false,
  },
  {
    name: "Business",
    price: "75 000",
    unit: "DZD",
    description: "Site complet 5-8 pages avec blog",
    features: [
      "5 à 8 pages personnalisées",
      "Blog / Actualités CMS",
      "SEO avancé + Google Search Console",
      "Intégration WhatsApp Business",
      "Formulaires multi-étapes",
      "Analytics Google + Hotjar",
      "Support 3 mois inclus",
    ],
    cta: "Choisir Business",
    highlight: true,
  },
  {
    name: "Premium",
    price: "120 000",
    unit: "DZD",
    description: "Site multilingue avec fonctions avancées",
    features: [
      "Tout le plan Business",
      "Multilangue FR/AR/EN",
      "Espace membres / connexion",
      "Chatbot IA intégré",
      "Performance 95+ Lighthouse",
      "Support prioritaire 6 mois",
      "Audit SEO trimestriel",
    ],
    cta: "Choisir Premium",
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Amira K.",
    role: "Directrice, Clinique Santé Plus — Alger",
    text: "Notre site NEXARA a transformé notre image. +200% de demandes de rendez-vous en ligne en 3 mois.",
    rating: 5,
    avatar: "AK",
    color: "#7C3AED",
  },
  {
    name: "Sofiane B.",
    role: "Gérant, Agence Immo Prestige — Oran",
    text: "Des leads qualifiés depuis le premier mois. Le SEO local est impressionnant. Top équipe.",
    rating: 5,
    avatar: "SB",
    color: "#06B6D4",
  },
  {
    name: "Lina M.",
    role: "Fondatrice, Institut Beauté Bloom — Tizi Ouzou",
    text: "Livré en 2 semaines comme promis, magnifique design, je recommande à 100%.",
    rating: 5,
    avatar: "LM",
    color: "#F59E0B",
  },
];

export default function SitesWebPage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
        <div className="container-nexara relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-badge mb-6">
              <Globe size={14} />
              Création Web Premium
            </div>
            <h1 className="font-poppins font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              Sites Web qui{" "}
              <span className="gradient-text">Convertissent</span>
              <br />
              & Inspirent Confiance
            </h1>
            <p className="text-xl text-[#8892A4] mb-10 max-w-2xl mx-auto leading-relaxed">
              75% des PME algériennes n'ont pas de site professionnel. 
              Soyez visible, crédible et générez des clients en ligne dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=site-web" className="btn-primary text-base px-8 py-4">
                <Zap size={18} />
                Obtenir mon devis gratuit
              </Link>
              <Link href="/portfolio" className="btn-secondary text-base px-8 py-4">
                Voir nos réalisations
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "150+", label: "Sites livrés en Algérie" },
              { value: "2-3", label: "Semaines de livraison" },
              { value: "95+", label: "Score Lighthouse" },
              { value: "4.9★", label: "Note client moyenne" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="font-poppins font-black text-3xl mb-1 gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-[#8892A4]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Types */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Quel type de site <span className="gradient-text">vous correspond ?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteTypes.map((s) => (
              <div
                key={s.type}
                className="glass-card p-8 hover:scale-[1.02] transition-all"
                style={{ borderColor: `${s.color}30` }}
              >
                <span className="text-4xl block mb-4">{s.icon}</span>
                <h3 className="font-poppins font-bold text-white text-xl mb-2">{s.type}</h3>
                <p className="text-[#8892A4] text-sm mb-5">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.pages.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[#E2E8F0]">
                      <CheckCircle size={14} style={{ color: s.color, flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-[#8892A4] mb-3">
                  <span className="font-semibold" style={{ color: s.color }}>Idéal pour :</span> {s.idealFor}
                </div>
                <div className="font-poppins font-bold text-white">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Inclus dans <span className="gradient-text">chaque projet</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}40` }}
                >
                  <f.icon size={22} style={{ color: f.color }} />
                </div>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">{f.description}</p>
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
              Notre <span className="gradient-text">Processus</span> en 4 Étapes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {process.map((step, i) => (
              <div key={step.step} className="text-center relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 font-poppins font-black text-2xl text-white"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
                >
                  {step.step}
                </div>
                <div className="text-xs text-[#7C3AED] font-semibold mb-1">{step.duration}</div>
                <h3 className="font-poppins font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[#8892A4] text-sm">{step.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#7C3AED]/40 to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Tarifs <span className="gradient-text">Transparents</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card pricing-card ${pkg.highlight ? "featured" : ""}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      ⭐ Recommandé
                    </span>
                  </div>
                )}
                <h3 className="font-poppins font-bold text-white text-xl mb-1">{pkg.name}</h3>
                <p className="text-[#8892A4] text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="font-poppins font-black text-4xl text-white">{pkg.price}</span>
                  <span className="text-[#8892A4] ml-1">{pkg.unit}</span>
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
                  href={`/devis?service=site-web&plan=${encodeURIComponent(pkg.name)}`}
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

      {/* Testimonials */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Ce que disent <span className="gradient-text">nos clients</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#E2E8F0] text-sm mb-5 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{ background: `linear-gradient(135deg, ${t.color}, #06B6D4)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-[#8892A4]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-nexara">
          <div
            className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(124,58,237,0.2) 100%)",
              border: "1px solid rgba(6,182,212,0.3)",
            }}
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
                Lancez votre présence digitale dès aujourd'hui
              </h2>
              <p className="text-[#8892A4] text-lg mb-8 max-w-xl mx-auto">
                Devis gratuit en 24h. Livraison en 2-3 semaines. Résultats garantis.
              </p>
              <Link href="/devis?service=site-web" className="btn-primary text-base px-8 py-4">
                <Globe size={18} />
                Demander mon devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
