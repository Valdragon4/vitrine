'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#experience' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Échap ferme le panneau et rend le focus au bouton qui l'a ouvert.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // Le panneau ouvert fige le défilement derrière lui.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-zinc-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 gap-4">
          <a href="#accueil" aria-label="Retour à l’accueil" className="rounded-lg">
            <Logo variant="full" size="md" />
          </a>

          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Navigation principale"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-amber-400 transition-colors rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
            >
              Me contacter
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="menu-mobile"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-200 hover:border-zinc-600 transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation mobile — sans elle, les sections ne sont atteignables
          qu'en parcourant toute la page. */}
      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!isOpen}
        className="md:hidden border-t border-zinc-800 bg-[#0a0a0b]/97 backdrop-blur-md"
      >
        <nav
          className="max-w-[100rem] mx-auto px-5 sm:px-8 py-3"
          aria-label="Navigation principale"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center min-h-[52px] px-2 text-base text-zinc-200 border-b border-zinc-900 last:border-b-0 hover:text-amber-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
