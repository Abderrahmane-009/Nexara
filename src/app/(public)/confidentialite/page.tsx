import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | NEXARA",
  description:
    "Politique de confidentialité de NEXARA. Comment nous collectons, utilisons et protégeons vos données personnelles, conformément à la loi n°18-07.",
};

export default function ConfidentialitePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-nexara max-w-4xl mx-auto">
        <div className="section-badge mb-6 w-fit">✦ Confidentialité</div>
        <h1 className="font-poppins font-black text-4xl text-white mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-[#8892A4] mb-12">
          Dernière mise à jour : Mars 2026 — Conforme à la Loi n°18-07 (Algérie)
        </p>

        <div className="space-y-8">
          {[
            {
              title: "1. Responsable du Traitement",
              content: `NEXARA, agence digitale basée à Alger, Algérie, est responsable du traitement de vos données personnelles collectées via le site nexara.dz.

Contact : contact@nexara.dz`,
            },
            {
              title: "2. Données Collectées",
              content: `Nous collectons uniquement les données que vous nous transmettez volontairement :
              
• Données d'identification : nom, prénom
• Coordonnées : email, téléphone
• Données professionnelles : entreprise, secteur d'activité
• Messages et descriptions de projets soumis via nos formulaires
• Données de navigation : adresse IP, type de navigateur (données anonymisées)

Aucune donnée sensible (données de santé, données biométriques, etc.) n'est collectée.`,
            },
            {
              title: "3. Finalités du Traitement",
              content: `Vos données sont collectées pour les finalités suivantes :

• Répondre à vos demandes de devis et messages de contact
• Gérer la relation commerciale avec nos clients
• Vous envoyer des informations si vous y avez consenti (newsletter)
• Améliorer nos services et l'expérience utilisateur
• Respecter nos obligations légales

Base légale : consentement de l'utilisateur et exécution du contrat.`,
            },
            {
              title: "4. Durée de Conservation",
              content: `Vos données sont conservées pour la durée strictement nécessaire à chaque finalité :

• Données de contact : 3 ans à compter du dernier contact
• Données clients : 10 ans (obligations comptables et légales)
• Données newsletter : jusqu'au désabonnement + 1 an
• Données de navigation anonymisées : 13 mois maximum`,
            },
            {
              title: "5. Partage des Données",
              content: `NEXARA ne cède, ne loue et ne vend jamais vos données personnelles à des tiers.

Vos données peuvent être partagées avec des sous-traitants techniques (hébergement, email) dans le strict cadre de l'exécution de nos services, liés par des obligations contractuelles de confidentialité.

Aucun transfert de données vers des pays tiers à l'Algérie sans garanties appropriées.`,
            },
            {
              title: "6. Vos Droits",
              content: `Conformément à la Loi n°18-07, vous disposez des droits suivants :

• Droit d'accès : obtenir une copie de vos données
• Droit de rectification : corriger des données inexactes
• Droit à l'effacement : demander la suppression de vos données
• Droit d'opposition : vous opposer à certains traitements
• Droit à la limitation : limiter le traitement de vos données
• Droit à la portabilité : recevoir vos données dans un format lisible

Pour exercer ces droits : contact@nexara.dz
Délai de réponse : 30 jours maximum.`,
            },
            {
              title: "7. Sécurité",
              content: `NEXARA met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation :

• Chiffrement SSL/TLS des communications
• Accès restreint aux données (principe du moindre privilège)
• Sauvegardes régulières chiffrées
• Surveillance et audit réguliers`,
            },
            {
              title: "8. Cookies et Traceurs",
              content: `Notre site utilise des cookies strictement nécessaires au fonctionnement technique. Aucun cookie publicitaire tiers n'est déposé sans votre accord explicite.

Vous pouvez gérer vos préférences cookies à tout moment via le bandeau de consentement ou les paramètres de votre navigateur.`,
            },
            {
              title: "9. Contact & Réclamations",
              content: `Pour toute question relative à cette politique ou pour exercer vos droits : contact@nexara.dz

Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation auprès des autorités compétentes en Algérie.`,
            },
          ].map((section, i) => (
            <div
              key={i}
              className="glass-card p-6"
              style={{ borderLeft: "3px solid rgba(6, 182, 212, 0.4)" }}
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
