"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D1A]">
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-5"
          style={{
            background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px] opacity-5"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute hexagon animate-float"
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              background: `linear-gradient(135deg, rgba(124, 58, 237, ${0.05 + i * 0.02}), rgba(6, 182, 212, ${0.05 + i * 0.02}))`,
              border: `1px solid rgba(124, 58, 237, ${0.1 + i * 0.05})`,
              top: `${10 + i * 12}%`,
              left: `${5 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container-nexara relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="section-badge mx-auto mb-6 w-fit">
            <Sparkles size={14} />
            Agence Digitale 360° Premium · Alger, Algérie
          </div>

          {/* Main Title */}
          <h1 className="font-poppins font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.05] text-balance">
            <span className="text-white">Digitalisons</span>
            <br />
            <span className="gradient-text">l'Algérie,</span>
            <br />
            <span className="text-white">ensemble.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#8892A4] max-w-3xl mx-auto mb-10 leading-relaxed">
            NEXARA conçoit des solutions digitales premium — sites web,
            chatbots IA, e-commerce et automatisation — avec des standards
            internationaux adaptés au marché algérien.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/devis" className="btn-primary text-base px-8 py-4">
              Obtenir un Devis Gratuit
              <ArrowRight size={20} />
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Parler à un Expert
            </a>
            <Link
              href="/portfolio"
              className="btn-secondary text-base px-8 py-4"
            >
              <Play size={18} />
              Voir nos Réalisations
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: "🏆", text: "Standards Internationaux" },
              { icon: "⚡", text: "Livraison Rapide" },
              { icon: "🔒", text: "Conformité Légale DZ" },
              { icon: "💬", text: "Support WhatsApp 7j/7" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-[#8892A4]"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Mockup / Visual */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-12"
            style={{
              background: "rgba(20, 20, 40, 0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              boxShadow: "0 40px 120px rgba(124, 58, 237, 0.1)",
            }}
          >
            {/* Fake Browser Bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div
                className="flex-1 h-6 rounded-lg mx-4 flex items-center justify-center text-xs text-[#8892A4]"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                nexara.dz
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Leads Générés", value: "+247", color: "#7C3AED", change: "+24%" },
                { label: "Projets Livrés", value: "+89", color: "#06B6D4", change: "+12%" },
                { label: "ROI Clients", value: "×3.5", color: "#10B981", change: "+18%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-xs text-[#8892A4] mb-2">{stat.label}</p>
                  <p
                    className="text-2xl font-poppins font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#10B981] mt-1">↑ {stat.change}</p>
                </div>
              ))}
            </div>

            {/* Gradient Bar */}
            <div className="mt-6 h-1 rounded-full" style={{
              background: "linear-gradient(90deg, #7C3AED, #06B6D4, #10B981)"
            }} />
          </div>

          {/* Floating Cards */}
          <div
            className="absolute -top-6 -right-4 md:-right-8 p-4 rounded-2xl animate-float"
            style={{
              background: "rgba(20, 20, 40, 0.95)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              boxShadow: "0 20px 60px rgba(124, 58, 237, 0.2)",
              animationDelay: "0.5s",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                🤖
              </div>
              <div>
                <p className="text-xs text-[#8892A4]">Chatbot IA Actif</p>
                <p className="text-sm font-semibold text-white">+156 réponses</p>
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-4 -left-4 md:-left-8 p-4 rounded-2xl animate-float"
            style={{
              background: "rgba(20, 20, 40, 0.95)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              boxShadow: "0 20px 60px rgba(6, 182, 212, 0.15)",
              animationDelay: "1.2s",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#06B6D4]/20 flex items-center justify-center">
                ⚡
              </div>
              <div>
                <p className="text-xs text-[#8892A4]">Performances</p>
                <p className="text-sm font-semibold text-white">Score 97/100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
