"use client";

import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader";
import SmoothScroll from "./components/lenis/SmoothScroll";
import HeaderWrapper from "./components/header/HeaderWrapper";
import FloatingTicket from "./components/floating-ticket/FloatingTicket";
import DesktopSidebar from "./components/floating-sidebar/DesktopSidebar";
import ScrollTop from "./components/ui/ScrollTop";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";

export default function HomeComponent({ children, announcement }) {
  const [loader, setLoader] = useState(true);

   const pathname = usePathname();


  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 10000);


    return () => clearTimeout(timeout);
  }, []);

  if (loader && pathname==='/') {
    return <Loader />;
  }

  return (
    <>
      <SmoothScroll />
      <HeaderWrapper />
      <FloatingTicket />

      <main>
        {announcement}
        <DesktopSidebar />
        {children}
        <ScrollTop />
      </main>

      <Footer />
    </>
  );
}