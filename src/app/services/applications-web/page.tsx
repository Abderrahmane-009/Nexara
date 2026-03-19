import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Zap,
  CheckCircle,
  ArrowRight,
  Database,
  Lock,
  Cloud,
  Users,
  ChevronRight,
  Settings,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Applications Web Sur Mesure — NEXARA | Algérie",
  description:
    "Développement d'applications web métier sur mesure pour entreprises algériennes. CRM, ERP, portails RH, plateformes SaaS. Stack moderne, architecture scalable.",
  keywords: [
    "développement application web algérie",
    "application métier algérie",
    "CRM sur mesure algérie",
    "logiciel gestion algérie",
    "plateforme web algérie",
  ],
};

const appTypes = [
  {
    icon: "📊",
    title: "CRM / Gestion Clients",
    description: "Centralisez vos prospects, clients, relances et historique commercial.",
    features: ["Pipeline de ventes visuel", "Automatisation emails/SMS", "Rapports performance équipe", "Intégration WhatsApp"],
    color: "#7C3AED",
  },
  {
    icon: "👥",
    title: "Portail RH & Paie",
    description: "Gérez congés, présences, documents RH et fiches de paie en ligne.",
    features: ["Planning et congés", "Documents DRH numérisés", "Suivi des performances", "Calcul paie algérien"],
    color: "#06B6D4",
  },
  {
    icon: "🏭",
    title: "ERP / Gestion Stock",
    description: "Pilotez vos achats, stocks, fournisseurs et facturation depuis une seule interface.",
    features: ["Gestion multi-entrepôts", "Commandes fournisseurs", "Facturation DZD / devise", "Inventaire en temps réel"],
    color: "#F59E0B",
  },
  {
    icon: "🎓",
    title: "Plateforme E-Learning",
    description: "LMS sur mesure pour centres de formation algériens.",
    features: ["Cours vidéo hébergés", "Quiz et évaluations", "Certificats automatiques", "Progression apprenants"],
    color: "#10B981",
  },
  {
    icon: "🏥",
    title: "Gestion Clinique / Cabinet",
    description: "Dossiers patients, rendez-vous, ordonnances et facturation médicale.",
    features: ["Dossiers patients sécurisés", "Agenda médecins", "Ordonnances numériques", "Facturation CNAS"],
    color: "#7C3AED",
  },
  {
    icon: "🏢",
    title: "Portail Immobilier",
    description: "Gestion des biens, contrats, locataires et recouvrement.",
    features: ["Catalogue biens filtrables", "Suivi loyers et contrats", "État des lieux digital", "Relances automatiques"],
    color: "#06B6D4",
  },
];

const techStack = [
  { name: "Next.js 15", category: "Frontend", color: "#E2E8F0" },
  { name: "TypeScript", category: "Langage", color: "#3178C6" },
  { name: "React 19", category: "UI Library", color: "#61DAFB" },
  { name: "Tailwind CSS", category: "Styling", color: "#06B6D4" },
  { name: "Node.js / Hono", category: "Backend", color: "#10B981" },
  { name: "PostgreSQL", category: "Base de données", color: "#336791" },
  { name: "Prisma ORM", category: "ORM", color: "#5A67D8" },
  { name: "NextAuth.js", category: "Auth", color: "#F59E0B" },
  { name: "Redis", category: "Cache", color: "#D62222" },
  { name: "Vercel / VPS", category: "Hébergement", color: "#7C3AED" },
  { name: "AWS S3 / R2", category: "Stockage", color: "#FF9900" },
  { name: "Stripe / CIB", category: "Paiement", color: "#635BFF" },
];

const features = [
  {
    icon: Lock,
    title: "Authentification Sécurisée",
    description: "Rôles et permissions granulaires. Authentification 2FA. Sessions sécurisées.",
    color: "#7C3AED",
  },
  {
    icon: Database,
    title: "Architecture Scalable",
    description: "Base de données optimisée pour des milliers d'utilisateurs simultanés.",
    color: "#06B6D4",
  },
  {
    icon: Cloud,
    title: "Hébergement Cloud",
    description: "Déployé sur Vercel ou VPS dédié. Uptime 99.9%. Backups quotidiens.",
    color: "#F59E0B",
  },
  {
    icon: Settings,
    title: "API REST / GraphQL",
    description: "Architecture API-first. Intégration avec vos outils existants.",
    color: "#10B981",
  },
  {
    icon: BarChart,
    title: "Tableaux de Bord",
    description: "Visualisations de données en temps réel. Export Excel/PDF.",
    color: "#7C3AED",
  },
  {
    icon: Users,
    title: "Multi-utilisateurs & Rôles",
    description: "Gestion fine des accès : admin, manager, employé, client.",
    color: "#06B6D4",
  },
];

const process = [
  {
    step: "01",
    title: "Analyse des besoins",
    desc: "Audit de vos processus métier actuels, identification des points de friction et définition du cahier des charges.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "Schéma de base de données, architecture applicative, maquettes UX/UI validées avec votre équipe.",
    icon: "📐",
  },
  {
    step: "03",
    title: "Développement Agile",
    desc: "Sprints de 2 semaines avec démonstrations régulières. Vous voyez l'avancement en temps réel.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Tests & Formation",
    desc: "Tests complets, formation de vos équipes, documentation technique, mise en production.",
    icon: "🚀",
  },
  {
    step: "05",
    title: "Maintenance & Évolution",
    desc: "Support continu, nouvelles fonctionnalités, mises à jour sécurité, monitoring 24/7.",
    icon: "🛡️",
  },
];

const guarantees = [
  { label: "Code source livré", icon: "📁" },
  { label: "Documentation complète", icon: "📄" },
  { label: "Formation équipe incluse", icon: "🎓" },
  { label: "Garantie 3 mois", icon: "🛡️" },
  { label: "Migrations données", icon: "🔄" },
  { label: "SLA défini", icon: "📋" },
];

export default function ApplicationsWebPage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #F59E0B, transparent)" }}
        />
        <div className="container-nexara relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-badge mb-6">
              <Code2 size={14} />
              Développement Sur Mesure
            </div>
            <h1 className="font-poppins font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              Applications Web{" "}
              <span className="gradient-text">Sur Mesure</span>
              <br />
              pour Votre Métier
            </h1>
            <p className="text-xl text-[#8892A4] mb-10 max-w-2xl mx-auto leading-relaxed">
              Transformez vos processus manuels en solutions digitales efficaces. 
              CRM, ERP, portails métier — développés avec les meilleures technologies 
              et parfaitement adaptés à votre réalité algérienne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=application-web" className="btn-primary text-base px-8 py-4">
                <Zap size={18} />
                Discuter de mon projet
              </Link>
              <Link href="#app-types" className="btn-secondary text-base px-8 py-4">
                Exemples d'applications
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section id="app-types" className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Exemples d'applications{" "}
              <span className="gradient-text">que nous développons</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app) => (
              <div
                key={app.title}
                className="glass-card p-6"
                style={{ borderColor: `${app.color}25` }}
              >
                <span className="text-4xl block mb-3">{app.icon}</span>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">{app.title}</h3>
                <p className="text-[#8892A4] text-sm mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                      <CheckCircle size={12} style={{ color: app.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <div className="section-badge">
              <Code2 size={14} />
              Stack Technique
            </div>
            <h2 className="section-title">
              Technologies de{" "}
              <span className="gradient-text">Pointe</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Nous utilisons les mêmes technologies que Google, Meta et les startups de la Silicon Valley.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="glass-card px-4 py-3 flex items-center gap-2"
              >
                <span className="font-semibold text-white text-sm">{tech.name}</span>
                <span className="text-xs text-[#8892A4]">• {tech.category}</span>
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
              Standards <span className="gradient-text">Enterprise</span>
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
      <section className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Notre <span className="gradient-text">Processus</span> de Développement
            </h2>
          </div>
          <div className="space-y-6">
            {process.map((step, i) => (
              <div key={step.step} className="glass-card p-6 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-poppins font-black text-xl text-white"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
                  >
                    {step.step}
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-[#8892A4] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Nos <span className="gradient-text">Garanties</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {guarantees.map((g) => (
              <div key={g.label} className="glass-card p-4 text-center">
                <span className="text-3xl block mb-2">{g.icon}</span>
                <div className="text-sm font-medium text-[#E2E8F0]">{g.label}</div>
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
              background: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(124,58,237,0.2) 100%)",
              border: "1px solid rgba(245,158,11,0.3)",
            }}
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10">
              <span className="text-5xl block mb-4">⚙️</span>
              <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
                Transformez votre métier avec le digital
              </h2>
              <p className="text-[#8892A4] text-lg mb-8 max-w-xl mx-auto">
                Partagez votre problématique. Nous vous proposons une solution sur mesure avec ROI mesurable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis?service=application-web" className="btn-primary text-base px-8 py-4">
                  <Code2 size={18} />
                  Décrire mon projet
                </Link>
                <a
                  href="https://wa.me/213XXXXXXXXX?text=Bonjour NEXARA, j'ai un projet d'application web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4"
                >
                  💬 Consultation gratuite WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
