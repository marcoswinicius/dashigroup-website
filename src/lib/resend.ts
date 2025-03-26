import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  additionalDetails?: string;
}) {
  try {
    await resend.emails.send({
      from: 'Dashi Group <no-reply@dashigroup.co.uk>',
      to: ['info@dashigroup.co.uk'],
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        ${data.additionalDetails ? `<p><strong>Additional Details:</strong> ${data.additionalDetails}</p>` : ''}
      `,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 