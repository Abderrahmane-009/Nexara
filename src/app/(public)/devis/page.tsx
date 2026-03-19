"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const services = [
  { value: "site-vitrine", label: "Site Vitrine Premium" },
  { value: "ecommerce", label: "Boutique E-Commerce" },
  { value: "application-web", label: "Application Web Métier" },
  { value: "chatbot-ia", label: "Chatbot IA" },
  { value: "branding", label: "Branding & Identité Visuelle" },
  { value: "automatisation", label: "Automatisation & Workflows" },
  { value: "seo", label: "SEO & Marketing Digital" },
  { value: "multi", label: "Plusieurs Services Combinés" },
];

const budgets = [
  { value: "moins-35k", label: "Moins de 35 000 DZD" },
  { value: "35k-75k", label: "35 000 – 75 000 DZD" },
  { value: "75k-150k", label: "75 000 – 150 000 DZD" },
  { value: "plus-150k", label: "Plus de 150 000 DZD" },
  { value: "a-definir", label: "À définir ensemble" },
];

const timelines = [
  { value: "urgent", label: "Urgent (< 2 semaines)" },
  { value: "1-mois", label: "Dans 1 mois" },
  { value: "2-3-mois", label: "Dans 2 à 3 mois" },
  { value: "flexible", label: "Flexible / pas de contrainte" },
];

const sectors = [
  "Santé / Médical",
  "Immobilier",
  "Restauration / Hôtellerie",
  "Commerce & Retail",
  "Formation & Éducation",
  "Services B2B",
  "Industrie & BTP",
  "Mode & Beauté",
  "Tech & Startups",
  "Autre",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

function DevisForm() {
  const searchParams = useSearchParams();
  const planFromUrl = searchParams.get("plan") || "";

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    sector: "",
    service: planFromUrl === "starter" ? "site-vitrine" : planFromUrl === "premium-ia" ? "ecommerce" : "",
    budget: planFromUrl === "starter" ? "35k-75k" : planFromUrl === "business" ? "35k-75k" : planFromUrl === "premium-ia" ? "75k-150k" : "",
    timeline: "",
    description: "",
  });

  const updateForm = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.error || "Une erreur s'est produite.");
      }
    } catch {
      setError("Impossible d'envoyer la demande. Contactez-nous sur WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { n: 1, label: "Votre profil" },
    { n: 2, label: "Votre projet" },
    { n: 3, label: "Détails" },
    { n: 4, label: "Confirmation" },
  ];

  if (success) {
    return (
      <div
        className="max-w-2xl mx-auto text-center p-10 rounded-3xl"
        style={{
          background: "rgba(20, 20, 40, 0.8)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-[#10B981]" />
        </div>
        <h2 className="font-poppins font-bold text-2xl text-white mb-4">
          Demande envoyée avec succès !
        </h2>
        <p className="text-[#8892A4] mb-8 leading-relaxed">
          Merci {formData.name.split(" ")[0]} ! Votre demande de devis a bien
          été reçue. Notre équipe l'analyse et vous contactera sous{" "}
          <strong className="text-white">24 heures ouvrées</strong> avec une
          proposition personnalisée.
        </p>
        <div className="space-y-3">
          <p className="text-[#8892A4] text-sm">
            Pour aller plus vite, discutons maintenant sur WhatsApp :
          </p>
          <a
            href={getWhatsAppLink(
              `Bonjour, je viens d'envoyer une demande de devis pour ${formData.service}. Je suis disponible pour en discuter.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full block text-center"
          >
            Continuer sur WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-10">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                style={
                  step > s.n
                    ? {
                        background: "#10B981",
                        color: "white",
                      }
                    : step === s.n
                    ? {
                        background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                        color: "white",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "#8892A4",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }
                }
              >
                {step > s.n ? <Check size={16} /> : s.n}
              </div>
              <span
                className="text-xs mt-1 hidden sm:block"
                style={{
                  color: step >= s.n ? "#E2E8F0" : "#8892A4",
                }}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="flex-1 h-0.5 mx-3 transition-all duration-300"
                style={{
                  background:
                    step > s.n
                      ? "linear-gradient(90deg, #10B981, #7C3AED)"
                      : "rgba(255,255,255,0.1)",
                  width: "40px",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div
        className="p-8 rounded-3xl"
        style={{
          background: "rgba(20, 20, 40, 0.8)",
          border: "1px solid rgba(124, 58, 237, 0.2)",
        }}
      >
        {/* Step 1 - Profile */}
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="font-poppins font-bold text-xl text-white mb-6">
              Parlez-nous de vous
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#8892A4] mb-1.5">Prénom & Nom *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  placeholder="Karim Meziani"
                  className="input-dark w-full"
                />
              </div>
              <div>
                <label className="block text-xs text-[#8892A4] mb-1.5">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                  placeholder="+213 XX XX XX XX"
                  className="input-dark w-full"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-[#8892A4] mb-1.5">Email professionnel *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateForm("email", e.target.value)}
                placeholder="karim@entreprise.dz"
                className="input-dark w-full"
              />
            </div>
            <div>
              <label className="block text-xs text-[#8892A4] mb-1.5">Entreprise / Organisation</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateForm("company", e.target.value)}
                placeholder="Nom de votre entreprise"
                className="input-dark w-full"
              />
            </div>
            <div>
              <label className="block text-xs text-[#8892A4] mb-1.5">Secteur d'activité *</label>
              <select
                value={formData.sector}
                onChange={(e) => updateForm("sector", e.target.value)}
                className="input-dark w-full"
                style={{ appearance: "none" }}
              >
                <option value="">Sélectionnez votre secteur</option>
                {sectors.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 2 - Project */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="font-poppins font-bold text-xl text-white mb-6">
              Votre projet digital
            </h2>
            <div>
              <label className="block text-xs text-[#8892A4] mb-3">
                Service souhaité *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => updateForm("service", s.value)}
                    className="p-3 rounded-xl text-sm text-left transition-all duration-200"
                    style={{
                      background:
                        formData.service === s.value
                          ? "rgba(124, 58, 237, 0.2)"
                          : "rgba(255,255,255,0.03)",
                      border:
                        formData.service === s.value
                          ? "1px solid rgba(124, 58, 237, 0.5)"
                          : "1px solid rgba(255,255,255,0.07)",
                      color:
                        formData.service === s.value ? "#E2E8F0" : "#8892A4",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-[#8892A4] mb-3">
                Budget estimé *
              </label>
              <div className="grid grid-cols-1 gap-2">
                {budgets.map((b) => (
                  <button
                    key={b.value}
                    type="button"
                    onClick={() => updateForm("budget", b.value)}
                    className="p-3 rounded-xl text-sm text-left transition-all duration-200"
                    style={{
                      background:
                        formData.budget === b.value
                          ? "rgba(6, 182, 212, 0.15)"
                          : "rgba(255,255,255,0.03)",
                      border:
                        formData.budget === b.value
                          ? "1px solid rgba(6, 182, 212, 0.4)"
                          : "1px solid rgba(255,255,255,0.07)",
                      color: formData.budget === b.value ? "#06B6D4" : "#8892A4",
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3 - Details */}
        {step === 3 && (
          <div className="space-y-5">
            <h2 className="font-poppins font-bold text-xl text-white mb-6">
              Détails de votre projet
            </h2>
            <div>
              <label className="block text-xs text-[#8892A4] mb-3">
                Délai souhaité *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timelines.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => updateForm("timeline", t.value)}
                    className="p-3 rounded-xl text-sm text-center transition-all duration-200"
                    style={{
                      background:
                        formData.timeline === t.value
                          ? "rgba(245, 158, 11, 0.15)"
                          : "rgba(255,255,255,0.03)",
                      border:
                        formData.timeline === t.value
                          ? "1px solid rgba(245, 158, 11, 0.4)"
                          : "1px solid rgba(255,255,255,0.07)",
                      color:
                        formData.timeline === t.value ? "#F59E0B" : "#8892A4",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-[#8892A4] mb-1.5">
                Décrivez votre projet *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => updateForm("description", e.target.value)}
                rows={5}
                placeholder="Décrivez votre activité, vos objectifs, vos besoins spécifiques... Plus vous êtes précis(e), plus notre devis sera adapté."
                className="input-dark w-full resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 4 - Recap */}
        {step === 4 && (
          <div>
            <h2 className="font-poppins font-bold text-xl text-white mb-6">
              Récapitulatif de votre demande
            </h2>
            <div className="space-y-3 mb-6">
              {[
                { label: "Nom", value: formData.name },
                { label: "Email", value: formData.email },
                { label: "Téléphone", value: formData.phone },
                { label: "Entreprise", value: formData.company || "—" },
                { label: "Secteur", value: formData.sector },
                { label: "Service", value: services.find((s) => s.value === formData.service)?.label || formData.service },
                { label: "Budget", value: budgets.find((b) => b.value === formData.budget)?.label || formData.budget },
                { label: "Délai", value: timelines.find((t) => t.value === formData.timeline)?.label || formData.timeline },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between text-sm py-2 border-b border-[#2D2D4F]/30"
                >
                  <span className="text-[#8892A4]">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            {formData.description && (
              <div
                className="p-4 rounded-xl text-sm text-[#8892A4] mb-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-xs text-[#8892A4] mb-1">Description du projet :</p>
                <p className="text-[#E2E8F0]">{formData.description}</p>
              </div>
            )}
            {error && (
              <div
                className="p-3 rounded-lg text-sm text-red-400 mb-4"
                style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)" }}
              >
                {error}
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="btn-secondary flex-1"
            >
              <ArrowLeft size={18} />
              Précédent
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="btn-primary flex-1"
              disabled={
                (step === 1 && (!formData.name || !formData.email || !formData.phone || !formData.sector)) ||
                (step === 2 && (!formData.service || !formData.budget)) ||
                (step === 3 && (!formData.timeline || !formData.description))
              }
            >
              Continuer
              <ArrowRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary flex-1 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2 justify-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Envoi...
                </span>
              ) : (
                "Envoyer ma demande"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DevisPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Demande de Devis</div>
          <h1 className="section-title">
            Obtenez votre devis
            <br />
            <span className="gradient-text">personnalisé et gratuit</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Remplissez ce formulaire en 3 minutes. Nous vous répondons avec une
            proposition détaillée sous 24h ouvrées.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-[#7C3AED]/30 border-t-[#7C3AED] rounded-full animate-spin" />
            </div>
          }
        >
          <DevisForm />
        </Suspense>
      </div>
    </div>
  );
}
