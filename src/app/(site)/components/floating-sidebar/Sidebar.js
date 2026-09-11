"use client";

import React, { useState } from "react";
import style from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { title: "Our Story", link: "/our-story" },
  { title: "Corporate Event", link: "#" },
  { title: "Gallery", link: "/gallery" },
  { title: "Careers", link: "/careers" },
  { title: "Reach Us", link: "/contact-us" },
  { title: "Park Map", link: "/park-map" },
  { title: "Visitor Information", link: "/visitors-guide" },
  { title: "Guest Safety", link: "/guest-safety" },
  { title: "Rules & Regulations", link: "/rules-regulations" },
];

const fixedMenuItems = [
  {
    title: "Home",
    link: "/",
    image: "/assets/images/home-f.svg",
  },
  {
    title: "Experience",
    link: "/experience",
    image: "/assets/images/exp-f.svg",
  },
  {
    title: "Memories",
    link: "/memories",
    image: "/assets/images/memory-f.svg",
  },
  {
    title: "Dining",
    link: "/dining",
    image: "/assets/images/dining-f.svg",
  },
  {
    title: "Gallery",
    link: "/gallery",
    image: "/assets/images/studio-f.svg",
  },
  {
    title: "Park Map",
    link: "/park-map",
    image: "/assets/images/resort-f.svg",
  },
];

const socialItems = [
  {
    title: "WhatsApp",
    link: "https://wa.me/917009677009",
    image: "/assets/images/wa.svg",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/velsjollywoodadventures/",
    image: "/assets/images/insta.svg",
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/velsjollywoodadventures/",
    image: "/assets/images/fb.svg",
  },
];

export default function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleMenu = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <aside
      id={style.sidebar}
      className={sidebarActive ? style.active : ""}
    >
      <div className={style.menuLists}>
        <div className={style.menuColumn}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} onClick={(e) => {toggleMenu();}}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav className={style.fixedMenu}>
        <ul className={style.fixedMenu_lists}>
          {fixedMenuItems.map((item, index) => (
            <li className={style.navItems} key={index}>
              <Link href={item.link} onClick={(e) => {setSidebarActive(false);}}>
                <Image
                  src={item.image}
                  width={40}
                  height={40}
                  alt=""
                />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}

          <li
            className={`${style.quickMenu} ${
              sidebarActive ? style.active : ""
            }`}
          >
            <button
              onClick={(e) => {toggleMenu();}}
              aria-label={sidebarActive ? "Close menu" : "Open menu"}
              aria-expanded={sidebarActive}
            >
              {sidebarActive ? (
                <Image
                  src="/assets/images/menu_close.svg"
                  width={32}
                  height={32}
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/images/hamburger.svg"
                  width={32}
                  height={32}
                  alt=""
                />
              )}
            </button>
          </li>
        </ul>

        <ul className={style.socialIcons}>
          {socialItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
              >
                <Image
                  src={item.image}
                  width={48}
                  height={48}
                  alt=""
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}