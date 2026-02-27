'use client';

import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-violet-400">Valentin</span> MAROT
            </h3>
            <p className="text-gray-400 text-sm">
              Développeur web & systèmes – Des solutions sur mesure, simples et efficaces
            </p>
          </div>

          {/* Liens rapides */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button
                onClick={() => {
                  const element = document.querySelector('#accueil');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-violet-400 transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#a-propos');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-violet-400 transition-colors duration-200"
              >
                À propos
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#projets');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-violet-400 transition-colors duration-200"
              >
                Projets
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-violet-400 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-violet-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Suivez-moi</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="mailto:contact@valentin-marot.fr"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors duration-200"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Valentin-MAROT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors duration-200"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/valentin-marot/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 Valentin MAROT. Tous droits réservés.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-500">
                <a 
                  href="/mentions-legales" 
                  className="hover:text-violet-400 transition-colors duration-200"
                >
                  Mentions légales
                </a>
                <a 
                  href="/politique-confidentialite" 
                  className="hover:text-violet-400 transition-colors duration-200"
                >
                  Politique de confidentialité
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Fait avec <Heart className="w-4 h-4 text-red-500 mx-1" /> en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
