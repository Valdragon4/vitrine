import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
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
    <LegalLayout title="Mentions légales">
      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          1. Éditeur du site
        </h2>
        <div className="border-l border-amber-500/40 pl-5 py-1 space-y-2">
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Nom :</span> Valentin MAROT</p>
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Statut :</span> Micro-entrepreneur</p>
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">SIRET :</span> 94108004600019</p>
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Adresse :</span> Troyes, France</p>
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Email :</span> <EmailLink /></p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          2. Hébergement
        </h2>
        <div className="border-l border-amber-500/40 pl-5 py-1 space-y-2">
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Hébergeur :</span> Auto-hébergement</p>
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Responsable :</span> Valentin MAROT</p>
          <p className="text-zinc-300"><span className="text-zinc-100 font-medium">Localisation :</span> Troyes, France</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          3. Propriété intellectuelle
        </h2>
        <p className="text-zinc-300 mb-4">
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
          Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
        <p className="text-zinc-300">
          La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
          sauf autorisation expresse de l'éditeur.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          4. Responsabilité
        </h2>
        <p className="text-zinc-300 mb-4">
          Les informations contenues sur ce site sont aussi précises que possible et le site est mis à jour régulièrement, 
          mais peut toutefois contenir des inexactitudes ou des omissions.
        </p>
        <p className="text-zinc-300">
          Si vous constatez une erreur ou un dysfonctionnement, merci de le signaler par email à <EmailLink />.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          5. Liens hypertextes
        </h2>
        <p className="text-zinc-300">
          Des liens hypertextes peuvent être présents sur le site. En cliquant sur ces liens, 
          vous quittez le site valentin-marot.fr. L'éditeur n'a pas de contrôle sur les pages web externes 
          et ne saurait être responsable de leur contenu.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          6. Droit applicable
        </h2>
        <p className="text-zinc-300">
          Tout litige en relation avec l'utilisation du site valentin-marot.fr est soumis au droit français. 
          Il est fait attribution exclusive de juridiction aux tribunaux compétents de Troyes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-xl font-semibold text-zinc-100 mb-4">
          7. Contact
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
