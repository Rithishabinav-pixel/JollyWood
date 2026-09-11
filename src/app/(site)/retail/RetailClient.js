"use client"

import React, { useEffect, useState } from 'react'
import style from './Retail.module.css'
import '../innerpage.css'
import Image from 'next/image'

// retail data

const RetailData = [
  {
    image:"/assets/images/aqua-r.png",
    title:"Aqua",
    link:""
  },
    {
    image:"/assets/images/cirkus-k.png",
    title:"Cirkus",
    link:""
  },
   {
    image:"/assets/images/aqua.png",
    title:"Jollylicious",
    link:""
  },

]



export default function RetailClient() {



  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Retail</h1>
    </div>
</section>


{/* retail section  */}
<section className={`common_section no_padding_top ${style.retail_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>Step right up and explore a world of wonder and whimsy as you browse through our delightful collection of themed gifts and souvenirs. Located within the heart of the park, the Circus Shop is the perfect place to find that special memento or unique treasure to commemorate your visit. Immerse yourself in the enchantment of the circus as you enter our vibrant and colorful store. From the moment you walk through the doors, you'll be captivated by the lively atmosphere and the dazzling array of merchandise that awaits you. </p>
      </div>

    </div>

    <div className={style.retailCard}>

        {RetailData.map((slide,index) => (

            <div className={`${style.singleSlide}`} key={index}>
              <div className={style.image}>
                <Image src={slide.image} width={570} height={639} alt={slide.title}/>

              </div>
              <div className={style.content}>
                <h3 className={`${style.title} white`}>{slide.title}</h3>
                {/* <Button href={slide.link} text="" className="link white large"></Button> */}
              </div>
            </div>

        ))}

    </div>

</div>




</section>


    </>
  )
}
