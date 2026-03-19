import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  RefreshCw,
  Mail,
  Clock,
  TrendingUp,
  Settings,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation & IA des Processus — NEXARA | Algérie",
  description:
    "Automatisez vos tâches répétitives avec l'IA. Emails automatiques, CRM, facturation, relances, rapports. Gagnez 10h/semaine par employé.",
  keywords: [
    "automatisation processus algérie",
    "rpa algérie",
    "no-code algérie",
    "automation workflow algérie",
    "zapier algérie",
  ],
};

const automations = [
  {
    icon: "📧",
    title: "Emails & Notifications Automatiques",
    description: "Confirmations de commande, rappels de rendez-vous, newsletters, relances clients — tout s'envoie automatiquement.",
    tools: ["Nodemailer", "Resend", "Mailchimp", "WhatsApp API"],
    impact: "-8h/semaine",
    color: "#7C3AED",
  },
  {
    icon: "📊",
    title: "Rapports & Tableaux de Bord",
    description: "Rapports quotidiens/hebdomadaires générés et envoyés automatiquement à votre direction.",
    tools: ["Google Sheets API", "Notion", "Slack", "Email HTML"],
    impact: "-5h/semaine",
    color: "#06B6D4",
  },
  {
    icon: "🔄",
    title: "Synchronisation de Données",
    description: "Synchronisation automatique entre vos outils : CRM, comptabilité, site web, réseaux sociaux.",
    tools: ["Zapier", "Make.com", "n8n", "API sur mesure"],
    impact: "-6h/semaine",
    color: "#F59E0B",
  },
  {
    icon: "💬",
    title: "Réponses Automatiques WhatsApp",
    description: "Chatbot WhatsApp Business qui répond aux questions, collecte des leads et qualifie les prospects 24h/24.",
    tools: ["WhatsApp Cloud API", "OpenAI", "Meta Business"],
    impact: "-10h/semaine",
    color: "#10B981",
  },
  {
    icon: "🧾",
    title: "Facturation & Comptabilité",
    description: "Génération automatique de devis, factures, relances et exports comptables.",
    tools: ["PDF générés", "Email automatique", "Export Excel", "CNAS / DGI"],
    impact: "-4h/semaine",
    color: "#7C3AED",
  },
  {
    icon: "📱",
    title: "Réseaux Sociaux Automatisés",
    description: "Publication planifiée, réponses auto, suivi des mentions et rapports engagement.",
    tools: ["Buffer", "Hootsuite API", "Meta Graph API", "Canva API"],
    impact: "-6h/semaine",
    color: "#06B6D4",
  },
];

const useCases = [
  {
    business: "Cabinet Médical",
    icon: "🏥",
    before: "Secrétaire appelle manuellement tous les patients pour rappeler les RDV",
    after: "SMS + WhatsApp automatique 24h avant chaque rendez-vous",
    gain: "3h/jour économisées, 0 RDV oublié",
    color: "#7C3AED",
  },
  {
    business: "E-Commerce",
    icon: "🛒",
    before: "Répondre manuellement à chaque commande, envoyer les confirmations",
    after: "Email + WhatsApp de confirmation automatique + suivi livraison",
    gain: "80% moins de tickets support",
    color: "#06B6D4",
  },
  {
    business: "Agence Immobilière",
    icon: "🏢",
    before: "Gérant crée manuellement des rapports hebdomadaires sur Excel",
    after: "Rapport automatique envoyé chaque lundi matin avec données du CRM",
    gain: "4h/semaine récupérées pour les visites",
    color: "#F59E0B",
  },
  {
    business: "Centre de Formation",
    icon: "🎓",
    before: "Envoi manuel des convocations, supports de cours et certificats",
    after: "Pipeline automatique : inscription → convocation → cours → certificat PDF",
    gain: "+200 apprenants gérés sans embauche supplémentaire",
    color: "#10B981",
  },
];

const steps = [
  {
    step: "01",
    title: "Audit de vos processus",
    desc: "Nous cartographions vos tâches manuelles répétitives et identifions le potentiel d'automatisation.",
  },
  {
    step: "02",
    title: "Priorisation ROI",
    desc: "Nous priorisons les automatisations par impact business : temps gagné × fréquence × valeur.",
  },
  {
    step: "03",
    title: "Développement & Intégration",
    desc: "Développement des workflows automatisés avec tests approfondis avant déploiement.",
  },
  {
    step: "04",
    title: "Formation & Maintenance",
    desc: "Formation de votre équipe, documentation et monitoring continu des automatisations.",
  },
];

const tools = [
  { name: "n8n", desc: "Workflow automation open-source", color: "#FF6B35" },
  { name: "Make.com", desc: "Automatisation visuelle", color: "#6A1BFF" },
  { name: "Zapier", desc: "Connecteur d'applications", color: "#FF4A00" },
  { name: "OpenAI API", desc: "IA conversationnelle", color: "#10A37F" },
  { name: "WhatsApp Cloud API", desc: "Messaging automatisé", color: "#25D366" },
  { name: "Google Workspace", desc: "Suite bureautique", color: "#4285F4" },
  { name: "Notion API", desc: "Base de données et docs", color: "#E2E8F0" },
  { name: "Airtable", desc: "Base de données no-code", color: "#F97316" },
];

export default function AutomatisationPage() {
  return (
    <div className="bg-[#0D0D1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
        <div className="container-nexara relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-badge mb-6">
              <RefreshCw size={14} />
              Automatisation IA
            </div>
            <h1 className="font-poppins font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              Travaillez <span className="gradient-text">Moins</span>,
              <br />
              Produisez <span className="gradient-text">Plus</span>
            </h1>
            <p className="text-xl text-[#8892A4] mb-10 max-w-2xl mx-auto leading-relaxed">
              Vos équipes passent trop de temps sur des tâches manuelles et répétitives. 
              Nous automatisons tout cela avec l'IA — et vous récupérez des heures précieuses 
              chaque semaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=automatisation" className="btn-primary text-base px-8 py-4">
                <Zap size={18} />
                Automatiser mon entreprise
              </Link>
              <Link href="#use-cases" className="btn-secondary text-base px-8 py-4">
                Voir les cas réels
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10h+", label: "Gagnées par semaine/employé" },
              { value: "80%", label: "Tâches répétitives automatisables" },
              { value: "–40%", label: "Coûts opérationnels réduits" },
              { value: "0", label: "Erreurs humaines sur les automatisations" },
            ].map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="font-poppins font-black text-3xl mb-1 gradient-text">{s.value}</div>
                <div className="text-sm text-[#8892A4]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <div className="section-badge">
              <Workflow size={14} />
              Ce qu'on automatise
            </div>
            <h2 className="section-title">
              Automatisations{" "}
              <span className="gradient-text">Populaires</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((a) => (
              <div
                key={a.title}
                className="glass-card p-6"
                style={{ borderColor: `${a.color}25` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{a.icon}</span>
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ background: `${a.color}20`, color: a.color }}
                  >
                    {a.impact}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">{a.title}</h3>
                <p className="text-[#8892A4] text-sm mb-4">{a.description}</p>
                <div className="flex flex-wrap gap-2">
                  {a.tools.map((t) => (
                    <span key={t} className="text-xs tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="section-padding">
        <div className="container-nexara">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Cas Réels <span className="gradient-text">d'Automatisation</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.business}
                className="glass-card p-8"
                style={{ borderColor: `${uc.color}25` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{uc.icon}</span>
                  <h3 className="font-poppins font-bold text-white text-xl">{uc.business}</h3>
                </div>

                <div className="space-y-4 mb-5">
                  <div className="p-4 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
                    <p className="text-xs font-semibold text-red-400 mb-1">❌ AVANT</p>
                    <p className="text-sm text-[#E2E8F0]">{uc.before}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight size={20} className="text-[#7C3AED] rotate-90" />
                  </div>
                  <div className="p-4 rounded-lg" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <p className="text-xs font-semibold text-green-400 mb-1">✅ APRÈS NEXARA</p>
                    <p className="text-sm text-[#E2E8F0]">{uc.after}</p>
                  </div>
                </div>

                <div
                  className="px-4 py-2 rounded-lg text-sm font-bold"
                  style={{ background: `${uc.color}15`, color: uc.color }}
                >
                  📈 Résultat : {uc.gain}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-[#141428]/50">
        <div className="container-nexara">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Nos <span className="gradient-text">Outils d'Automatisation</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((t) => (
              <div key={t.name} className="glass-card p-4 text-center">
                <div className="font-poppins font-bold text-white mb-1">{t.name}</div>
                <div className="text-xs text-[#8892A4]">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-nexara max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Notre <span className="gradient-text">Approche</span>
            </h2>
          </div>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-6 flex gap-6 items-start">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-poppins font-black text-lg text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-white text-lg mb-1">{s.title}</h3>
                  <p className="text-[#8892A4]">{s.desc}</p>
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
              background: "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(124,58,237,0.2) 100%)",
              border: "1px solid rgba(6,182,212,0.3)",
            }}
          >
            <span className="text-5xl block mb-4">🤖</span>
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4">
              Audit d'automatisation gratuit
            </h2>
            <p className="text-[#8892A4] text-lg mb-8 max-w-xl mx-auto">
              En 30 minutes, nous identifions vos tâches automatisables et vous chiffrons le gain potentiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis?service=automatisation" className="btn-primary text-base px-8 py-4">
                <Settings size={18} />
                Demander mon audit gratuit
              </Link>
              <a
                href="https://wa.me/213XXXXXXXXX?text=Bonjour NEXARA, je veux automatiser mes processus"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                💬 Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
