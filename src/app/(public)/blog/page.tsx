import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights Digitaux | NEXARA",
  description:
    "Conseils, stratégies et actualités digitales pour les entreprises algériennes. SEO, IA, e-commerce, WhatsApp Business et transformation digitale.",
};

const categories = ["Tous", "IA & Tech", "Marketing Digital", "SEO", "E-Commerce", "Stratégie"];

const articles = [
  {
    slug: "ia-generative-entreprises-algeriennes",
    title: "L'IA Générative : le levier que les entreprises algériennes ne peuvent plus ignorer",
    excerpt: "ChatGPT, Claude, Midjourney... Ces outils transforment la productivité des entreprises mondiales. Voici comment les PME algériennes peuvent en tirer profit dès aujourd'hui.",
    category: "IA & Tech",
    readTime: "8 min",
    views: 1240,
    date: "15 Mars 2026",
    author: "Équipe NEXARA",
    icon: "🤖",
    color: "#7C3AED",
    featured: true,
  },
  {
    slug: "seo-local-algerie-guide-complet",
    title: "SEO Local en Algérie 2026 : Guide Complet pour Apparaître sur Google",
    excerpt: "Référencement local, Google My Business, mots-clés en darija et français — tout ce qu'une entreprise algérienne doit savoir pour dominer son marché local.",
    category: "SEO",
    readTime: "12 min",
    views: 2100,
    date: "10 Mars 2026",
    author: "Équipe NEXARA",
    icon: "🎯",
    color: "#06B6D4",
    featured: false,
  },
  {
    slug: "whatsapp-business-strategie-vente-algerie",
    title: "WhatsApp Business comme Outil de Vente : Stratégie Complète pour les PME",
    excerpt: "WhatsApp est le canal N°1 en Algérie. Apprenez à transformer votre profil Business en véritable machine commerciale avec des stratégies éprouvées.",
    category: "Marketing Digital",
    readTime: "6 min",
    views: 1560,
    date: "1 Mars 2026",
    author: "Équipe NEXARA",
    icon: "💬",
    color: "#25D366",
    featured: false,
  },
  {
    slug: "ecommerce-algerie-opportunites-2026",
    title: "E-Commerce en Algérie 2026 : Opportunités, Défis et Comment Réussir",
    excerpt: "Le marché du e-commerce algérien croît à +35% par an. Voici les secteurs porteurs, les outils à utiliser et les erreurs à éviter pour une boutique qui performe.",
    category: "E-Commerce",
    readTime: "10 min",
    views: 980,
    date: "22 Fév 2026",
    author: "Équipe NEXARA",
    icon: "🛒",
    color: "#10B981",
    featured: false,
  },
  {
    slug: "chatbot-ia-service-client-algerie",
    title: "Chatbot IA pour le Service Client Algérien : Retours d'Expérience Réels",
    excerpt: "Nos clients ont intégré des chatbots IA — voici ce qui a fonctionné, ce qui a échoué et comment maximiser le ROI de cette technologie pour le marché local.",
    category: "IA & Tech",
    readTime: "7 min",
    views: 756,
    date: "14 Fév 2026",
    author: "Équipe NEXARA",
    icon: "🤖",
    color: "#7C3AED",
    featured: false,
  },
  {
    slug: "identite-visuelle-marque-algerie",
    title: "Identité Visuelle Premium pour les Marques Algériennes : Ce qui Différencie",
    excerpt: "Pourquoi certaines marques algériennes inspirent confiance au premier regard ? Les 7 éléments d'une identité visuelle qui positionne une marque comme référence.",
    category: "Stratégie",
    readTime: "5 min",
    views: 645,
    date: "5 Fév 2026",
    author: "Équipe NEXARA",
    icon: "✨",
    color: "#F59E0B",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Blog & Insights</div>
          <h1 className="section-title">
            Expertise digitale
            <br />
            <span className="gradient-text">made for Algeria</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Stratégies, conseils et analyses pensés pour les entreprises
            algériennes qui veulent performer dans le digital.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={
                cat === "Tous"
                  ? { background: "linear-gradient(135deg, #7C3AED, #06B6D4)", color: "white" }
                  : {
                      background: "rgba(124, 58, 237, 0.08)",
                      color: "#8892A4",
                      border: "1px solid rgba(124, 58, 237, 0.15)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="block glass-card group overflow-hidden mb-10"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="h-64 md:h-auto flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${featuredArticle.color}20, rgba(13, 13, 26, 0.8))`,
                  minHeight: "250px",
                }}
              >
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="text-8xl group-hover:scale-110 transition-transform duration-500">
                  {featuredArticle.icon}
                </div>
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${featuredArticle.color}20`,
                    color: featuredArticle.color,
                    border: `1px solid ${featuredArticle.color}30`,
                  }}
                >
                  ⭐ Article à la une
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit"
                  style={{
                    background: `${featuredArticle.color}15`,
                    color: featuredArticle.color,
                  }}
                >
                  {featuredArticle.category}
                </div>
                <h2 className="font-poppins font-bold text-xl md:text-2xl text-white mb-4 group-hover:text-[#06B6D4] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#8892A4] text-sm leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#8892A4]">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {featuredArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={12} /> {featuredArticle.views.toLocaleString("fr-FR")}
                  </span>
                  <span>{featuredArticle.date}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article, i) => (
            <Link
              key={i}
              href={`/blog/${article.slug}`}
              className="glass-card group overflow-hidden block"
            >
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${article.color}15, rgba(13, 13, 26, 0.9))`,
                  borderBottom: "1px solid rgba(124, 58, 237, 0.1)",
                }}
              >
                <div className="absolute inset-0 grid-pattern opacity-15" />
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.icon}
                </div>
                <div
                  className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${article.color}15`,
                    color: article.color,
                  }}
                >
                  {article.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-[#8892A4] mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={11} /> {article.views.toLocaleString("fr-FR")}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-sm text-white mb-2 line-clamp-2 group-hover:text-[#06B6D4] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#8892A4] text-xs leading-relaxed line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div
                  className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: article.color }}
                >
                  Lire <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
