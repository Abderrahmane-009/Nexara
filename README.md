# NEXARA — Agence Digitale 360° & IA

> "Digitalisons l'Algérie, ensemble."

Site web premium complet pour NEXARA, agence digitale 360° basée à Alger, Algérie.

---

## 🚀 URL de Prévisualisation

**Site Live** : https://3000-igji2t4cvvj9y7p1e6t78-2e1b9533.sandbox.novita.ai

---

## ✅ Fonctionnalités Implémentées

### Pages Publiques
- **Accueil** — Hero section, statistiques, services, process, portfolio, pricing, témoignages, blog preview, CTA
- **Services Hub** — Présentation de tous les services avec tarifs
- **Tarifs** — Plans Starter / Business / Premium IA / Enterprise + Add-ons + FAQ
- **Portfolio** — Galerie de projets avec filtres par catégorie
- **Blog** — Articles avec catégories, temps de lecture, vues
- **À Propos** — Mission, vision, valeurs, équipe, contexte marché DZ
- **Contact** — Formulaire + coordonnées + WhatsApp CTA
- **Devis Multi-étapes** — Formulaire en 4 étapes (profil → projet → détails → confirmation)
- **Mentions Légales** — Conformité Loi n°18-07 Algérie
- **Politique de Confidentialité** — RGPD-like + Loi DZ

### Pages Services Individuelles
- `/services/chatbots-ia`
- `/services/sites-web`
- `/services/ecommerce`
- `/services/applications-web`
- `/services/branding`
- `/services/automatisation`

### Dashboard Admin (`/admin`)
- Tableau de bord avec KPIs (Leads, Devis, Projets, Articles)
- Vue des derniers leads et demandes de devis
- Sidebar navigation complète
- Pages : Leads / Devis / Portfolio / Blog / Témoignages / Paramètres

### API Backend
- `POST /api/contact` — Messages de contact → DB
- `POST /api/devis` — Demandes de devis → DB
- `POST /api/newsletter` — Inscriptions newsletter → DB

### Design System
- Dark premium tech (#0D0D1A, #141428)
- Accent violet (#7C3AED) + cyan (#06B6D4) + or (#F59E0B) + vert (#10B981)
- Typographies Poppins (titres) + Inter (corps)
- Composants : glass-card, btn-primary, btn-whatsapp, gradient-text, hexagon, grid-pattern
- WhatsApp bouton flottant sur toutes les pages

---

## 🛠 Stack Technique

| Technologie | Rôle |
|---|---|
| Next.js 15+ (App Router) | Framework full-stack |
| TypeScript | Typage strict |
| Tailwind CSS v4 | Styling utility-first |
| Prisma 5 + SQLite | ORM + Base de données |
| Lucide React | Icônes |
| PM2 | Gestion du processus en production |

---

## 📁 Structure du Projet

```
webapp/
├── src/
│   ├── app/
│   │   ├── (public)/           # Pages publiques
│   │   │   ├── services/       # Hub + pages individuelles
│   │   │   ├── portfolio/
│   │   │   ├── tarifs/
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── devis/          # Formulaire multi-étapes
│   │   │   ├── mentions-legales/
│   │   │   └── confidentialite/
│   │   ├── (admin)/            # Dashboard admin
│   │   │   └── admin/          # Layout + pages CRUD
│   │   ├── api/               # Routes API
│   │   │   ├── contact/
│   │   │   ├── devis/
│   │   │   └── newsletter/
│   │   ├── layout.tsx         # Layout racine + SEO metadata
│   │   ├── page.tsx           # Page d'accueil
│   │   └── globals.css        # Design system complet
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Toutes les sections homepage
│   │   └── ui/               # Composants UI réutilisables
│   ├── lib/
│   │   ├── prisma.ts          # Client Prisma singleton
│   │   └── utils.ts           # Utilitaires (cn, slugify, WhatsApp)
│   └── types/index.ts         # Types TypeScript globaux
├── prisma/
│   ├── schema.prisma          # Schéma base de données
│   └── dev.db                 # SQLite local (dev)
├── ecosystem.config.cjs       # Config PM2
├── .env                       # Variables d'environnement
└── package.json
```

---

## 💾 Schéma de Base de Données

| Table | Description |
|---|---|
| `User` | Administrateurs (NextAuth) |
| `Lead` | Prospects / formulaires de contact |
| `Devis` | Demandes de devis |
| `Project` | Portfolio projets |
| `Article` | Blog articles |
| `Testimonial` | Témoignages clients |
| `Newsletter` | Abonnés newsletter |
| `ContactMessage` | Messages de contact bruts |

---

## 🔧 Installation & Démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Copier les variables d'environnement
cp .env.local .env
# Éditez .env avec vos vraies valeurs

# 3. Créer la base de données
npx prisma db push

# 4. Build de production
npm run build

# 5. Démarrer avec PM2
pm2 start ecosystem.config.cjs

# Ou en développement
npm run dev
```

---

## 🌐 Variables d'Environnement

```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="votre-secret-très-long-et-sécurisé"
NEXTAUTH_URL="https://nexara.dz"
ADMIN_EMAIL="admin@nexara.dz"
ADMIN_PASSWORD="Votre@MotDePasse!"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=587
EMAIL_USER="contact@nexara.dz"
EMAIL_PASS="votre-app-password"
EMAIL_FROM="NEXARA <contact@nexara.dz>"
EMAIL_TO="admin@nexara.dz"
WHATSAPP_NUMBER="+213XXXXXXXXX"
```

---

## 🚀 Déploiement Vercel

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
vercel

# 3. Configurer les variables d'environnement dans Vercel Dashboard
# En production, utiliser Vercel Postgres ou Neon au lieu de SQLite

# 4. Pour PostgreSQL en production, modifier prisma/schema.prisma :
# provider = "postgresql"
# url = env("DATABASE_URL")
```

---

## 📋 Prochaines Étapes Recommandées

1. **Authentification Admin** : Activer NextAuth.js v5 pour l'accès sécurisé au dashboard
2. **Pages Services Individuelles** : Créer des pages détaillées pour chaque service
3. **Pages de Blog Dynamiques** : Route `/blog/[slug]` avec contenu réel
4. **Upload d'images** : Intégrer Cloudinary pour les images du portfolio
5. **Emails Automatiques** : Configurer Nodemailer/Resend pour les notifications
6. **SEO Avancé** : Sitemap XML, schema.org, Open Graph complet
7. **Analytics** : Intégrer Google Analytics / Plausible
8. **Base de données Production** : Migrer vers PostgreSQL (Neon/Supabase)
9. **Domaine** : Configurer le domaine nexara.dz
10. **Internationalisation** : Ajouter le support arabe (ar) et anglais (en)

---

## 📞 Contact NEXARA

- **Email** : contact@nexara.dz
- **WhatsApp** : +213 XX XX XX XX
- **Localisation** : Alger, Algérie

---

*NEXARA — Excellence digitale pour les entreprises algériennes.*
