"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const ExperienceMenu = [
  {
    label:"",
    slug:""
  },
  {
    label:"Attractions",
    slug:"experience/attractions"
  },
  {
    label:"Dry Rides",
    slug:"experience/dry-rides"
  },
   {
    label:"Water Rides",
    slug:"experience/water-rides"
  },
   {
    label:"Adventures",
    slug:"experience/adventures"
  },  
  {
    label:"Live Shows",
    slug:"experience/live-shows"
  },
]

export default function Header({setMenuActive, menuActive}) {

    const pathname = usePathname()


    const [mobile,setMobile] = useState(false);

    const headerRef = useRef(null)
  
   
  
    useEffect(()=>{
  
      const checkDevice = () => { setMobile(window.innerWidth <= 1200); };

     let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;


  if (currentScrollY < lastScrollY && currentScrollY > 100) {
    headerRef.current.classList.add(`${style.active}`);
  } else {
    headerRef.current.classList.remove(`${style.active}`);
  }

  lastScrollY = currentScrollY;
};

window.addEventListener("scroll", handleScroll);

      checkDevice();

     window.addEventListener("resize", checkDevice);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkDevice);
        };
  
    },[])


  return (
<header id={style.header} ref={headerRef}>

<div className={`container ${style.container}`}>

{
  pathname.includes('/experience') && !mobile &&


  <ul className={style.menus}>
  {ExperienceMenu.slice(0,3).map((menu,index)=>(
    <React.Fragment key={index}>
      <li> <Link href={`/${menu.slug}`}>{menu.label}</Link> </li>
    </React.Fragment>
  ))}
  </ul>

  }

<div className={style.logo}>
<Link className={style.logoLink} href="/">
<Image src="/assets/images/logo.svg" width={151} height={99} alt='Jollywood Logo'/>
</Link>
</div>

{
   pathname.includes('/experience') && !mobile &&
  <ul className={style.menus}>
  {ExperienceMenu.slice(3,6).map((menu,index)=>(
    <React.Fragment key={index}>
      <li> <Link href={`/${menu.slug}`}>{menu.label}</Link> </li>
    </React.Fragment>
  ))}
  </ul>
}

{mobile &&
  <button
    className={style.mobile_menu_btn}
    onClick={()=>setMenuActive(true)}
    aria-label="Open navigation menu"
    aria-expanded={!!menuActive}
    aria-controls="mobile-navigation"
  >
<Image src="/assets/images/hamburger.svg" width={24} height={24} alt=''/>
    </button>
    }

</div>


</header>
  )
}
