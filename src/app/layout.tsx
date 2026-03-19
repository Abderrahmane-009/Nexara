import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    template: "%s | NEXARA — Agence Digitale 360°",
    default: "NEXARA — Agence Digitale 360° & IA | Algérie",
  },
  description:
    "NEXARA est l'agence digitale premium en Algérie. Sites web, chatbots IA, e-commerce, applications web et automatisation. Standards internationaux pour le marché algérien.",
  keywords: [
    "agence digitale algérie",
    "création site web algérie",
    "chatbot ia algérie",
    "développement web algérie",
    "e-commerce algérie",
    "marketing digital algérie",
    "nexara",
    "transformation digitale algérie",
  ],
  authors: [{ name: "NEXARA" }],
  creator: "NEXARA",
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: "https://nexara.dz",
    siteName: "NEXARA",
    title: "NEXARA — Agence Digitale 360° & IA | Algérie",
    description:
      "Digitalisons l'Algérie, ensemble. Votre partenaire de confiance pour la transformation numérique.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXARA — Agence Digitale 360°",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXARA — Agence Digitale 360° & IA | Algérie",
    description: "Digitalisons l'Algérie, ensemble.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0D0D1A] text-[#E2E8F0] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
