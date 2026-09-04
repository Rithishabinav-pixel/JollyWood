import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FloatingAnnouncement from "./components/floating-announcement/FloatingAnnouncement";
import DesktopSidebar from "./components/floating-sidebar/DesktopSidebar";
import Header from "./components/header/Header";
import ScrollTop from "./components/ui/ScrollTop";
import Footer from "./components/footer/Footer";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/twz0jrm.css"></link>
      </head>
      <body>
    <Header/>

        <main>
    <FloatingAnnouncement/>
   <DesktopSidebar />
        {children}
        <ScrollTop/>
        </main>
        <Footer/>
        </body>
    </html>
  );
}
