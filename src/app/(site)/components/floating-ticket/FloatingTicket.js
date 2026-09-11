"use client";

import React, { useEffect, useState } from "react";
import style from "./FloatingTicket.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FloatingTicket() {
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isHomePage = pathname === "/";

      const scrollThreshold = isHomePage
        ? window.innerHeight
        : 39;

      setActive(window.scrollY > scrollThreshold);

      setVisible(
        isHomePage
          ? window.scrollY > window.innerHeight
          : true
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      {visible && (
        <a
          href="#"
          target="_blank"
          className={`${style.floating_ticket} ${
            active ? style.active : ""
          }`}
        >
          <Image
            src="/assets/images/floating-ticket.svg"
            width={86}
            height={78}
            alt=""
          />
        </a>
      )}
    </>
  );
}