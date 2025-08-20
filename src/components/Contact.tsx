'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { trackContactForm, trackExternalLink } from '@/lib/gtm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        trackContactForm('contact_form', true);
      } else {
        setSubmitStatus('error');
        console.error('Erreur:', data.error);
        trackContactForm('contact_form', false);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur réseau:', error);
      trackContactForm('contact_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter via ce formulaire ou directement par email.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mes coordonnées
              </h3>
              <p className="text-gray-600 mb-8">
                Je suis disponible pour discuter de vos projets et répondre à vos questions. N'hésitez pas à me contacter !
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:contact@valentin-marot.fr" 
                    className="text-violet-600 hover:text-violet-700 transition-colors duration-200"
                  >
                    contact@valentin-marot.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">GitHub</h4>
                  <a 
                    href="https://github.com/Valentin-MAROT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:text-violet-700 transition-colors duration-200"
                    onClick={() => trackExternalLink('https://github.com/Valentin-MAROT', 'GitHub Profile')}
                  >
                    github.com/Valentin-MAROT
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/valentin-marot/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:text-violet-700 transition-colors duration-200"
                    onClick={() => trackExternalLink('https://www.linkedin.com/in/valentin-marot/', 'LinkedIn Profile')}
                  >
                    linkedin.com/in/valentin-marot
                  </a>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Pourquoi me contacter ?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Réponse rapide sous 24h
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Consultation gratuite
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Devis personnalisé
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Suivi de projet régulier
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-moi un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors duration-200 resize-none text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="Décrivez votre projet ou votre question..."
                />
              </div>

              {/* Messages de feedback */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <p className="font-medium">✅ Message envoyé avec succès !</p>
                  <p className="text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  <p className="font-medium">❌ Erreur lors de l'envoi</p>
                  <p className="text-sm mt-1">Veuillez réessayer ou me contacter directement par email.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-violet-600 hover:bg-violet-700 transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
