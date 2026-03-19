import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Eye, Calendar, Share2, Tag } from "lucide-react";

const articles: Record<string, {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  views: number;
  date: string;
  author: string;
  icon: string;
  color: string;
  content: string;
  tags: string[];
  related: string[];
}> = {
  "ia-generative-entreprises-algeriennes": {
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
    tags: ["IA", "Productivité", "PME", "Algérie", "ChatGPT"],
    related: ["chatbot-ia-service-client-algerie", "whatsapp-business-strategie-vente-algerie"],
    content: `
## L'IA en Algérie : Où en sommes-nous ?

L'intelligence artificielle générative a connu une explosion mondiale depuis fin 2022. Pourtant, en Algérie, la grande majorité des entreprises n'en tirent pas encore profit. C'est précisément là qu'est votre avantage concurrentiel.

Pendant que vos concurrents travaillent "à l'ancienne", vous pouvez multiplier votre productivité, réduire vos coûts et offrir une meilleure expérience client — dès aujourd'hui.

## Les 5 Applications Concrètes pour les PME Algériennes

### 1. Génération de contenu marketing
Créez en 10 minutes ce qui prenait 3 heures : posts Instagram, articles de blog, descriptions de produits, emails marketing. Des outils comme ChatGPT-4, Claude 3.5 ou Gemini le font remarquablement bien.

**Exemple pratique :** Une agence immobilière à Alger a utilisé l'IA pour rédiger les fiches de ses 200 biens immobiliers en 2 jours au lieu de 3 semaines.

### 2. Service client automatisé 24h/24
Un chatbot IA formé sur votre base de données peut répondre à 80% des questions de vos clients en temps réel. En français, en arabe, et même en darija.

### 3. Analyse et rapports automatiques
Connectez vos données de vente à une IA et recevez chaque matin un rapport analysé avec recommandations. Ce qui prenait 2h/semaine à votre commercial se fait en 5 minutes.

### 4. Traduction et localisation
L'IA traduit vos contenus en arabe classique ou en darija algérienne avec une précision bluffante. Idéal pour les entreprises qui veulent toucher un public plus large.

### 5. Génération d'images et de visuels
Midjourney, DALL-E, Stable Diffusion — créez des visuels pour vos réseaux sociaux, catalogues et supports marketing sans payer un photographe à chaque fois.

## Comment commencer sans budget énorme

Voici un plan d'action simple pour une PME algérienne :

1. **Semaine 1** : Testez ChatGPT gratuit pour vos emails et posts sociaux
2. **Semaine 2** : Formez votre équipe marketing (2-3h suffisent)
3. **Semaine 3** : Intégrez un chatbot simple sur votre site ou WhatsApp
4. **Mois 2** : Automatisez un premier processus répétitif
5. **Mois 3** : Mesurez le ROI et scalez

## Les erreurs à éviter

- **Ne pas vérifier les sorties de l'IA** : L'IA se trompe. Toujours relire.
- **Dépendre à 100% de l'IA** : Utilisez-la comme assistant, pas comme remplaçant.
- **Ignorer la confidentialité** : Ne partagez jamais de données clients sensibles avec des IA publiques.
- **Tout faire d'un coup** : Démarrez petit, itérez, puis scalez.

## Conclusion : La fenêtre d'opportunité est maintenant

En Algérie, moins de 5% des PME utilisent activement l'IA dans leurs opérations. Cela vous donne une opportunité unique de prendre de l'avance sur votre marché pendant que vos concurrents hésitent encore.

Chez NEXARA, nous accompagnons les entreprises algériennes dans cette transition — du chatbot WhatsApp à la plateforme IA sur mesure. Notre équipe est disponible pour un audit gratuit de votre potentiel d'automatisation IA.
    `,
  },
  "seo-local-algerie-guide-complet": {
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
    tags: ["SEO", "Google My Business", "Local", "Algérie", "Référencement"],
    related: ["identite-visuelle-marque-algerie", "ecommerce-algerie-opportunites-2026"],
    content: `
## Pourquoi le SEO Local est Critique en Algérie

Quand un client à Alger cherche "dentiste Bab El Oued" ou "restaurant pizza Oran", Google affiche les résultats locaux en priorité. Si votre entreprise n'y est pas, c'est votre concurrent qui récupère le client.

Le SEO local est l'un des investissements les plus rentables pour une PME algérienne. Voici comment le maîtriser.

## Étape 1 : Google My Business — Votre Vitrine Gratuite

Google My Business (maintenant Google Business Profile) est la base du SEO local. Si vous n'avez pas encore créé votre fiche, faites-le maintenant — c'est **gratuit**.

**Optimisation de votre fiche :**
- Nom exact de votre entreprise (sans mots-clés artificiels)
- Catégorie principale précise (ex: "Clinique dentaire" et non juste "Médecin")
- Adresse complète avec code postal
- Numéro de téléphone algérien (+213)
- Horaires d'ouverture exacts (incluant Ramadan)
- Description 750 caractères avec mots-clés naturels
- Photos : minimum 10, idéalement 25+

## Étape 2 : Les Mots-Clés Locaux Algériens

La spécificité algérienne : vos clients cherchent en français, en arabe et parfois en darija. Vous devez couvrir les trois.

**Exemples de clusters de mots-clés :**
- Français : "comptable Alger", "plombier Oran", "coiffeur Annaba"
- Arabe : "طبيب اسنان الجزائر", "محل ملابس وهران"
- Avec quartier : "livraison pizza Hydra", "salle de sport Bab Ezzouar"

**Outils gratuits pour la recherche :**
- Google Suggest (saisir et regarder les suggestions)
- Google Search Console (mots-clés qui vous envoient du trafic)
- Ubersuggest version gratuite

## Étape 3 : SEO On-Page pour le Local

Chaque page de votre site doit être optimisée pour sa géolocalisation :

- **Title Tag** : "Dentiste Alger | Cabinet Dr Benali — Bab El Oued"
- **Meta Description** : Incluez la ville et un argument de conversion
- **H1** : Mot-clé principal + localisation
- **Contenu** : Mentionnez quartiers, wilayas, points de repère locaux
- **Schema Markup LocalBusiness** : Balise JSON-LD pour Google

## Étape 4 : Citations et Annuaires Locaux

Référencez votre entreprise sur ces annuaires algériens :
- Annuaire.dz
- PagesJaunes Algérie
- Jumia Deals
- Yelo (Algérie)
- Pages Google Maps
- Foursquare

**Règle d'or** : NAP (Nom, Adresse, Téléphone) identique sur tous les annuaires.

## Étape 5 : Avis Clients Google — Le Booster N°1

Les avis Google impactent directement votre classement local. Une clinique avec 50 avis 4.8★ surclasse systématiquement une clinique sans avis.

**Comment obtenir des avis :**
- Envoyez un message WhatsApp avec le lien direct vers votre fiche
- Ajoutez le lien en bas de chaque email
- Formez votre personnel à demander des avis satisfaits
- Répondez à TOUS les avis, positifs et négatifs

## Résultats attendus

Avec une stratégie SEO local appliquée rigoureusement :
- **1 mois** : Fiche GMB optimisée, premiers avis collectés
- **3 mois** : Apparition dans le pack local pour mots-clés secondaires
- **6 mois** : Top 3 pour vos mots-clés principaux dans votre zone
- **12 mois** : Flux de leads organiques régulier et croissant

NEXARA propose une stratégie SEO local clé en main, avec rapport mensuel et suivi des positions. Contactez-nous pour un audit gratuit de votre présence actuelle.
    `,
  },
  "whatsapp-business-strategie-vente-algerie": {
    slug: "whatsapp-business-strategie-vente-algerie",
    title: "WhatsApp Business comme Outil de Vente : Stratégie Complète pour les PME",
    excerpt: "WhatsApp est le canal N°1 en Algérie. Apprenez à transformer votre profil Business en véritable machine commerciale.",
    category: "Marketing Digital",
    readTime: "6 min",
    views: 1560,
    date: "1 Mars 2026",
    author: "Équipe NEXARA",
    icon: "💬",
    color: "#25D366",
    tags: ["WhatsApp", "Marketing", "Vente", "PME", "Algérie"],
    related: ["ia-generative-entreprises-algeriennes", "chatbot-ia-service-client-algerie"],
    content: `
## WhatsApp en Algérie : Des Chiffres qui Parlent

En Algérie, WhatsApp n'est pas juste une application de messagerie — c'est **la** plateforme de communication professionnelle et personnelle. Avec plus de 20 millions d'utilisateurs actifs, c'est là où se trouvent vos clients.

Mais la plupart des entreprises utilisent WhatsApp de manière réactive et inefficace. Voici comment en faire un vrai canal commercial.

## Configurer WhatsApp Business Correctement

### Profil professionnel complet
- Photo de profil : logo haute qualité sur fond neutre
- Nom d'entreprise officiel
- Description : ce que vous faites + zone géographique + horaires
- Email professionnel et site web
- Catégorie d'entreprise précise

### Messages automatiques essentiels
- **Message d'accueil** : "Bonjour ! Merci de contacter [ENTREPRISE]. Comment puis-je vous aider ?" + menu rapide
- **Message d'absence** : "Nous sommes actuellement fermés. Nous vous répondrons avant 9h demain. Pour urgent : [numéro]"
- **Réponses rapides** : Préparez 10-15 réponses aux questions fréquentes

## Le Catalogue Produits : Votre Boutique Intégrée

WhatsApp Business permet de créer un catalogue directement dans l'application. Vos clients peuvent voir, enregistrer et partager vos produits sans quitter WhatsApp.

**Optimisation catalogue :**
- Photos fond blanc, cohérentes
- Prix clairs en DZD
- Descriptions incluant caractéristiques clés
- Lien "Acheter" vers votre site ou formulaire de commande

## Stratégies de Conversion sur WhatsApp

### Les Listes de Diffusion (pas les groupes !)
Les listes permettent d'envoyer le même message à plusieurs contacts, qui le reçoivent en message privé. Idéal pour les promotions, les nouveautés et les relances.

**Règle d'or** : Segmentez vos listes par profil client (anciens clients, prospects chauds, clients VIP).

### Le Script de Qualification
Quand un prospect vous contacte, utilisez ce script :
1. Accueil chaleureux + votre prénom
2. Découverte du besoin (2-3 questions ouvertes)
3. Présentation solution adaptée
4. Proposition de next step (devis, rendez-vous, démo)

### Relance Intelligente
Un prospect n'a pas répondu ? Relancez après 48h avec un angle différent :
- "Avez-vous pu réfléchir à notre proposition ?"
- Partagez un témoignage client pertinent
- Proposez une consultation gratuite de 15 minutes

## Automatisation WhatsApp avec l'IA

La prochaine étape : connecter WhatsApp Business à un chatbot IA qui qualifie les leads automatiquement, répond aux questions 24h/24 et planifie des rendez-vous.

Chez NEXARA, nous développons des solutions de chatbot WhatsApp sur mesure pour le marché algérien, en arabe, français et darija.
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article non trouvé" };

  return {
    title: `${article.title} | NEXARA Blog`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const relatedArticles = article.related
    .map((s) => articles[s])
    .filter(Boolean);

  return (
    <div className="bg-[#0D0D1A] min-h-screen pt-24 pb-20">
      <div className="container-nexara max-w-4xl">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#8892A4] hover:text-white transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} />
          Retour au blog
        </Link>

        {/* Header */}
        <article>
          <div className="mb-8">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: `${article.color}20`, color: article.color }}
            >
              {article.category}
            </div>
            <h1 className="font-poppins font-black text-3xl md:text-4xl text-white leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8892A4]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {article.readTime} de lecture
              </span>
              <span className="flex items-center gap-1.5">
                <Eye size={14} /> {article.views.toLocaleString("fr-FR")} vues
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className="h-64 md:h-80 rounded-2xl flex items-center justify-center mb-10 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${article.color}20, rgba(13,13,26,0.9))`,
              border: `1px solid ${article.color}30`,
            }}
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <span className="text-8xl md:text-9xl">{article.icon}</span>
          </div>

          {/* Content */}
          <div
            className="prose prose-invert max-w-none"
            style={{
              color: "#C4CDD8",
              lineHeight: "1.8",
            }}
          >
            {article.content.trim().split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-poppins font-bold text-2xl text-white mt-10 mb-4"
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="font-poppins font-semibold text-lg text-white mt-6 mb-3"
                    style={{ color: article.color }}
                  >
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ") || line.startsWith("* ")) {
                return (
                  <li key={i} className="ml-6 mb-1 text-[#C4CDD8]">
                    {line.replace(/^[*-] /, "")}
                  </li>
                );
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p key={i} className="font-bold text-white mb-3">
                    {line.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return (
                <p key={i} className="mb-4 text-[#C4CDD8]">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-[#2D2D4F]">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={14} className="text-[#8892A4]" />
              {article.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 flex gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + " — Via NEXARA")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-4 py-2"
            >
              <Share2 size={14} />
              Partager sur WhatsApp
            </a>
          </div>
        </article>

        {/* CTA */}
        <div
          className="mt-14 p-8 rounded-2xl text-center"
          style={{
            background: `linear-gradient(135deg, ${article.color}10, rgba(124,58,237,0.15))`,
            border: `1px solid ${article.color}25`,
          }}
        >
          <p className="text-[#8892A4] text-sm mb-2">Cet article vous a été utile ?</p>
          <h3 className="font-poppins font-bold text-white text-xl mb-4">
            Parlez de votre projet digital avec NEXARA
          </h3>
          <Link href="/devis" className="btn-primary">
            Obtenir mon devis gratuit
          </Link>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-14">
            <h2 className="font-poppins font-bold text-xl text-white mb-6">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="glass-card p-5 group block"
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-4xl">{rel.icon}</span>
                    <div>
                      <div
                        className="text-xs font-medium mb-1"
                        style={{ color: rel.color }}
                      >
                        {rel.category}
                      </div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-[#06B6D4] transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <div className="text-xs text-[#8892A4] mt-1 flex items-center gap-1">
                        <Clock size={11} /> {rel.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
