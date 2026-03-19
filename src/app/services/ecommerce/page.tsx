import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  CreditCard,
  Package,
  TrendingUp,
  Shield,
  Smartphone,
  ChevronRight,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Premium — NEXARA | Boutique en ligne Algérie",
  description:
    "Créez votre boutique en ligne professionnelle en Algérie. Paiements CIB/Edahabia, livraison intégrée, gestion facile. Lancez votre e-commerce en 3 semaines.",
  keywords: [
    "e-commerce algérie",
    "boutique en ligne algérie",
    "création site e-commerce algérie",
    "paiement en ligne algérie",
    "vente en ligne algérie",
  ],
};

const features = [
  {
    icon: CreditCard,
    title: "Paiements CIB / Edahabia",
    description: "Intégration des solutions de paiement locales algériennes. CIB, Edahabia, et paiement à la livraison.",
    color: "#7C3AED",
  },
  {
    icon: Package,
    title: "Gestion des Commandes",
    description: "Dashboard complet : suivi commandes, stocks, factures. Interface simple pour votre équipe.",
    color: "#06B6D4",
  },
  {
    icon: Smartphone,
    title: "Mobile Shopping Optimisé",
    description: "80% des achats en ligne en Algérie se font sur mobile. Expérience d'achat fluide et rapide.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Sécurité Transactions",
    description: "SSL, protection anti-fraude, données sécurisées. Conformité RGPD et loi 18-07 DZ.",
    color: "#10B981",
  },
  {
    icon: TrendingUp,
    title: "SEO E-Commerce",
    description: "Optimisation produits pour Google Shopping. Augmentez votre trafic organique.",
    color: "#7C3AED",
  },
  {
    icon: BarChart,
    title: "Analytics & Rapports",
    description: "Chiffre d'affaires, produits phares, taux de conversion. Décisions basées sur les données.",
    color: "#06B6D4",
  },
];

const sectors = [
  {
    name: "Mode & Prêt-à-Porter",
    icon: "👗",
    features: ["Galerie produits avec zoom", "Tailles et couleurs variables", "Lookbook intégré", "WhatsApp pour conseils"],
    color: "#7C3AED",
  },
  {
    name: "Alimentation & Épicerie",
    icon: "🛒",
    features: ["Commande en ligne + livraison", "Catalogue avec ruptures de stock", "Abonnement hebdomadaire", "Zones de livraison Alger"],
    color: "#10B981",
  },
  {
    name: "Artisanat & Produits Locaux",
    icon: "🏺",
    features: ["Vitrine artisan algérien", "Histoires des produits", "Export et livraison nationale", "Paiement à la livraison"],
    color: "#F59E0B",
  },
  {
    name: "Électronique & Tech",
    icon: "📱",
    features: ["Fiches techniques détaillées", "Comparateur de produits", "SAV et garantie intégrés", "Promotions flash"],
    color: "#06B6D4",
  },
];

const packages = [
  {
    name: "Shop Starter",
    price: "75 000",
    description: "Boutique jusqu'à 50 produits",
    features: [
      "Jusqu'à 50 produits",
      "Paiement à la livraison + CIB",
      "Gestion commandes de base",
      "Intégration WhatsApp Business",
      "Design responsive mobile",
      "Formation 2h incluse",
    ],
    cta: "Lancer ma boutique",
    highlight: false,
  },
  {
    name: "Shop Business",
    price: "150 000",
    description: "Boutique illimitée avec IA",
    features: [
      "Produits illimités + variations",
      "Tous modes de paiement DZ",
      "Dashboard analytics avancé",
      "Recommandations IA produits",
      "Blog et SEO e-commerce",
      "Application mobile (PWA)",
      "Support 6 mois prioritaire",
    ],
    cta: "Choisir Business",
    highlight: true,
  },
  {
    name: "Marketplace",
    price: "Sur devis",
    description: "Multi-vendeurs ou grande marketplace",
    features: [
      "Architecture multi-vendeurs",
      "Commission et paiements automatiques",
      "Espace vendeur personnalisé",
      "Modération et admin avancé",
      "Intégration ERP / logistique",
      "SLA et support dédié",
    ],
    cta: "Nous contacter",
    highlight: false,
  },
];

const stats = [
  { value: "27M+", label: "Internautes en Algérie" },
  { value: "80%", label: "Achats sur mobile" },
  { value: "+40%", label: "Croissance e-commerce DZ/an" },
  { value: "3x", label: "ROI moyen boutiques NEXARA" },
];

export default function EcommercePage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #10B981, transparent)" }}
        />
        <div className="container-nexara relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-badge mb-6">
              <ShoppingCart size={14} />
              E-Commerce Premium
            </div>
            <h1 className="font-poppins font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              Votre Boutique en Ligne{" "}
              <span className="gradient-text">Made for Algeria</span>
            </h1>
            <p className="text-xl text-[#8892A4] mb-10 max-w-2xl mx-auto leading-relaxed">
              E-commerce clé en main adapté au marché algérien : paiements CIB/Edahabia, 
              livraison nationale, mobile-first, et SEO local optimisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=ecommerce" className="btn-primary text-base px-8 py-4">
                <Zap size={18} />
                Lancer ma boutique
              </Link>
              <Link href="/portfolio?filter=ecommerce" className="btn-secondary text-base px-8 py-4">
                Voir des exemples
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="font-poppins font-black text-3xl mb-1 gradient-text">{s.value}</div>
                <div className="text-sm text-[#8892A4]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why e-commerce Algeria */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-badge mb-4">
                <TrendingUp size={14} />
                Le marché algérien
              </div>
              <h2 className="section-title">
                L'Algérie est prête pour{" "}
                <span className="gradient-text">votre e-commerce</span>
              </h2>
              <p className="text-[#8892A4] mb-8 leading-relaxed">
                Avec 27 millions d'internautes et une croissance e-commerce de 40% par an, 
                le moment de lancer votre boutique en ligne en Algérie n'a jamais été aussi idéal.
              </p>
              <ul className="space-y-4">
                {[
                  "75% des PME n'ont pas de présence e-commerce — opportunité immense",
                  "La diaspora algérienne achète en ligne depuis la France, Canada, UK",
                  "Paiement à la livraison largement accepté — frein à l'achat réduit",
                  "Instagram et Facebook Shopping populaires — intégration native",
                  "WhatsApp comme canal de vente numéro 1 en Algérie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#E2E8F0] text-sm">
                    <CheckCircle size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "💳", label: "Paiement CIB", desc: "Intégration officielle" },
                { icon: "📱", label: "Mobile-First", desc: "80% mobile" },
                { icon: "🚚", label: "Livraison DZ", desc: "Yalidin / Elogistik" },
                { icon: "🌍", label: "Diaspora", desc: "Vente internationale" },
                { icon: "💬", label: "WhatsApp Shop", desc: "Catalogue intégré" },
                { icon: "📊", label: "Analytics", desc: "Tableau de bord" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 text-center">
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <div className="font-semibold text-white text-sm">{item.label}</div>
                  <div className="text-xs text-[#8892A4]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Solutions par <span className="gradient-text">Secteur</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s) => (
              <div key={s.name} className="glass-card p-6" style={{ borderColor: `${s.color}25` }}>
                <span className="text-4xl block mb-3">{s.icon}</span>
                <h3 className="font-poppins font-bold text-white mb-3">{s.name}</h3>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#8892A4]">
                      <CheckCircle size={12} style={{ color: s.color, flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Fonctionnalités <span className="gradient-text">incluses</span>
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

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Nos <span className="gradient-text">Offres E-Commerce</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card pricing-card ${pkg.highlight ? "featured" : ""}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      ⭐ Plus populaire
                    </span>
                  </div>
                )}
                <h3 className="font-poppins font-bold text-white text-xl mb-1">{pkg.name}</h3>
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
                  href={`/devis?service=ecommerce&plan=${encodeURIComponent(pkg.name)}`}
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

      {/* CTA */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(124,58,237,0.2) 100%)",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            <span className="text-5xl block mb-4">🛒</span>
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
              Votre boutique en ligne en 3 semaines
            </h2>
            <p className="text-[#8892A4] text-lg mb-8 max-w-xl mx-auto">
              Analyse gratuite de votre projet e-commerce. Roadmap et devis détaillé sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=ecommerce" className="btn-primary text-base px-8 py-4">
                <ShoppingCart size={18} />
                Démarrer mon e-commerce
              </Link>
              <a
                href="https://wa.me/213XXXXXXXXX?text=Bonjour NEXARA, je veux créer ma boutique en ligne"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                💬 WhatsApp — Réponse rapide
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
