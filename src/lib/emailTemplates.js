const BRAND = {
  accent: "#351338",
  yellow: "#FBC616",
  orange: "#FFA100",
  darkOrange: "#FF7E0D",
  white: "#ffffff",
  textMuted: "#6b7280",
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value) {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jollywood.co.in").replace(/\/$/, "");
}

function getLogoUrl() {
  return `${getSiteUrl()}/assets/images/logo.svg`;
}

function formatDate(date) {
  return new Date(date).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function shell({ heading, bodyHtml }) {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f0f4;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f0f4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:${BRAND.white};border-radius:12px;overflow:hidden;">
            <tr>
              <td align="center" style="background-color:${BRAND.accent};padding:28px 24px;">
                <img src="${getLogoUrl()}" width="110" height="72" alt="Vels Jollywood" style="display:block;border:0;outline:none;text-decoration:none;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px;">
                <h1 style="margin:0 0 20px;font-size:22px;line-height:28px;color:${BRAND.accent};">${escapeHtml(heading)}</h1>
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;">
                <hr style="border:none;border-top:1px solid #eeeeee;margin:0 0 20px;" />
                <p style="margin:0 0 4px;font-size:13px;line-height:20px;color:${BRAND.textMuted};">Vels Studios &amp; Entertainment Pvt Ltd</p>
                <p style="margin:0;font-size:13px;line-height:20px;color:${BRAND.textMuted};">Plot No 24 &amp; 26, Bidadi Industrial Area, Ramanagara District, Bidadi - 562 109.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function detailsTable(rows) {
  const rowsHtml = rows
    .filter((row) => row.value !== undefined && row.value !== null && row.value !== "")
    .map(
      (row) => `
              <tr>
                <td style="padding:10px 12px;background-color:#f7f5f8;font-size:13px;font-weight:bold;color:${BRAND.accent};border-bottom:1px solid #eeeeee;width:160px;vertical-align:top;">${escapeHtml(row.label)}</td>
                <td style="padding:10px 12px;font-size:14px;color:#111827;border-bottom:1px solid #eeeeee;vertical-align:top;">${row.rawHtml ? row.rawHtml : escapeHtml(row.value)}</td>
              </tr>`
    )
    .join("");

  return `
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eeeeee;border-radius:8px;overflow:hidden;margin:16px 0 8px;">
              ${rowsHtml}
            </table>`;
}

// --- Contact Enquiry ---

export function contactAdminEmailHtml(data) {
  const bodyHtml = `
                <p style="margin:0 0 16px;font-size:15px;line-height:22px;color:#374151;">A new contact enquiry has been submitted on the website.</p>
                ${detailsTable([
                  { label: "Name", value: `${data.firstName} ${data.lastName}` },
                  { label: "Email", value: data.email },
                  { label: "Phone", value: data.mobileNumber },
                  { label: "Message", rawHtml: nl2br(data.message || "—") },
                  { label: "Submitted", value: formatDate(data.createdAt) },
                ])}`;

  return shell({ heading: "New Contact Enquiry", bodyHtml });
}

export function contactUserEmailHtml(data) {
  const bodyHtml = `
                <p style="margin:0 0 16px;font-size:15px;line-height:22px;color:#374151;">Hello ${escapeHtml(data.firstName)},</p>
                <p style="margin:0 0 16px;font-size:15px;line-height:22px;color:#374151;">Thank you for contacting us. We have successfully received your enquiry. Our team will review your message and get back to you as soon as possible.</p>
                <p style="margin:0 0 4px;font-size:14px;font-weight:bold;color:${BRAND.accent};">Your enquiry details</p>
                ${detailsTable([
                  { label: "Name", value: `${data.firstName} ${data.lastName}` },
                  { label: "Email", value: data.email },
                  { label: "Phone", value: data.mobileNumber },
                  { label: "Message", rawHtml: nl2br(data.message || "—") },
                ])}
                <p style="margin:20px 0 0;font-size:15px;line-height:22px;color:#374151;">Thank you,<br/>Vels Jollywood</p>`;

  return shell({ heading: "Thank You for Contacting Us", bodyHtml });
}

// --- Career Enquiry ---

export function careerAdminEmailHtml(data) {
  const bodyHtml = `
                <p style="margin:0 0 16px;font-size:15px;line-height:22px;color:#374151;">A new career enquiry/application has been submitted on the website.</p>
                ${detailsTable([
                  { label: "Name", value: `${data.firstName} ${data.lastName}` },
                  { label: "Email", value: data.email },
                  { label: "Phone", value: data.mobileNumber },
                  { label: "Current Designation", value: data.currentDesignation },
                  { label: "Relevant Experience", value: data.relevantExperience },
                  { label: "Cover Letter", rawHtml: data.coverLetter ? nl2br(data.coverLetter) : undefined },
                  {
                    label: "Resume",
                    rawHtml: data.resumeUrl ? `<a href="${escapeHtml(data.resumeUrl)}" style="color:${BRAND.darkOrange};">Download resume</a>` : undefined,
                  },
                  { label: "Submitted", value: formatDate(data.createdAt) },
                ])}`;

  return shell({ heading: "New Career Enquiry", bodyHtml });
}

export function careerUserEmailHtml(data) {
  const bodyHtml = `
                <p style="margin:0 0 16px;font-size:15px;line-height:22px;color:#374151;">Hello ${escapeHtml(data.firstName)},</p>
                <p style="margin:0 0 16px;font-size:15px;line-height:22px;color:#374151;">Thank you for your interest in joining our team. We have successfully received your application. Our team will review your details and contact you if your profile matches an opportunity.</p>
                <p style="margin:0 0 4px;font-size:14px;font-weight:bold;color:${BRAND.accent};">Your application details</p>
                ${detailsTable([
                  { label: "Name", value: `${data.firstName} ${data.lastName}` },
                  { label: "Email", value: data.email },
                  { label: "Phone", value: data.mobileNumber },
                  { label: "Current Designation", value: data.currentDesignation },
                  { label: "Relevant Experience", value: data.relevantExperience },
                ])}
                <p style="margin:20px 0 0;font-size:15px;line-height:22px;color:#374151;">Thank you,<br/>Vels Jollywood</p>`;

  return shell({ heading: "Thank You for Your Application", bodyHtml });
}
