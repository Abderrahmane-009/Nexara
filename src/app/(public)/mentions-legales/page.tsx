import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | NEXARA",
  description: "Mentions légales de NEXARA, agence digitale 360° basée à Alger, Algérie.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara max-w-4xl mx-auto">
        <div className="section-badge mb-6 w-fit">✦ Légal</div>
        <h1 className="font-poppins font-black text-4xl text-white mb-4">
          Mentions Légales
        </h1>
        <p className="text-[#8892A4] mb-12">Dernière mise à jour : Mars 2026</p>

        <div className="space-y-10">
          {[
            {
              title: "1. Éditeur du Site",
              content: `Le site web nexara.dz est édité par NEXARA, agence digitale 360° et intelligence artificielle.

Dénomination : NEXARA
Siège social : Alger, Algérie
Email : contact@nexara.dz
Téléphone : +213 XX XX XX XX`,
            },
            {
              title: "2. Hébergement",
              content: `Le site nexara.dz est hébergé par des services cloud internationaux certifiés ISO 27001, offrant des garanties de disponibilité et de sécurité conformes aux standards internationaux.`,
            },
            {
              title: "3. Propriété Intellectuelle",
              content: `L'ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, éléments sonores, logiciels) est la propriété exclusive de NEXARA et est protégé par les dispositions de l'Ordonnance n°03-05 du 19 Joumada El Oula 1424 correspondant au 19 juillet 2003 relative aux droits d'auteur et aux droits voisins, et par toute convention internationale applicable en Algérie.

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de NEXARA.`,
            },
            {
              title: "4. Protection des Données Personnelles",
              content: `Conformément à la Loi n°18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, NEXARA s'engage à :

• Collecter uniquement les données nécessaires à la finalité déclarée
• Conserver vos données pendant la durée minimale nécessaire
• Ne pas transmettre vos données à des tiers sans votre consentement
• Garantir votre droit d'accès, de rectification et de suppression

Pour exercer vos droits, contactez-nous à : contact@nexara.dz`,
            },
            {
              title: "5. Cookies",
              content: `Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie de suivi commercial tiers n'est utilisé sans votre consentement préalable.

Vous pouvez à tout moment désactiver les cookies via les paramètres de votre navigateur, ce qui peut altérer certaines fonctionnalités du site.`,
            },
            {
              title: "6. Limitation de Responsabilité",
              content: `NEXARA met tout en œuvre pour maintenir la disponibilité et l'exactitude des informations publiées sur ce site. Cependant, NEXARA ne saurait être tenu responsable des erreurs d'omission, des inexactitudes ou de toute défaillance technique.

Les liens vers des sites tiers sont fournis à titre informatif uniquement. NEXARA ne peut être tenu responsable du contenu de ces sites.`,
            },
            {
              title: "7. Droit Applicable",
              content: `Les présentes mentions légales sont régies par le droit algérien. Tout litige sera soumis à la compétence exclusive des tribunaux algériens compétents.`,
            },
          ].map((section, i) => (
            <div
              key={i}
              className="glass-card p-6"
              style={{ borderLeft: "3px solid rgba(124, 58, 237, 0.4)" }}
            >
              <h2 className="font-poppins font-bold text-lg text-white mb-4">
                {section.title}
              </h2>
              <p className="text-[#8892A4] text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
