"use client";

import { useState } from "react";
import Header from "./Header";
import MobileMenu from "../mobile-menu/MobileMenu";


export default function HeaderWrapper() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Header setMenuActive={setMenuActive} menuActive={menuActive}/>

      <MobileMenu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
    </>
  );
}