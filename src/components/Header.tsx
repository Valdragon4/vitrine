'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0b]/85 backdrop-blur-md border-b border-zinc-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#accueil" aria-label="Accueil">
            <Logo variant="full" size="md" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-wide text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
