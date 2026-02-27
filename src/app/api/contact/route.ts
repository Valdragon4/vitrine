import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Content-Type attendu: application/json' }, { status: 415 });
    }

    const origin = request.headers.get('origin');
    if (origin && !['https://valentin-marot.fr', 'https://www.valentin-marot.fr', 'http://localhost:3002', 'http://localhost:3000'].includes(origin)) {
      return NextResponse.json({ error: 'Origine non autorisée' }, { status: 403 });
    }

    const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;
    const timestamps = (rateLimitStore.get(ip) || []).filter((t) => t > windowStart);
    if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json({ error: 'Trop de requêtes, réessayez plus tard.' }, { status: 429 });
    }
    timestamps.push(now);
    rateLimitStore.set(ip, timestamps);

    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json({ error: 'Nom invalide' }, { status: 400 });
    }
    if (trimmedEmail.length < 3 || trimmedEmail.length > 254) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }
    if (trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
      return NextResponse.json({ error: 'Message invalide' }, { status: 400 });
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: 'Format d\'email invalide' }, { status: 400 });
    }
    // Vérifier si la configuration SMTP est disponible
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ 
        success: true, 
        message: 'Message reçu ! (Configuration SMTP requise pour l\'envoi réel)',
        messageId: 'simulation-' + Date.now()
      }, { status: 200 });
    }
    
    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Vérifier la connexion SMTP
    await transporter.verify();

    const safeNameForHeader = trimmedName.replace(/[\r\n]+/g, ' ').slice(0, 100);
    const safeNameHtml = escapeHtml(trimmedName);
    const safeEmailHtml = escapeHtml(trimmedEmail);
    const safeMessageHtml = escapeHtml(trimmedMessage);

    // Configuration de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM,           // Adresse d'expédition valide
      to: process.env.CONTACT_EMAIL,         // Destinataire
      replyTo: `"${safeNameForHeader}" <${trimmedEmail}>`,       // Répondre à l'utilisateur
      subject: `Nouveau message de contact - ${safeNameForHeader}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p><strong>Nom :</strong> ${safeNameHtml}</p>
            <p><strong>Email :</strong> <a href="mailto:${safeEmailHtml}">${safeEmailHtml}</a></p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message :</h3>
            <div style="padding: 15px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; white-space: pre-wrap;">
              ${safeMessageHtml}
            </div>
          </div>
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 6px; font-size: 12px; color: #6b7280;">
            <p>Ce message a été envoyé depuis le formulaire de contact de valentin-marot.fr</p>
            <p>Date : ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
      text: `Nouveau message de contact\n\nNom: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}\n\n---\nEnvoyé depuis valentin-marot.fr le ${new Date().toLocaleString('fr-FR')}`
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès !', messageId: info.messageId }, { status: 200 });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
