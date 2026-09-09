"use server";

import { prisma } from "@/lib/prisma";
import { sendAdminNotification, sendUserConfirmation } from "@/lib/mailer";
import { contactAdminEmailHtml, contactUserEmailHtml } from "@/lib/emailTemplates";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactEnquiry(prevState, formData) {
  const firstName = formData.get("firstName")?.toString().trim();
  const lastName = formData.get("lastName")?.toString().trim();
  const mobileNumber = formData.get("mobileNumber")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim() || "";

  if (!firstName) return { error: "First name is required." };
  if (!lastName) return { error: "Last name is required." };
  if (!mobileNumber) return { error: "Mobile number is required." };
  if (!email || !isValidEmail(email)) return { error: "A valid email address is required." };

  let enquiry;
  try {
    enquiry = await prisma.contactEnquiry.create({
      data: { firstName, lastName, mobileNumber, email, message },
    });
  } catch (err) {
    console.error("Failed to save contact enquiry:", err);
    return { error: "Could not submit your enquiry. Please try again." };
  }

  const data = { firstName, lastName, mobileNumber, email, message, createdAt: enquiry.createdAt };

  await sendAdminNotification({
    subject: "New Contact Enquiry",
    html: contactAdminEmailHtml(data),
  });

  await sendUserConfirmation({
    to: email,
    subject: "Thank You for Contacting Us",
    html: contactUserEmailHtml(data),
  });

  return { success: true };
}
