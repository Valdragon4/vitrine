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
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          1. Collecte des données personnelles
        </h2>
        <p className="text-zinc-300 mb-4">
          Dans le cadre de l'utilisation du site valentin-marot.fr, nous collectons les données suivantes :
        </p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
          <li>Données de contact (nom, email, message) via le formulaire de contact</li>
          <li>Données de navigation via PostHog (mesure d&apos;audience) — <span className="text-zinc-100 font-medium">uniquement si vous y avez consenti</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          2. Finalités du traitement
        </h2>
        <p className="text-zinc-300 mb-4">Vos données personnelles sont collectées pour :</p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
          <li>Répondre à vos demandes de contact</li>
          <li>Améliorer l'expérience utilisateur du site</li>
          <li>Assurer la sécurité et le bon fonctionnement du site</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          3. Cookies et analytics
        </h2>
        <p className="text-zinc-300 mb-4">
          Ce site utilise PostHog pour mesurer les pages consultées et améliorer
          la navigation.
        </p>
        <p className="text-zinc-300 mb-4">
          <span className="text-zinc-100 font-medium">
            Rien n&apos;est mesuré tant que vous n&apos;avez pas accepté.
          </span>{' '}
          Tant que le choix n&apos;a pas été fait, le script de mesure n&apos;est pas
          chargé, aucun cookie n&apos;est déposé et aucune donnée de navigation
          n&apos;est transmise. Un bandeau vous demande votre accord lors de votre
          première visite.
        </p>
        <p className="text-zinc-300 mb-4">
          Si vous refusez, rien n&apos;est mesuré et le choix est conservé pour vos
          visites suivantes. Si vous acceptez, la mesure démarre immédiatement et
          un cookie est déposé pour reconnaître votre navigateur d&apos;une page à
          l&apos;autre.
        </p>
        <p className="text-zinc-300">
          Vous pouvez revenir sur votre choix à tout moment via le lien{' '}
          <span className="text-zinc-100 font-medium">« Gérer les cookies »</span>{' '}
          en pied de page. Revenir sur une acceptation coupe la mesure et efface
          les identifiants déposés.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          4. Partage des données
        </h2>
        <p className="text-zinc-300 mb-4">
          Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers, sauf :
        </p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
          <li>En cas d'obligation légale</li>
          <li>Avec votre consentement explicite</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          5. Durée de conservation
        </h2>
        <div className="border-l border-amber-500/40 pl-5 py-1">
          <ul className="text-zinc-300 space-y-2">
            <li><span className="text-zinc-100 font-medium">Données de contact :</span> 3 ans après le dernier contact</li>
            <li><span className="text-zinc-100 font-medium">Données analytics :</span> 12 mois maximum</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          6. Vos droits RGPD
        </h2>
        <p className="text-zinc-300 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
          <li><span className="text-zinc-100 font-medium">Droit d'accès :</span> obtenir une copie de vos données</li>
          <li><span className="text-zinc-100 font-medium">Droit de rectification :</span> corriger des données inexactes</li>
          <li><span className="text-zinc-100 font-medium">Droit d'effacement :</span> supprimer vos données</li>
          <li><span className="text-zinc-100 font-medium">Droit à la portabilité :</span> récupérer vos données</li>
          <li><span className="text-zinc-100 font-medium">Droit d'opposition :</span> vous opposer au traitement</li>
        </ul>
        <p className="text-zinc-300 mt-4">
          Pour exercer ces droits, contactez-nous à : <EmailLink />
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          7. Sécurité des données
        </h2>
        <p className="text-zinc-300">
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
          contre la perte, l'utilisation abusive, l'accès non autorisé ou la divulgation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          8. Réclamations
        </h2>
        <p className="text-zinc-300 mb-4">
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
        </p>
        <div className="border-l border-amber-500/40 pl-5 py-1 space-y-2">
          <p className="text-zinc-100 font-medium">CNIL</p>
          <p className="text-zinc-300">3 Place de Fontenoy - TSA 80715</p>
          <p className="text-zinc-300">75334 PARIS CEDEX 07</p>
          <p className="text-zinc-300">
            Site web : <a href="https://www.cnil.fr" className="text-amber-400 hover:text-amber-300 underline decoration-amber-400/40 underline-offset-2" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          9. Contact
        </h2>
        <div className="border-l border-amber-500/40 pl-5 py-1 space-y-2">
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Email :</span> <EmailLink /></p>
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Site web :</span> valentin-marot.fr</p>
        </div>
      </section>

      <div className="text-sm text-zinc-400 mt-10 pt-6 border-t border-zinc-700/50">
        <p>Dernière mise à jour : Mars 2026</p>
      </div>
    </LegalLayout>
  );
}
