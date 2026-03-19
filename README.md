# NEXARA — Agence Digitale 360° & IA | Algérie

> **Digitalisons l'Algérie, ensemble.**

Site web premium pour l'agence digitale NEXARA — première agence 360° & IA positionnée sur le marché algérien avec des standards internationaux.

---

## 🌐 URLs

| Environnement | URL |
|---|---|
| **Preview sandbox** | https://3000-igji2t4cvvj9y7p1e6t78-2e1b9533.sandbox.novita.ai |
| **GitHub** | https://github.com/Abderrahmane-009/Nexara |
| **Production** | À déployer sur Vercel + domaine custom |

---

## ✅ Pages Complétées (26 pages)

### Pages publiques
| Route | Description |
|---|---|
| `/` | Accueil (10 sections : Hero, Stats, Services, Why NEXARA, Process, Portfolio, Pricing, Testimonials, Blog, CTA) |
| `/services` | Hub services (6 services visuels) |
| `/services/chatbots-ia` | Chatbots IA — cas d'usage, packages, FAQ |
| `/services/sites-web` | Création sites web — types, features, témoignages |
| `/services/ecommerce` | E-Commerce — spécificités marché algérien |
| `/services/applications-web` | Applications web métier — tech stack, process |
| `/services/branding` | Branding & identité visuelle |
| `/services/automatisation` | Automatisation & workflows IA |
| `/portfolio` | Portfolio filtrable (6 projets) |
| `/tarifs` | Grille tarifaire (Starter/Business/Premium IA/Enterprise) |
| `/about` | À propos — mission, vision, valeurs, équipe |
| `/blog` | Blog listing (6 articles) |
| `/blog/[slug]` | Articles détaillés avec contenu complet |
| `/contact` | Contact + formulaire + WhatsApp |
| `/devis` | Formulaire devis multi-étapes (4 étapes) |
| `/mentions-legales` | Mentions légales (DZ) |
| `/confidentialite` | Politique de confidentialité (Loi 18-07 DZ) |

### Admin
| Route | Description |
|---|---|
| `/admin` | Dashboard KPI (leads, devis, projets, articles) |

### API Routes
| Route | Description |
|---|---|
| `POST /api/contact` | Formulaire de contact → DB |
| `POST /api/devis` | Demande de devis → DB |
| `POST /api/newsletter` | Inscription newsletter → DB |

---

## 🎨 Design System

**Palette :**
- Background : `#0D0D1A` (dark navy)
- Cards : `#141428`
- Violet accent : `#7C3AED`
- Cyan accent : `#06B6D4`
- Gold accent : `#F59E0B`
- Green : `#10B981`

**Typographies :**
- Titres : Poppins (700-900)
- Corps : Inter (400-600)

**Composants :** glass-card, gradient-text, btn-primary/secondary/gold/whatsapp, section-badge, hexagon, grid-pattern

---

## 🗄️ Architecture Base de Données (Prisma + SQLite dev / PostgreSQL prod)

**Modèles :**
- `Lead` — prospects entrants
- `Devis` — demandes de devis complètes
- `Project` — réalisations portfolio
- `Article` — articles de blog
- `Testimonial` — témoignages clients
- `Newsletter` — abonnés newsletter
- `User` — administrateurs
- `ContactMessage` — messages formulaire contact

---

## 🔧 Stack Technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript strict
- **Styling** : Tailwind CSS v4 + CSS custom
- **ORM** : Prisma v5.22 + SQLite (dev) / PostgreSQL (prod)
- **Auth** : NextAuth.js (admin)
- **Process** : PM2 (sandbox)
- **Icônes** : Lucide React
- **Déploiement** : Vercel-ready

---

## 🚀 Installation & Déploiement

### Développement local

```bash
# Cloner
git clone https://github.com/Abderrahmane-009/Nexara.git
cd Nexara

# Installer dépendances
npm install

# Configurer les env vars
cp .env.example .env.local
# Remplir les valeurs

# Base de données
npx prisma db push

# Lancer
npm run dev
```

### Variables d'environnement requises

```env
DATABASE_URL="postgresql://user:pass@host/nexara"  # Production
NEXTAUTH_SECRET="secret-fort-64-chars"
NEXTAUTH_URL="https://votre-domaine.com"
ADMIN_EMAIL="admin@nexara.dz"
ADMIN_PASSWORD="MotDePasseFort!"
WHATSAPP_NUMBER="+213XXXXXXXXX"
EMAIL_FROM="NEXARA <contact@nexara.dz>"
```

### Déploiement Vercel

```bash
# 1. Créer projet sur vercel.com depuis GitHub Abderrahmane-009/Nexara
# 2. Configurer les variables d'environnement dans Vercel Dashboard
# 3. Créer DB PostgreSQL sur neon.tech, mettre DATABASE_URL
# 4. Déployer
npx vercel --prod

# 5. Ajouter domaine custom dans Vercel Settings > Domains
```

### Configuration DNS Namecheap

Pour votre domaine custom :
```
A Record  @    76.76.21.21
CNAME     www  cname.vercel-dns.com
```

---

## 📋 Prochaines Étapes

- [ ] Déployer sur Vercel
- [ ] Créer DB PostgreSQL sur Neon
- [ ] Configurer SMTP (Gmail App Password ou Resend)
- [ ] Insérer vrai numéro WhatsApp dans env
- [ ] Activer NextAuth pour sécuriser `/admin`
- [ ] Obtenir domaine nexara.dz
- [ ] Configurer DNS Namecheap → Vercel
- [ ] Ajouter vraies photos portfolio
- [ ] Ajouter témoignages clients réels

---

## 💡 Conversion Logic

1. **Discovery** : SEO organique + Ads
2. **Lead Magnet** : Audit gratuit, CTA sur chaque page
3. **Qualification** : Formulaire devis 4 étapes
4. **Nurturing** : Email séquence automatique
5. **Closing** : WhatsApp + appel
6. **Fidélisation** : Support continu

---

**Dernière mise à jour** : Mars 2026 — v2.0  
**Statut** : ✅ Prêt pour déploiement production  
**Agence** : NEXARA, Alger, Algérie
