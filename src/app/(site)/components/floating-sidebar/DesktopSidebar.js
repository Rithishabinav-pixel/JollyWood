"use client"

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function DesktopSidebar() {

  const [desktop,setDesktop] = useState(false);



  useEffect(()=>{

    const checkDevice = () => { setDesktop(window.innerWidth >= 1200); };


    checkDevice();

   window.addEventListener("resize", checkDevice);

    return () => {
      window.addEventListener("resize", checkDevice);
      };

  },[])

  return desktop ? <Sidebar /> : null;
}
