import type { Metadata } from "next";
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Politique de confidentialité
          </h1>
          
          <div className="max-w-none text-gray-700 leading-relaxed">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Collecte des données personnelles
              </h2>
              <p className="mb-4">
                Dans le cadre de l'utilisation du site valentin-marot.fr, nous sommes amenés à collecter et traiter des données personnelles vous concernant.
              </p>
              <p className="mb-4">
                <strong>Données collectées :</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Données de contact (nom, email, message) via le formulaire de contact</li>
                <li>Données de navigation de base (adresse IP, pages visitées) via les logs du serveur</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Finalités du traitement
              </h2>
              <p className="mb-4">Vos données personnelles sont collectées pour :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Répondre à vos demandes de contact</li>
                <li>Assurer la sécurité et le bon fonctionnement du site</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Base légale du traitement
              </h2>
              <p className="mb-4">
                Le traitement de vos données personnelles est basé sur :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>L'intérêt légitime</strong> pour assurer la sécurité et le bon fonctionnement du site</li>
                <li><strong>L'exécution du contrat</strong> pour répondre à vos demandes de contact</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Cookies et technologies similaires
              </h2>
              <p className="mb-4">
                Ce site n'utilise pas de cookies de suivi ou d'analyse. Aucune donnée de navigation n'est stockée 
                sur votre appareil. Les seules données collectées sont celles nécessaires au bon fonctionnement 
                du site et à la réponse à vos demandes de contact.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Partage des données
              </h2>
              <p className="mb-4">
                Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers, sauf :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>En cas d'obligation légale</li>
                <li>Avec votre consentement explicite</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Durée de conservation
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc pl-6">
                  <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Logs de navigation :</strong> 12 mois maximum</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Vos droits RGPD
              </h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit d'effacement :</strong> supprimer vos données</li>
                <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
              </ul>
              <p className="mb-4">
                Pour exercer ces droits, contactez-nous à : <strong><EmailLink /></strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Sécurité des données
              </h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Transferts internationaux
              </h2>
              <p className="mb-4">
                Vos données personnelles sont stockées et traitées en France. Aucun transfert vers des pays tiers 
                n'est effectué.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                10. Réclamations
              </h2>
              <p className="mb-4">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>CNIL</strong></p>
                <p>3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                <p>Téléphone : 01 53 73 22 22</p>
                <p>Site web : <a href="https://www.cnil.fr" className="text-violet-600 hover:text-violet-800">www.cnil.fr</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                11. Contact
              </h2>
              <p className="mb-4">
                Pour toute question concernant cette politique de confidentialité :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email :</strong> <EmailLink /></p>
                <p><strong>Site web :</strong> https://valentin-marot.fr</p>
              </div>
            </section>

            <div className="text-sm text-gray-600 mt-8 pt-4 border-t">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
