'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import EmailLink from './EmailLink';
import posthog from '@/lib/posthogClient';

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
        posthog.capture('contact_form_submitted');
      } else {
        setSubmitStatus('error');
        console.error('Erreur:', data.error);
        posthog.capture('contact_form_error', { status: response.status, error: data?.error });
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur réseau:', error);
      posthog.capture('contact_form_error', { error: 'network_error' });
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
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Un projet en tête ? Une question ? N&apos;hésitez pas à me contacter via ce formulaire ou directement par email.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-50 mb-6">
                Mes coordonnées
              </h3>
              <p className="text-slate-300 mb-8">
                Je suis disponible pour discuter de vos projets et répondre à vos questions. N&apos;hésitez pas à me contacter.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-sky-500/40">
                  <Mail className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-50">Email</h4>
                  <EmailLink />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-sky-500/40">
                  <Github className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-50">GitHub</h4>
                  <a 
                    href="https://github.com/Valentin-MAROT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
                  >
                    github.com/Valentin-MAROT
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-sky-500/40">
                  <Linkedin className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-50">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/valentin-marot/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
                  >
                    linkedin.com/in/valentin-marot
                  </a>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-slate-900/80 rounded-2xl p-6 shadow-sm border border-slate-700/80">
              <h4 className="font-semibold text-slate-50 mb-4">Pourquoi me contacter ?</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3" />
                  Réponse rapide sous 24h
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3" />
                  Consultation gratuite
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3" />
                  Devis personnalisé
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-3" />
                  Suivi de projet régulier
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-slate-900/80 rounded-2xl shadow-lg p-8 border border-slate-700/80">
            <h3 className="text-2xl font-bold text-slate-50 mb-6">
              Envoyez-moi un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-colors duration-200 text-slate-100 placeholder-slate-500 bg-slate-800"
                  placeholder="Votre nom"
                  style={{ backgroundColor: '#1e293b' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-colors duration-200 text-slate-100 placeholder-slate-500 bg-slate-800"
                  placeholder="votre@email.com"
                  style={{ backgroundColor: '#1e293b' }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-colors duration-200 resize-none text-slate-100 placeholder-slate-500 bg-slate-800"
                  placeholder="Décrivez votre projet ou votre question..."
                  style={{ backgroundColor: '#1e293b' }}
                />
              </div>

              {/* Messages de feedback */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-900/40 border border-emerald-500/60 rounded-lg text-emerald-200 text-sm">
                  <p className="font-medium">✅ Message envoyé avec succès !</p>
                  <p className="text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/40 border border-red-500/60 rounded-lg text-red-100 text-sm">
                  <p className="font-medium">❌ Erreur lors de l'envoi</p>
                  <p className="text-sm mt-1">Veuillez réessayer ou me contacter directement par email.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-slate-700 cursor-not-allowed'
                    : 'bg-sky-500 hover:bg-sky-400 transform hover:scale-105'
                } text-slate-950`}
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
