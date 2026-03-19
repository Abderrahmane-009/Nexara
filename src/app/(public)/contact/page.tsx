"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "contact@nexara.dz",
    href: "mailto:contact@nexara.dz",
    color: "#7C3AED",
  },
  {
    icon: <Phone size={20} />,
    label: "WhatsApp",
    value: "+213 XX XX XX XX",
    href: getWhatsAppLink(),
    color: "#25D366",
  },
  {
    icon: <MapPin size={20} />,
    label: "Localisation",
    value: "Alger, Algérie",
    href: null,
    color: "#06B6D4",
  },
  {
    icon: <Clock size={20} />,
    label: "Disponibilité",
    value: "Dim - Jeu, 9h – 18h",
    href: null,
    color: "#F59E0B",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Une erreur s'est produite. Réessayez.");
      }
    } catch {
      setError("Impossible d'envoyer le message. Réessayez ou contactez-nous sur WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-badge mx-auto mb-6 w-fit">✦ Contactez-nous</div>
          <h1 className="section-title">
            Parlons de votre
            <br />
            <span className="gradient-text">projet digital</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Notre équipe répond dans les 24 heures ouvrées. Pour une réponse
            encore plus rapide, utilisez WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div
              className="p-6 md:p-8 rounded-3xl"
              style={{
                background: "rgba(20, 20, 40, 0.6)",
                border: "1px solid rgba(124, 58, 237, 0.15)",
              }}
            >
              <h2 className="font-poppins font-bold text-xl text-white mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-[#8892A4] mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#06B6D4] transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-base py-4 block text-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contacter sur WhatsApp — Réponse immédiate
            </a>

            {/* Response Time */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div className="flex items-center gap-2 text-[#10B981] font-medium mb-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Nous sommes disponibles
              </div>
              <p className="text-[#8892A4] text-xs">
                Dimanche au Jeudi, 9h à 18h (heure d'Alger). Via WhatsApp,
                réponse dans l'heure en horaires ouvrés.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-6 md:p-8 rounded-3xl"
            style={{
              background: "rgba(20, 20, 40, 0.6)",
              border: "1px solid rgba(124, 58, 237, 0.15)",
            }}
          >
            {success ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-poppins font-bold text-xl text-white mb-3">
                  Message envoyé !
                </h3>
                <p className="text-[#8892A4]">
                  Merci pour votre message. Notre équipe vous répondra dans les
                  24 heures ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-poppins font-bold text-xl text-white mb-6">
                  Envoyer un message
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#8892A4] mb-1.5 font-medium">
                      Prénom & Nom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Karim Benzara"
                      className="input-dark w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#8892A4] mb-1.5 font-medium">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+213 XX XX XX XX"
                      className="input-dark w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#8892A4] mb-1.5 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="input-dark w-full"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#8892A4] mb-1.5 font-medium">
                    Sujet
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="input-dark w-full"
                    style={{ appearance: "none" }}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="support">Support technique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#8892A4] mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre question..."
                    className="input-dark w-full resize-none"
                  />
                </div>

                {error && (
                  <div
                    className="p-3 rounded-lg text-sm text-red-400"
                    style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)" }}
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <Send size={18} />
                      Envoyer le message
                    </span>
                  )}
                </button>

                <p className="text-[#8892A4] text-xs text-center">
                  En envoyant ce formulaire, vous acceptez notre{" "}
                  <a href="/confidentialite" className="text-[#7C3AED] hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
