import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente - Valentin MAROT",
  description: "Conditions générales de vente des prestations de services informatiques",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente">
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 1 - Objet et champ d'application
        </h2>
        <p className="text-slate-300 mb-4">
          Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services 
          informatiques conclues par Valentin MAROT, micro-entrepreneur, auprès de clients professionnels ou particuliers.
        </p>
        <p className="text-slate-300">
          Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent sur tout autre document.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 2 - Prestations proposées
        </h2>
        <p className="text-slate-300 mb-4">Les prestations proposées comprennent notamment :</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Création et développement de sites web</li>
          <li>Développement d'applications sur mesure</li>
          <li>Administration système et hébergement</li>
          <li>Maintenance et support technique</li>
          <li>Conseil et accompagnement informatique</li>
        </ul>
        <p className="text-slate-300 mt-4">
          Le détail des prestations est défini dans le devis accepté par le client.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 3 - Devis et commande
        </h2>
        <p className="text-slate-300 mb-4">
          Tout projet fait l'objet d'un devis gratuit et personnalisé. Le devis détaille :
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>La nature et l'étendue des prestations</li>
          <li>Le prix et les modalités de paiement</li>
          <li>Les délais de réalisation estimés</li>
        </ul>
        <p className="text-slate-300 mt-4">
          Le devis est valable 30 jours à compter de sa date d'émission. La commande est confirmée 
          par la signature du devis et le versement de l'acompte prévu.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 4 - Tarifs et paiement
        </h2>
        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 mb-4">
          <p className="text-slate-300 mb-2">
            <span className="text-slate-100 font-medium">TVA :</span> Non applicable (article 293 B du CGI)
          </p>
          <p className="text-slate-300">
            <span className="text-slate-100 font-medium">Modalités :</span> Définies dans chaque devis
          </p>
        </div>
        <p className="text-slate-300 mb-4">
          Sauf mention contraire dans le devis, les conditions de paiement sont les suivantes :
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>30% d'acompte à la commande</li>
          <li>Solde à la livraison</li>
        </ul>
        <p className="text-slate-300 mt-4">
          <span className="text-slate-100 font-medium">Moyens de paiement acceptés :</span> Virement bancaire, PayPal
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 5 - Délais de réalisation
        </h2>
        <p className="text-slate-300 mb-4">
          Les délais de réalisation sont donnés à titre indicatif et dépendent de la complexité du projet 
          et de la réactivité du client pour fournir les éléments nécessaires.
        </p>
        <p className="text-slate-300">
          Tout retard imputable au client (validation, fourniture de contenus, etc.) peut entraîner 
          un report du délai de livraison.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 6 - Validation et livraison
        </h2>
        <p className="text-slate-300 mb-4">
          Le projet est présenté au client pour validation à chaque étape clé définie dans le devis. 
          Le client dispose de 7 jours pour formuler ses remarques ou demandes de modifications.
        </p>
        <p className="text-slate-300 mb-4">
          La livraison est considérée comme effectuée à la mise en ligne du projet ou à la remise 
          des fichiers/accès au client.
        </p>
        <p className="text-slate-300">
          <span className="text-slate-100 font-medium">Modifications post-livraison :</span> Toute modification 
          demandée après la livraison finale fera l'objet d'un nouveau devis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 7 - Propriété intellectuelle
        </h2>
        <p className="text-slate-300 mb-4">
          Le transfert de propriété des éléments créés spécifiquement pour le client est effectif 
          après paiement intégral de la prestation.
        </p>
        <p className="text-slate-300 mb-4">
          Le prestataire conserve le droit de mentionner la réalisation dans son portfolio, 
          sauf demande contraire écrite du client.
        </p>
        <p className="text-slate-300">
          Les outils, frameworks et composants génériques développés ou utilisés restent la propriété 
          du prestataire et peuvent être réutilisés pour d'autres projets.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 8 - Hébergement et maintenance
        </h2>
        <p className="text-slate-300 mb-4">
          Si une offre d'hébergement et/ou de maintenance est souscrite :
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>L'hébergement est facturé mensuellement ou annuellement selon le contrat</li>
          <li>La maintenance inclut les mises à jour de sécurité et corrections de bugs</li>
          <li>Les évolutions fonctionnelles font l'objet d'un devis séparé</li>
        </ul>
        <p className="text-slate-300 mt-4">
          Le préavis de résiliation est de 30 jours avant la date d'échéance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 9 - Responsabilité
        </h2>
        <p className="text-slate-300 mb-4">
          Le prestataire s'engage à apporter tout le soin nécessaire à la réalisation des prestations. 
          Il s'agit d'une obligation de moyens.
        </p>
        <p className="text-slate-300 mb-4">
          La responsabilité du prestataire est limitée au montant de la prestation concernée. 
          Il ne pourra être tenu responsable des dommages indirects.
        </p>
        <p className="text-slate-300">
          Le client est responsable des contenus qu'il fournit (textes, images, etc.) et garantit 
          disposer des droits nécessaires à leur utilisation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 10 - Confidentialité
        </h2>
        <p className="text-slate-300">
          Les deux parties s'engagent à garder confidentielles les informations échangées dans le cadre 
          de la prestation. Cette obligation perdure après la fin de la relation commerciale.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 11 - Résiliation
        </h2>
        <p className="text-slate-300 mb-4">
          En cas de résiliation anticipée par le client :
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>L'acompte versé reste acquis au prestataire</li>
          <li>Les travaux déjà réalisés sont facturés au prorata</li>
        </ul>
        <p className="text-slate-300 mt-4">
          Le prestataire peut résilier le contrat en cas de non-paiement ou de manquement grave 
          du client à ses obligations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 12 - Droit de rétractation
        </h2>
        <p className="text-slate-300 mb-4">
          Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation 
          ne s'applique pas aux prestations de services pleinement exécutées avant la fin du délai 
          de rétractation et dont l'exécution a commencé avec l'accord du consommateur.
        </p>
        <p className="text-slate-300">
          Pour les prestations non commencées, le client particulier dispose d'un délai de 14 jours 
          pour exercer son droit de rétractation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 13 - Litiges et droit applicable
        </h2>
        <p className="text-slate-300 mb-4">
          Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable 
          sera recherchée en priorité.
        </p>
        <p className="text-slate-300 mb-4">
          À défaut d'accord amiable, les tribunaux compétents de Troyes seront seuls compétents.
        </p>
        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
          <p className="text-slate-100 font-medium mb-2">Médiation de la consommation</p>
          <p className="text-slate-300">
            Conformément aux articles L.616-1 et R.616-1 du code de la consommation, le client peut 
            recourir gratuitement au service de médiation proposé. Le médiateur peut être saisi 
            via la plateforme européenne de règlement en ligne des litiges : 
            <a href="https://ec.europa.eu/consumers/odr" className="text-sky-400 hover:text-sky-300 ml-1" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">
          Article 14 - Contact
        </h2>
        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 space-y-2">
          <p className="text-slate-300"><span className="text-slate-100 font-medium">Valentin MAROT</span></p>
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
