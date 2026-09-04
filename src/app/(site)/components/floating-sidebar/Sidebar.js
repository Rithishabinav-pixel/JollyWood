"use client"
import React, { useState } from 'react'
import style from "./sidebar.module.css"
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {

    const [sidebarActive,setSidebarActive] = useState(false);

    const toggleMenu = () =>{
        setSidebarActive(!sidebarActive)
    }


  return (
    <aside id={style.sidebar} className={sidebarActive?style.active:""}>

<div className={style.menuLists}>
    <div className={style.menuColumn}>
        <ul>
            <li> <Link href="#">About Us</Link> </li>
            <li> <Link href="#">Corporate Event</Link> </li>
            <li> <Link href="#">Gallery</Link> </li>
            <li> <Link href="#">Careers</Link> </li>
            <li> <Link href="#">Reach Us</Link> </li>
            <li> <Link href="#">360° Virtual Tour</Link> </li>
            <li> <Link href="#">Park Map</Link> </li>
            <li> <Link href="#">Park / Visitor Information</Link> </li>
            <li> <Link href="#">Blog</Link> </li>
        </ul>
    </div>
</div>
        
        <nav className={style.fixedMenu}>
            <ul className={style.fixedMenu_lists}>
                <li className={style.navItems}> <Link href="#"> <Image src="/assets/images/home-f.svg" width={40} height={40} alt=''/> <span>Home</span> </Link> </li>
                <li className={style.navItems}> <Link href="#"> <Image src="/assets/images/exp-f.svg" width={40} height={40} alt=''/> <span>Experience</span> </Link> </li>
                <li className={style.navItems}> <Link href="#"> <Image src="/assets/images/memory-f.svg" width={40} height={40} alt=''/><span>Memories</span> </Link> </li>
                <li className={style.navItems}> <Link href="#"> <Image src="/assets/images/dining-f.svg" width={40} height={40} alt=''/><span>Dining</span> </Link> </li>
                <li className={style.navItems}> <Link href="#"> <Image src="/assets/images/studio-f.svg" width={40} height={40} alt=''/><span>Studios</span> </Link> </li>
                <li className={style.navItems}> <Link href="#"> <Image src="/assets/images/resort-f.svg" width={40} height={40} alt=''/> <span>Resort</span></Link> </li>
                <li className={`${style.quickMenu} ${sidebarActive?style.active:""}`}> <Link href="#">
                {sidebarActive?
                <Image src="/assets/images/menu_close.svg" onClick={toggleMenu} width={32} height={32} alt=''/>
                :
                <Image src="/assets/images/hamburger.svg" onClick={toggleMenu} width={32} height={32} alt=''/>
                }
                </Link> </li>
            </ul>

              <ul className={style.socialIcons}>
        <li> <Link href="#"> <Image src="/assets/images/wa.svg" width={48} height={48} alt=''/> </Link> </li>
        <li> <Link href="#"> <Image src="/assets/images/insta.svg" width={48} height={48} alt=''/> </Link> </li>
        <li> <Link href="#"> <Image src="/assets/images/fb.svg" width={48} height={48} alt=''/> </Link> </li>

    </ul>

        </nav>


  


    </aside>
  )
}
