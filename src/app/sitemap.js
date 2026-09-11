const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jollywood.co.in";

const PUBLIC_ROUTES = [
  "",
  "/experience",
  "/dining",
  "/dry-rides",
  "/water-rides",
  "/attractions",
  "/adventures",
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
  "/live-shows",
];

export default function sitemap() {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
