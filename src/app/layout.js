
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       <link rel="preconnect" href="https://use.typekit.net" />
       <link rel="preload" as="image" href="/assets/images/banner-poster.webp" fetchPriority="high"/>
       <link rel="stylesheet" href="https://use.typekit.net/twz0jrm.css"/>
      </head>

      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}