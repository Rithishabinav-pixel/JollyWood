"use client"

import React, { useEffect, useState } from 'react'
import style from './Adventures.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'


// Adventures data 
const AdventuresData = [
  {
    image:"/assets/images/high-ropes-course.png",
    title:"High Ropes Course",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "64+ cm"
    },
    {
      label: "weight",
      value: "60+ kg"
    }
  ],
  },
  {
    image:"/assets/images/zipline.png",
    title:"Zipline",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "137+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  },
  {
    image:"/assets/images/rock-climbing.png",
    title:"Rock Climbing ",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "137+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  },
  {
    image:"/assets/images/obstacle-course.png",
    title:"Obstacle Course ",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "137+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  },
  {
    image:"/assets/images/rock-climbing.png",
    title:"Archery Tag",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "137+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  },
  {
    image:"/assets/images/obstacle-course.png",
    title:"Maze Runner",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "137+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  },
]



const ruleIcons = {
  ageAllowed: "/assets/images/age-allowed.svg",
  height: "/assets/images/height.svg",
  weight: "/assets/images/weight.svg",
};


export default function AdventuresClient() {


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Adventures</h1>
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
    <div className={style.rules}>
  {item.rules.map((rule) => (
    <div className={style.rule} key={rule.label}>
      <div className={style.icon}>
        <Image
          src={ruleIcons[rule.label]}
          width={40}
          height={40}
          alt=""
        />
      </div>

      <div className={style.detail}>
        <span>{rule.label==="ageAllowed"?"Age Allowed":rule.label}</span>
        <p>{rule.value}</p>
      </div>
    </div>
  ))}
</div>
  </div>
</div>
))}
</div>


</div>




</section>


    </>
  )
}
