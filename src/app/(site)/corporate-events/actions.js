"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { sendAdminNotification, sendUserConfirmation } from "@/lib/mailer";
import { corporateAdminEmailHtml, corporateUserEmailHtml } from "@/lib/emailTemplates";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitCorporateEnquiry(prevState, formData) {
  const name = formData.get("name")?.toString().trim();
  const mobileNumber = formData.get("mobileNumber")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const location = formData.get("location")?.toString().trim() || null;
  const eventType = formData.get("eventType")?.toString().trim() || null;
  const eventDateRaw = formData.get("eventDate")?.toString().trim();
  const eventDate = eventDateRaw ? new Date(eventDateRaw) : null;

  if (!name) return { error: "Name is required." };
  if (!mobileNumber) return { error: "Phone number is required." };
  if (!email || !isValidEmail(email)) return { error: "A valid email address is required." };

  let enquiry;
  try {
    enquiry = await prisma.corporateEnquiry.create({
      data: { name, mobileNumber, email, location, eventType, eventDate },
    });
  } catch (err) {
    console.error("Failed to save corporate enquiry:", err);
    return { error: "Could not submit your enquiry. Please try again." };
  }

  const data = { name, mobileNumber, email, location, eventType, eventDate, createdAt: enquiry.createdAt };

  await sendAdminNotification({
    subject: "New Corporate Enquiry",
    html: corporateAdminEmailHtml(data),
  });

  await sendUserConfirmation({
    to: email,
    subject: "Thank You for Your Enquiry",
    html: corporateUserEmailHtml(data),
  });

  redirect("/corporate-events-thank-you");
}
