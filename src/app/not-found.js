
import "./(site)/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FloatingAnnouncement from "./(site)/components/floating-announcement/FloatingAnnouncement";
import DesktopSidebar from "./(site)/components/floating-sidebar/DesktopSidebar";
import ScrollTop from "./(site)/components/ui/ScrollTop";
import Footer from "./(site)/components/footer/Footer";
import SmoothScroll from "./(site)/components/lenis/SmoothScroll";
import HeaderWrapper from "./(site)/components/header/HeaderWrapper";
import AOSInit from "./(site)/components/aos/AOSInit";
import NotFoundContent from "./(site)/components/ui/NotFoundContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jollywood.co.in";

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Page Not Found | Vels Jollywood",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <>


    <SmoothScroll/>
    <AOSInit/>
<HeaderWrapper />

        <main>
    <FloatingAnnouncement/>
   <DesktopSidebar />

        <NotFoundContent/>
        <ScrollTop/>
        </main>
        <Footer/>
       </>
  );
}
