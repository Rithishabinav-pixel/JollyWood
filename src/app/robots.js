const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jollywood.co.in";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
