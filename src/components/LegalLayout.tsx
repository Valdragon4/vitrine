import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-zinc-950 py-12">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 min-h-[44px] text-zinc-400 hover:text-zinc-200 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div className="bg-zinc-900/80 rounded-3xl border border-zinc-800 p-8 md:p-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mb-8">
            {title}
          </h1>
          
          <div className="prose prose-invert prose-slate max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
