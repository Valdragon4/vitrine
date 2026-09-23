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
    { icon: Github, label: 'GitHub', value: 'github.com/Valdragon4', href: 'https://github.com/Valdragon4' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/valentin-marot', href: 'https://www.linkedin.com/in/valentin-marot/' },
  ];

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.10}>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight text-balance">
              Parlons de votre projet
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              Une idée, un besoin technique, une question ? Écrivez-moi : je réponds
              sous 24 h, avec un périmètre et un prix.
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
                <p className="text-[11px] text-zinc-400 uppercase tracking-[0.14em] mb-0.5">Email</p>
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
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                    <div>
                      <p className="text-[11px] text-zinc-400 uppercase tracking-[0.14em]">{link.label}</p>
                      <p className="text-sm text-zinc-300">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] text-zinc-400">
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
                <label htmlFor="name" className="block text-xs text-zinc-400 uppercase tracking-[0.14em] mb-2">
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
                <label htmlFor="email" className="block text-xs text-zinc-400 uppercase tracking-[0.14em] mb-2">
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
                <label htmlFor="message" className="block text-xs text-zinc-400 uppercase tracking-[0.14em] mb-2">
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
                <div role="status" aria-live="polite" className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm">
                  Message envoyé. Je vous réponds au plus vite.
                </div>
              )}
              {submitStatus === 'error' && (
                <div role="alert" aria-live="assertive" className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  Erreur lors de l&apos;envoi. Réessayez ou écrivez-moi directement par email.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full min-h-[48px] py-3 px-6 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed'
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

              {/* Mention RGPD */}
              <p className="text-xs text-zinc-400 leading-relaxed max-w-[30rem]">
                Les informations envoyées via ce formulaire servent uniquement à
                répondre à votre demande. Elles ne sont ni conservées à d&apos;autres
                fins, ni transmises à des tiers —{' '}
                <a
                  href="/politique-confidentialite"
                  className="underline decoration-zinc-700 underline-offset-2 hover:text-zinc-300 transition-colors"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
