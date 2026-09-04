import "./adminGlobals.css";

export const metadata = {
  title: "Admin Dashboard | Vels Jollywood",
};

export default function AdminRootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
