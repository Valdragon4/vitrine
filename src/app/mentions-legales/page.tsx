import type { Metadata } from "next";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Mentions légales - Valentin MAROT",
  description: "Mentions légales du site valentin-marot.fr",
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Mentions légales
          </h1>
          
          <div className="max-w-none text-gray-700 leading-relaxed">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Éditeur du site
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Nom :</strong> Valentin MAROT</p>
                <p><strong>Statut :</strong> Micro-entrepreneur</p>
                <p><strong>Adresse :</strong> 1 rue Jules Salleron, 10000 Troyes, France</p>
                <p><strong>Téléphone :</strong> 06 49 52 61 58</p>
                <p><strong>Email :</strong> <EmailLink /></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Hébergement
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Hébergeur :</strong> Auto-hébergement</p>
                <p><strong>Adresse :</strong> 1 rue Jules Salleron, 10000 Troyes, France</p>
                <p><strong>Téléphone :</strong> 06 49 52 61 58</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Responsabilité
              </h2>
              <p className="mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, 
                à l'adresse <EmailLink />, en décrivant le problème de la manière la plus précise possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Liens hypertextes
              </h2>
              <p className="mb-4">
                Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, 
                il sortira du site valentin-marot.fr. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens 
                et ne saurait, en aucun cas, être responsable de leur contenu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Droit applicable
              </h2>
              <p className="mb-4">
                Tout litige en relation avec l'utilisation du site valentin-marot.fr est soumis au droit français. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Troyes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Contact
              </h2>
              <p className="mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
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
