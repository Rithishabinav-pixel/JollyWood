"use client"

import React, { useEffect, useState } from 'react'
import style from './Experience.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'


// experience cards data 
const ExperienceData = [
  {
    title:"Attractions",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    link:"#",
    image:"/assets/images/attractions-exp.png",
    sizeWidth:591,
    sizeHeight:550
  },
  {
    title:"Dry Rides",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    link:"#",
    image:"/assets/images/dry-rides-exp.png",
     sizeWidth:636,
    sizeHeight:555
  },
  {
    title:"Water Rides",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    link:"#",
    image:"/assets/images/water-rides-exp.png",
     sizeWidth:524,
    sizeHeight:550
  },
  {
    title:"Adventures",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    link:"#",
    image:"/assets/images/adventures-exp.png",
     sizeWidth:692,
    sizeHeight:492
  },
]



export default function ExperienceClient() {


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Experience</h1>
    </div>
</section>

{/* experiences section  */}
<section className={` ${style.experience_section}  common_section`}>
    <div className={`container`}>
       <div className={style.exp_cards}>

        {ExperienceData && ExperienceData.map((item,index)=>(
          <div className={style.card} key={index}>
            <div className={style.content}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <Button href={item.link} text="Explore More" className="link orange_icon"></Button>
            </div>
            <div className={style.image}>
              <Image src={item.image} alt={item.title} width={item.sizeWidth} height={item.sizeHeight}/>
            </div>
          </div>
        ))}

       </div>
    </div>
</section>


    </>
  )
}
