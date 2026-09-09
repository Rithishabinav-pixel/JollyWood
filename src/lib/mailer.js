import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
  }
  return transporter;
}

function getAdminRecipients() {
  const raw = process.env.TO_EMAIL;
  if (!raw) {
    return process.env.ADMIN_EMAIL ? [process.env.ADMIN_EMAIL] : [];
  }

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.filter(Boolean);
  } catch {
    // not JSON, fall through to comma-splitting
  }

  return raw
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function sendAdminNotification({ subject, html }) {
  const to = getAdminRecipients();
  if (to.length === 0) return { sent: false };

  try {
    await getTransporter().sendMail({
      from: `"Vels Jollywood" <${process.env.ADMIN_EMAIL}>`,
      to,
      subject,
      html,
    });
    return { sent: true };
  } catch (err) {
    console.error("Failed to send admin notification email:", err);
    return { sent: false };
  }
}

export async function sendUserConfirmation({ to, subject, html }) {
  if (!to) return { sent: false };

  try {
    await getTransporter().sendMail({
      from: `"Vels Jollywood" <${process.env.ADMIN_EMAIL}>`,
      to,
      subject,
      html,
    });
    return { sent: true };
  } catch (err) {
    console.error("Failed to send user confirmation email:", err);
    return { sent: false };
  }
}
