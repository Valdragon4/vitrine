'use client';

import { Mail, Github, Linkedin } from 'lucide-react';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#experience' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { icon: Mail, href: 'mailto:contact@valentin-marot.fr', label: 'Email' },
  { icon: Github, href: 'https://github.com/Valentin-MAROT', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/valentin-marot/', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0b]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Identité */}
          <div>
            <p className="text-lg font-semibold text-zinc-100">Valentin Marot</p>
            <p className="font-mono text-xs text-zinc-500 mt-1">
              Développeur web &amp; DevOps · Freelance
            </p>
            <div className="flex gap-2 mt-5">
              {SOCIAL.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wide mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-y-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Légal */}
          <div>
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wide mb-4">Informations</p>
            <div className="flex flex-col gap-2">
              <a href="/mentions-legales" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="/cgv" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-zinc-600">
            © 2026 Valentin Marot — Tous droits réservés
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Next.js · React Three Fiber
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
