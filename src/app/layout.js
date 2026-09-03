"use client"

import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FloatingAnnouncement from "./components/floating-announcement/FloatingAnnouncement";
import Sidebar from "./components/floating-sidebar/Sidebar";
import Header from "./components/header/Header";
import ScrollTop from "./components/ui/ScrollTop";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";




export default function RootLayout({ children }) {


  const [desktop,setDesktop] = useState(false);

 

  useEffect(()=>{

    const checkDevice = () => { setDesktop(window.innerWidth >= 1200); };

  
    checkDevice();
    console.log(desktop)

   window.addEventListener("resize", checkDevice);

    return () => {
      window.addEventListener("resize", checkDevice);
      };

  },[])

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/twz0jrm.css"></link>
      </head>
      <body>
    <Header/>

        <main>
    <FloatingAnnouncement/>
   {desktop && <Sidebar />}
        {children}
        <ScrollTop/>
        </main>
        <Footer/>
        </body>
    </html>
  );
}
