import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {


    const [mobile,setMobile] = useState(false);
  
   
  
    useEffect(()=>{
  
      const checkDevice = () => { setMobile(window.innerWidth <= 1200); };
  
    
      checkDevice();
      console.log(mobile)
  
     window.addEventListener("resize", checkDevice);
  
      return () => {
        window.addEventListener("resize", checkDevice);
        };
  
    },[])


  return (
<header id={style.header}>

<div className={`container ${style.container}`}>

  


<Link className={style.logo} href="#">
<Image src="/assets/images/logo.svg" width={151} height={99} alt='Jollywood Logo'/>
</Link>

{mobile && 
  <button className={style.mobile_menu_btn}>
<Image src="/assets/images/hamburger.svg" width={24} height={24} alt=''/>
    </button>
    }

</div>


</header>
  )
}
