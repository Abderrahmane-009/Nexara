import Link from "next/link";
import { ArrowRight, Clock, Eye } from "lucide-react";

const articles = [
  {
    slug: "ia-generative-entreprises-algeriennes",
    title: "L'IA Générative : le levier que les entreprises algériennes ne peuvent plus ignorer",
    excerpt:
      "ChatGPT, Midjourney, Claude... Ces outils ne sont plus réservés aux startups tech. Voici comment les PME algériennes peuvent les intégrer dès aujourd'hui pour gagner en productivité.",
    category: "Intelligence Artificielle",
    readTime: "8 min",
    views: 1240,
    date: "15 Mars 2026",
    color: "#7C3AED",
    icon: "🤖",
  },
  {
    slug: "seo-local-algerie-google",
    title: "SEO Local en Algérie : comment apparaître en tête de Google pour vos clients cibles",
    excerpt:
      "Guide pratique pour optimiser votre référencement local et capter les clients qui vous cherchent en ce moment même sur Google Maps et Google Search.",
    category: "Marketing Digital",
    readTime: "6 min",
    views: 894,
    date: "8 Mars 2026",
    color: "#06B6D4",
    icon: "🎯",
  },
  {
    slug: "whatsapp-business-pme-algerie",
    title: "WhatsApp Business comme outil de vente : stratégie complète pour les PME",
    excerpt:
      "WhatsApp est le canal de communication numéro un en Algérie. Voici comment transformer vos conversations en clients et votre profil Business en vrai outil commercial.",
    category: "Stratégie Digitale",
    readTime: "5 min",
    views: 1560,
    date: "1 Mars 2026",
    color: "#10B981",
    icon: "💬",
  },
];

export function BlogPreviewSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-nexara relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-badge mb-6 w-fit">✦ Blog & Insights</div>
            <h2 className="section-title text-left">
              Expertise digitale
              <br />
              <span className="gradient-text">made for Algeria</span>
            </h2>
          </div>
          <Link href="/blog" className="btn-secondary shrink-0">
            Tous les articles
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Link
              key={i}
              href={`/blog/${article.slug}`}
              className="glass-card group overflow-hidden block"
            >
              {/* Article Visual */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${article.color}20, rgba(13, 13, 26, 0.8))`,
                  borderBottom: "1px solid rgba(124, 58, 237, 0.1)",
                }}
              >
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.icon}
                </div>
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${article.color}20`,
                    color: article.color,
                    border: `1px solid ${article.color}30`,
                  }}
                >
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-[#8892A4] mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {article.views.toLocaleString("fr-FR")} lectures
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-poppins font-bold text-base text-white mb-3 line-clamp-2 group-hover:text-[#06B6D4] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div
                  className="flex items-center gap-2 mt-4 text-sm font-medium transition-all duration-300"
                  style={{ color: article.color }}
                >
                  Lire l'article
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
