import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FloatingAnnouncement from "./components/floating-announcement/FloatingAnnouncement";
import DesktopSidebar from "./components/floating-sidebar/DesktopSidebar";
import Header from "./components/header/Header";
import ScrollTop from "./components/ui/ScrollTop";
import Footer from "./components/footer/Footer";
import SmoothScroll from "./components/lenis/SmoothScroll";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import HeaderWrapper from "./components/header/HeaderWrapper";
import AOSInit from "./components/aos/AOSInit";
import FloatingTicket from "./components/floating-ticket/FloatingTicket";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jollywood.co.in";

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Vels Jollywood",
    default: "Vels Jollywood | Theme Park, Water Park & Resort",
  },
  description:
    "Vels Jollywood is a theme park, water park and resort in Bidadi offering rides, attractions, dining and entertainment for the whole family.",
  openGraph: {
    siteName: "Vels Jollywood",
    type: "website",
  },
};

export default function RootLayout({ children }) {



  return (
    <>
    <SmoothScroll/>
    <AOSInit/>
<HeaderWrapper />
{/* <FloatingTicket/> */}
        <main>
    <FloatingAnnouncement/>
   <DesktopSidebar />

        {children}
        <ScrollTop/>
        </main>
        <Footer/>
    </>
  );
}
