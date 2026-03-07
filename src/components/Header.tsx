'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950 backdrop-blur-xl border-b border-slate-800/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-slate-950/0 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <Logo variant="monogram" size="md" />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300/80">
                Valentin Marot
              </span>
              <span className="text-[11px] text-slate-400/90">
                Sites web & solutions numériques pour petites structures
              </span>
            </div>
          </div>

          {/* Bouton Contact Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors duration-200 shadow-md shadow-emerald-500/40"
            >
              Parlez-moi de votre projet
            </a>
          </div>

          {/* Menu Mobile (réduit au CTA) */}
          <div className="md:hidden">
            <a
              href="#contact"
              className="px-3 py-2 rounded-xl text-xs font-semibold tracking-wide bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors duration-200 shadow-md shadow-emerald-500/40"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
