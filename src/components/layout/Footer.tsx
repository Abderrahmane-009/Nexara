"use client";

import Link from "next/link";
import { getWhatsAppLink } from "@/lib/utils";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const services = [
  { href: "/services/chatbots-ia", label: "Chatbots IA" },
  { href: "/services/sites-web", label: "Sites Web" },
  { href: "/services/ecommerce", label: "E-Commerce" },
  { href: "/services/applications-web", label: "Applications Web" },
  { href: "/services/branding", label: "Branding & Design" },
  { href: "/services/automatisation", label: "Automatisation" },
];

const company = [
  { href: "/about", label: "À Propos" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/mentions-legales", label: "Mentions Légales" },
  { href: "/confidentialite", label: "Politique de Confidentialité" },
  { href: "/cgv", label: "CGV / CGU" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0D1A 0%, #080812 100%)",
        borderTop: "1px solid rgba(124, 58, 237, 0.15)",
      }}
    >
      {/* Background Effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)",
        }}
      />

      <div className="container-nexara relative z-10">
        {/* CTA Banner */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 my-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30 rounded-3xl" />
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à digitaliser votre entreprise ?
            </h2>
            <p className="text-[#8892A4] mb-8 text-lg">
              Obtenez une consultation gratuite et découvrez comment NEXARA peut
              transformer votre présence digitale en moteur de croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="btn-primary">
                Demander un Devis Gratuit
                <ArrowRight size={18} />
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Parler à un expert
              </a>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-t border-[#2D2D4F]/50">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="hexagon w-10 h-10 flex items-center justify-center text-white font-black text-xl"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
                }}
              >
                N
              </div>
              <span className="font-poppins font-black text-xl text-white">
                NEX<span className="gradient-text">ARA</span>
              </span>
            </Link>
            <p className="text-[#8892A4] text-sm leading-relaxed mb-6">
              Agence digitale 360° premium. Nous accompagnons les entreprises
              algériennes vers l'excellence numérique avec des standards
              internationaux.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-[#8892A4]">
                <MapPin size={14} className="text-[#7C3AED] shrink-0" />
                <span>Alger, Algérie</span>
              </div>
              <div className="flex items-center gap-2 text-[#8892A4]">
                <Mail size={14} className="text-[#06B6D4] shrink-0" />
                <a
                  href="mailto:contact@nexara.dz"
                  className="hover:text-white transition-colors"
                >
                  contact@nexara.dz
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#8892A4]">
                <Phone size={14} className="text-[#10B981] shrink-0" />
                <a
                  href="tel:+213XXXXXXXXX"
                  className="hover:text-white transition-colors"
                >
                  +213 XX XX XX XX
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[#8892A4] hover:text-[#06B6D4] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[#8892A4] hover:text-[#06B6D4] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5">
              Restez Informé
            </h4>
            <p className="text-[#8892A4] text-sm mb-4">
              Recevez nos conseils digitaux et actualités pour les entreprises
              algériennes.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="votre@email.com"
                className="input-dark text-sm"
              />
              <button type="submit" className="btn-primary w-full text-sm py-2.5">
                S'abonner
              </button>
            </form>
            <p className="text-[#8892A4] text-xs mt-3">
              Zéro spam. Désabonnement à tout moment.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2D2D4F]/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8892A4] text-sm text-center sm:text-left">
            © {new Date().getFullYear()} NEXARA — Tous droits réservés. Alger,
            Algérie.
          </p>
          <div className="flex items-center gap-4">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#8892A4] hover:text-white text-xs transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
