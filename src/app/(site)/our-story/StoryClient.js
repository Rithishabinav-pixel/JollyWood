"use client"

import React, { useEffect, useState } from 'react'
import style from './Story.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'




export default function StoryClient() {

  
   const [mobile,setMobile] = useState(false);
        
        
          useEffect(()=>{
        
            const checkDevice = () => { setMobile(window.innerWidth <= 1200); };
        
        
            checkDevice();
        
           window.addEventListener("resize", checkDevice);
        
            return () => {
              window.addEventListener("resize", checkDevice);
              };
        
          },[])


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Our Story</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.hut_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <h2 className='common_heading white'>Hut in Beach</h2>
        <p className='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    </div>

  <div className={style.hutImage}>
    <Image src="/assets/images/our-story.png" width={1420} height={578} alt=''/>
  </div>

</div>




</section>


    </>
  )
}
