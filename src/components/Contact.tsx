'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import EmailLink from './EmailLink';
import Parallax from './Parallax';
import posthog from '@/lib/posthogClient';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const links = [
    { icon: Github, label: 'GitHub', value: 'github.com/Valentin-MAROT', href: 'https://github.com/Valentin-MAROT' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/valentin-marot', href: 'https://www.linkedin.com/in/valentin-marot/' },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax speed={0.10}>
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-amber-400 mb-4">
              05 — Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Une idée, un besoin technique, une question ? Écrivez-moi, je réponds
              sous 24 h.
            </p>
          </div>
        </Parallax>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Coordonnées */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e] p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wide mb-0.5">Email</p>
                <EmailLink />
              </div>
            </div>

            <div className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 hover:border-zinc-700 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                    <div>
                      <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wide">{link.label}</p>
                      <p className="text-sm text-zinc-300">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <ul className="grid grid-cols-2 gap-2 font-mono text-xs text-zinc-500">
                {['Réponse sous 24 h', 'Devis gratuit', 'Échange sans engagement', 'Suivi régulier'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e] p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-zinc-500 uppercase tracking-wide mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs text-zinc-500 uppercase tracking-wide mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-zinc-500 uppercase tracking-wide mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none resize-none"
                  placeholder="Décrivez votre projet ou votre question…"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm">
                  Message envoyé. Je vous réponds au plus vite.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  Erreur lors de l&apos;envoi. Réessayez ou écrivez-moi directement par email.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'bg-amber-500 text-zinc-950 hover:bg-amber-400'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-zinc-600 border-t-transparent rounded-full animate-spin" />
                    Envoi…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
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
