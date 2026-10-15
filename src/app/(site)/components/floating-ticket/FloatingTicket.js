
"use client";

import React, { useEffect, useState } from "react";
import style from "./FloatingTicket.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FloatingTicket() {
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setMobile(window.innerWidth < 1200);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isHomePage = pathname === "/";
      const isMobile = window.innerWidth < 1200;
      const scrollY = window.scrollY;
      const scrollThreshold = isHomePage && !isMobile
        ? window.innerHeight
        : 39;

      setActive(scrollY > scrollThreshold);

      if (isHomePage && isMobile) {
        setVisible(true);
      } else if (isHomePage) {
        setVisible(scrollY > window.innerHeight);
      } else {
        setVisible(true);
      }
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
          href="https://booknow.jollywood.co.in/package/main"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book Tickets"
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
