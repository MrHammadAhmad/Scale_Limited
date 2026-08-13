import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@scalelimited.com';
const FROM_EMAIL = 'notifications@scalelimited.com'; // Requires verified domain in Resend

export async function sendLeadNotification(lead: any) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set. Skipping email notification.");
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: `Scale Limited <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      subject: 'New Scale Limited Website Inquiry',
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${lead.first_name} ${lead.last_name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${lead.company || 'N/A'}</p>
        <p><strong>Country:</strong> ${lead.country || 'N/A'}</p>
        <p><strong>Service:</strong> ${lead.service || 'N/A'}</p>
        <p><strong>Company Size:</strong> ${lead.company_size || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${lead.message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send lead notification", error);
    return { success: false, error };
  }
}

export async function sendConsultationNotification(consultation: any) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set. Skipping email notification.");
    return { success: true };
  }

  try {
    // Notify Admin
    await resend.emails.send({
      from: `Scale Limited <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      subject: 'New Consultation Request - Scale Limited',
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${consultation.name}</p>
        <p><strong>Company:</strong> ${consultation.company}</p>
        <p><strong>Email:</strong> ${consultation.email}</p>
        <p><strong>Phone:</strong> ${consultation.phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${consultation.service}</p>
        <p><strong>Preferred Date:</strong> ${consultation.preferred_date || 'N/A'}</p>
        <p><strong>Preferred Time:</strong> ${consultation.preferred_time || 'N/A'}</p>
        <p><strong>Timezone:</strong> ${consultation.timezone || 'N/A'}</p>
        <p><strong>Budget Range:</strong> ${consultation.budget_range || 'N/A'}</p>
        <p><strong>Requirements:</strong></p>
        <p>${consultation.requirements}</p>
        <p><strong>Notes:</strong></p>
        <p>${consultation.notes || 'N/A'}</p>
      `,
    });

    // Send confirmation to prospect
    if (consultation.email) {
      await resend.emails.send({
        from: `Scale Limited <${FROM_EMAIL}>`,
        to: [consultation.email],
        subject: 'Thank you for contacting Scale Limited',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Thank You for Reaching Out!</h2>
            <p>Hi ${consultation.name},</p>
            <p>Thank you for requesting a consultation with Scale Limited. We have received your request and our team is currently reviewing your requirements.</p>
            <p>One of our experts will be in touch with you shortly to confirm the details and schedule our meeting.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The Scale Limited Team</strong></p>
          </div>
        `,
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send consultation emails", error);
    return { success: false, error };
  }
}
