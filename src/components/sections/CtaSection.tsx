import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-nexara relative z-10">
        <div
          className="rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(6, 182, 212, 0.1))",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            boxShadow: "0 40px 120px rgba(124, 58, 237, 0.1)",
          }}
        >
          {/* Decorative Elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-10"
            style={{
              background:
                "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 opacity-10"
            style={{
              background:
                "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="font-poppins font-black text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Votre transformation digitale
              <br />
              <span className="gradient-text">commence aujourd'hui.</span>
            </h2>
            <p className="text-[#8892A4] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Audit gratuit de votre présence digitale actuelle. Un expert
              NEXARA analyse vos besoins et vous propose une feuille de route
              claire et actionnable — sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="btn-primary text-base px-8 py-4">
                Obtenir mon Audit Gratuit
                <ArrowRight size={20} />
              </Link>
              <a
                href={getWhatsAppLink(
                  "Bonjour NEXARA, je souhaite obtenir un audit gratuit de ma présence digitale."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Discuter sur WhatsApp
              </a>
            </div>

            <p className="text-[#8892A4] text-sm mt-6">
              ✅ Audit 100% gratuit · ✅ Réponse sous 24h · ✅ Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
