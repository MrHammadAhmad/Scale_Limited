import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");
const contactEmail = process.env.CONTACT_EMAIL || "info@scalelimited.com";

export async function sendLeadNotification(data: any) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Mock email sent for lead:", data);
    return;
  }

  try {
    await resend.emails.send({
      from: "notifications@scalelimited.com",
      to: [contactEmail],
      subject: `New Lead: ${data.first_name} ${data.last_name}`,
      text: `
New lead received:
Name: ${data.first_name} ${data.last_name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Company: ${data.company || "N/A"}
Service: ${data.service || "N/A"}
Message:
${data.message}
      `,
    });
  } catch (error) {
    console.error("Error sending lead notification email:", error);
  }
}

export async function sendConsultationNotification(data: any) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Mock email sent for consultation:", data);
    return;
  }

  try {
    await resend.emails.send({
      from: "notifications@scalelimited.com",
      to: [contactEmail],
      subject: `New Consultation Request: ${data.name}`,
      text: `
New consultation request received:
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Service: ${data.service}
Message:
${data.requirements}
      `,
    });
  } catch (error) {
    console.error("Error sending consultation notification email:", error);
  }
}
