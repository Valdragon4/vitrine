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
  { icon: Github, href: 'https://github.com/Valdragon4', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/valentin-marot/', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0b]">
      <div className="max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Identité */}
          <div>
            <p className="text-lg font-semibold text-zinc-100">Valentin Marot</p>
            <p className="text-sm text-zinc-400 mt-1">
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
                    className="w-11 h-11 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-zinc-700 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] text-zinc-400 uppercase tracking-[0.14em] mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-y-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center min-h-[40px] text-sm text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Légal */}
          <div>
            <p className="text-[11px] text-zinc-400 uppercase tracking-[0.14em] mb-4">Informations</p>
            <div className="flex flex-col gap-2">
              <a href="/mentions-legales" className="inline-flex items-center min-h-[40px] text-sm text-zinc-300 hover:text-amber-400 transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="inline-flex items-center min-h-[40px] text-sm text-zinc-300 hover:text-amber-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="/cgv" className="inline-flex items-center min-h-[40px] text-sm text-zinc-300 hover:text-amber-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-zinc-400">
            © 2026 Valentin Marot — Tous droits réservés
          </p>
          <p className="text-xs text-zinc-400">
            Next.js · React Three Fiber
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
