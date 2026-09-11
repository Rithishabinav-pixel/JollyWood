"use client"

import React, { useEffect, useState } from 'react'
import style from './Adventures.module.css'
import '../innerpage.css'
import Image from 'next/image'


// Adventures data
const AdventuresData = [
  {
    image: "/assets/images/high-ropes-course.png",
    title: "High Ropes Course",
    content:
      "Rise above the challenge. Take on a thrilling aerial adventure that tests your balance, strength and confidence. Navigate through exciting obstacles while pushing your limits and creating unforgettable moments.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+"
      },
      {
        label: "height",
        value: "140+ cm"
      }
    ]
  },
  {
    image: "/assets/images/zipline.png",
    title: "Zipline",
    content:
      "Take the leap. Feel the rush. Soar through the air and experience the thrill of speed as you glide across the zipline. A high-energy adventure that brings excitement, courage and unforgettable views.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+"
      },
      {
        label: "height",
        value: "140+ cm"
      }
    ]
  },
  {
    image: "/assets/images/rock-climbing.png",
    title: "Rock Climbing",
    content:
      "Climb higher. Push harder. Challenge yourself on a thrilling climbing wall that tests your strength, focus and determination. Reach the top, overcome obstacles and celebrate every achievement along the way.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+"
      },
      {
        label: "height",
        value: "140+ cm"
      }
    ]
  },
  {
    image: "/assets/images/obstacle-course.png",
    title: "Obstacle Course",
    content:
      "Challenge accepted. Teamwork activated. Work together, overcome obstacles and test your coordination through an exciting course filled with walls, ropes, and balance challenges. This is the perfect adventure to build confidence and teamwork.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+"
      },
      {
        label: "height",
        value: "140+ cm"
      }
    ]
  },
  {
    image: "/assets/images/rock-climbing.png",
    title: "Archery Tag",
    content:
      "Aim. Strategize. Conquer. Combine the thrill of archery with the excitement of a team battle. Test your accuracy, build strategies and compete with your team in this action-packed adventure.",
    rules: [
      {
        label: "ageAllowed",
        value: "16+"
      },
      {
        label: "height",
        value: "160+ cm"
      }
    ]
  },
  {
    image: "/assets/images/obstacle-course.png",
    title: "Maze Runner",
    content:
      "Find your way. Beat the maze. Enter a world of twists, turns and challenges where every step tests your problem-solving skills. Navigate through the maze and race towards the ultimate escape.",
    rules: []
  }
];



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
