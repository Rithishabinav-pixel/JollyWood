"use client";

import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function MobileMenu({menuActive,setMenuActive}) {
  const [mobile, setMobile] = useState(false);


   const handleMenu = (state) =>{
    setMenuActive(state)
  }

  useEffect(() => {
    const checkDevice = () => {
      setMobile(window.innerWidth <= 1200);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  if (!mobile) return null;

  return <Menu setMenuActive={setMenuActive} menuActive={menuActive} handleMenu={handleMenu} />;
}