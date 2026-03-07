import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Valentin MAROT",
  description: "Politique de confidentialité et protection des données personnelles - RGPD",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          1. Collecte des données personnelles
        </h2>
        <p className="text-slate-300 mb-4">
          Dans le cadre de l'utilisation du site valentin-marot.fr, nous collectons les données suivantes :
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Données de contact (nom, email, message) via le formulaire de contact</li>
          <li>Données de navigation anonymisées via PostHog (analytics)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          2. Finalités du traitement
        </h2>
        <p className="text-slate-300 mb-4">Vos données personnelles sont collectées pour :</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Répondre à vos demandes de contact</li>
          <li>Améliorer l'expérience utilisateur du site</li>
          <li>Assurer la sécurité et le bon fonctionnement du site</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          3. Cookies et analytics
        </h2>
        <p className="text-slate-300 mb-4">
          Ce site utilise PostHog pour analyser le comportement des visiteurs de manière anonymisée. 
          Ces données nous aident à améliorer l'expérience utilisateur.
        </p>
        <p className="text-slate-300">
          Vous pouvez désactiver le suivi en utilisant une extension de navigateur type "Do Not Track" 
          ou en bloquant les scripts tiers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          4. Partage des données
        </h2>
        <p className="text-slate-300 mb-4">
          Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers, sauf :
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>En cas d'obligation légale</li>
          <li>Avec votre consentement explicite</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          5. Durée de conservation
        </h2>
        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
          <ul className="text-slate-300 space-y-2">
            <li><span className="text-slate-100 font-medium">Données de contact :</span> 3 ans après le dernier contact</li>
            <li><span className="text-slate-100 font-medium">Données analytics :</span> 12 mois maximum</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          6. Vos droits RGPD
        </h2>
        <p className="text-slate-300 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li><span className="text-slate-100 font-medium">Droit d'accès :</span> obtenir une copie de vos données</li>
          <li><span className="text-slate-100 font-medium">Droit de rectification :</span> corriger des données inexactes</li>
          <li><span className="text-slate-100 font-medium">Droit d'effacement :</span> supprimer vos données</li>
          <li><span className="text-slate-100 font-medium">Droit à la portabilité :</span> récupérer vos données</li>
          <li><span className="text-slate-100 font-medium">Droit d'opposition :</span> vous opposer au traitement</li>
        </ul>
        <p className="text-slate-300 mt-4">
          Pour exercer ces droits, contactez-nous à : <EmailLink />
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          7. Sécurité des données
        </h2>
        <p className="text-slate-300">
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
          contre la perte, l'utilisation abusive, l'accès non autorisé ou la divulgation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          8. Réclamations
        </h2>
        <p className="text-slate-300 mb-4">
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
        </p>
        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 space-y-2">
          <p className="text-slate-100 font-medium">CNIL</p>
          <p className="text-slate-300">3 Place de Fontenoy - TSA 80715</p>
          <p className="text-slate-300">75334 PARIS CEDEX 07</p>
          <p className="text-slate-300">
            Site web : <a href="https://www.cnil.fr" className="text-sky-400 hover:text-sky-300" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          9. Contact
        </h2>
        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 space-y-2">
          <p className="text-slate-300"><span className="text-slate-100 font-medium">Email :</span> <EmailLink /></p>
          <p className="text-slate-300"><span className="text-slate-100 font-medium">Site web :</span> valentin-marot.fr</p>
        </div>
      </section>

      <div className="text-sm text-slate-500 mt-10 pt-6 border-t border-slate-700/50">
        <p>Dernière mise à jour : Mars 2026</p>
      </div>
    </LegalLayout>
  );
}
