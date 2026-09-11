"use client";

import React, { useState } from "react";
import style from "./MobileMenu.module.css";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Experience",
    link: "/experience",
    hasChild: true,
    children: [
      {
        title: "Dry Rides",
        link: "/dry-rides",
      },
      {
        title: "Water Rides",
        link: "/water-rides",
      },
      {
        title: "Attractions",
        link: "/attractions",
      },
      {
        title: "Adventures",
        link: "/adventures",
      },
      {
    title: "Live Shows",
    link: "/live-shows",
  },
    ],
  },
  {
    title: "Memories",
    link: "/memories",
  },
  {
    title: "Dining",
    link: "/dining",
  },
  {
    title: "Our Story",
    link: "/our-story",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Blogs",
    link: "/blog",
  },
   
];

export default function Menu({ menuActive, setMenuActive }) {
  const [expMenu, setExpMenu] = useState(false);

  return (
    <>
      {menuActive && <div className={style.mobileMenuOverlay} onClick={() => setMenuActive(false)}></div>}

      <div
        id="mobile-navigation"
        className={`${style.mobileMenu} ${
          menuActive ? style.active : ""
        }`}
      >
        <button
          className={style.closeMenu}
          onClick={() => setMenuActive(false)}
          aria-label="Close navigation menu"
        >
          <Image
            src="/assets/images/close.svg"
            width={24}
            height={24}
            alt=""
          />
        </button>

        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={
                item.hasChild
                  ? `${style.hasChild} ${
                      expMenu ? style.active : ""
                    }`
                  : ""
              }
            >
              <Link href={item.link}  onClick={() => { setMenuActive(false); setExpMenu(false); }}>{item.title}</Link>

              {item.hasChild && (
                <>
                  <button
                    onClick={() => setExpMenu(!expMenu)}
                    aria-label={`${expMenu ? "Collapse" : "Expand"} ${item.title} submenu`}
                    aria-expanded={expMenu}
                    aria-controls={`submenu-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  ></button>

                  <ul
                    id={`submenu-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`${expMenu ? style.active : ""}`}
                  >
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex} >
                        <Link href={child.link} onClick={() => { setMenuActive(false); setExpMenu(false); }}>
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

