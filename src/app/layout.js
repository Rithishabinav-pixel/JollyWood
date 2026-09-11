
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/twz0jrm.css"
        />
      </head>

      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}