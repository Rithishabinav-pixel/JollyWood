"use client"

import React, { useEffect, useState } from 'react'
import style from './LiveShows.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'


// Adventures data 
const AdventuresData = [
  {
    image:"/assets/images/high-ropes-course.png",
    title:"Live Show 1",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time:"06:00 PM"
  },
  {
    image:"/assets/images/high-ropes-course.png",
    title:"Live Show 1",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time:"06:00 PM"
  },
  {
    image:"/assets/images/high-ropes-course.png",
    title:"Live Show 1",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time:"06:00 PM"
  },
  {
    image:"/assets/images/high-ropes-course.png",
    title:"Live Show 1",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    time:"06:00 PM"
  },
 
]



const ruleIcons = {
  ageAllowed: "/assets/images/age-allowed.svg",
  height: "/assets/images/height.svg",
  weight: "/assets/images/weight.svg",
};


export default function LiveShowsClient() {


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Live Shows</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.adventure_section}`}>

<div className={`container section_container ${style.container}`}>

<div className={style.cards}>
{AdventuresData && AdventuresData.map((item,index)=>(


<div className={style.card} key={index}>
  <div className={style.image}>
    <Image src={item.image} width={720} height={535} alt=''/>
  </div>
  <div className={style.content}>
    <h2 className="">{item.title}</h2>
    <p>{item.content}</p>
  <h3>Show Timing</h3>
   <div className={style.time}> <Image src="/assets/images/time.svg" width={24} height={24} alt=''/> {item.time}</div>

  </div>
</div>
))}
</div>


</div>




</section>


    </>
  )
}
