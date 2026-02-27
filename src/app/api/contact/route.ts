import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Format d\'email invalide' }, { status: 400 });
    }
    // Vérifier si la configuration SMTP est disponible
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Configuration SMTP non disponible, simulation d\'envoi...');
      
      // En mode développement, simuler l'envoi d'email
      console.log('=== SIMULATION EMAIL ===');
      console.log('De:', process.env.SMTP_FROM || 'contact@valentin-marot.fr');
      console.log('À:', process.env.CONTACT_EMAIL || 'contact@valentin-marot.fr');
      console.log('Nom:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('========================');
      
      return NextResponse.json({ 
        success: true, 
        message: 'Message reçu ! (Configuration SMTP requise pour l\'envoi réel)',
        messageId: 'simulation-' + Date.now()
      }, { status: 200 });
    }
    
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_SECURE:', process.env.SMTP_SECURE);
    
    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: { rejectUnauthorized: false }
    });

    // Vérifier la connexion SMTP
    await transporter.verify();

    // Configuration de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM,           // Adresse d'expédition valide
      to: process.env.CONTACT_EMAIL,         // Destinataire
      replyTo: `"${name}" <${email}>`,       // Répondre à l'utilisateur
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message :</h3>
            <div style="padding: 15px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 6px; font-size: 12px; color: #6b7280;">
            <p>Ce message a été envoyé depuis le formulaire de contact de valentin-marot.fr</p>
            <p>Date : ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
      text: `Nouveau message de contact\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nEnvoyé depuis valentin-marot.fr le ${new Date().toLocaleString('fr-FR')}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info.messageId);

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
