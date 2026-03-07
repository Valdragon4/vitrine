import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8">
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
