const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jollywood.co.in";

const PUBLIC_ROUTES = [
  "",
  "/experience",
  "/dining",
  "/experience/dry-rides",
  "/experience/water-rides",
  "/experience/attractions",
  "/experience/adventures",
  "/memories",
  "/gallery",
  "/our-story",
  "/blog",
  "/careers",
  "/contact-us",
  "/corporate-events",
  "/visitors-guide",
  "/guest-safety",
  "/rules-regulations",
  "/park-map",
  "/experience/live-shows",
  "/faq",
  "/privacy-policy",
  "/retail",
  "/terms-of-use",
];

export default function sitemap() {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
