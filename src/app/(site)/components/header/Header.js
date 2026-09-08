"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ExperienceMenu = [
  {
    label:"Attractions",
    slug:"attractions"
  },
  {
    label:"Dry Rides",
    slug:"dry-rides"
  },
   {
    label:"Water Rides",
    slug:"water-rides"
  },
   {
    label:"Adventures",
    slug:"adventures"
  },
]

export default function Header() {


    const [mobile,setMobile] = useState(false);

    const headerRef = useRef(null)
  
   
  
    useEffect(()=>{
  
      const checkDevice = () => { setMobile(window.innerWidth <= 1200); };

     let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Check if user is scrolling up (current is less than last) and past 100px
  if (currentScrollY < lastScrollY && currentScrollY > 100) {
    headerRef.current.classList.add(`${style.active}`);
  } else {
    headerRef.current.classList.remove(`${style.active}`);
  }

  // Update the last position for the next scroll event
  lastScrollY = currentScrollY;
});
    
      checkDevice();
  
     window.addEventListener("resize", checkDevice);
  
      return () => {
        window.addEventListener("resize", checkDevice);
        };
  
    },[])


  return (
<header id={style.header} ref={headerRef}>

<div className={`container ${style.container}`}>

  <ul className={style.menus}>
  {ExperienceMenu.slice(0,2).map((menu,index)=>(
    <React.Fragment key={index}>
      <li> <Link href={`/${menu.slug}`}>{menu.label}</Link> </li>
    </React.Fragment>
  ))}
  </ul>

<div className={style.logo}>
<Link className={style.logoLink} href="#">
<Image src="/assets/images/logo.svg" width={151} height={99} alt='Jollywood Logo'/>
</Link>
</div>

  <ul className={style.menus}>
  {ExperienceMenu.slice(2,4).map((menu,index)=>(
    <React.Fragment key={index}>
      <li> <Link href={`/${menu.slug}`}>{menu.label}</Link> </li>
    </React.Fragment>
  ))}
  </ul>

{mobile && 
  <button className={style.mobile_menu_btn}>
<Image src="/assets/images/hamburger.svg" width={24} height={24} alt=''/>
    </button>
    }

</div>


</header>
  )
}
