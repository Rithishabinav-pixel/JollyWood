"use client"

import React, { useEffect, useState } from 'react'
import style from './WaterRides.module.css'
import '../innerpage.css'
import Image from 'next/image'



// water rides data 

const WaterRidesData = [
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Crazy Cruise",
    content:
      "Twist, turn, laugh and scream! The crazier the ride, the bigger the thrill! Take on exciting twists, thrilling turns and endless splashes in a ride designed for adventure seekers.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Family Pool",
    content:
      "Every splash brings the family closer. Dive into a day of fun and laughter! Enjoy a safe and refreshing space where families can relax, play and create unforgettable moments together.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Family Slide",
    content:
      "Slide together, laugh together! A thrilling splash of fun for the whole family. Share the excitement of a fun-filled slide experience made for families to enjoy every splash.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Hide N Seek",
    content:
      "Hide, seek, splash and repeat! A water-filled adventure for little explorers. A playful water zone where kids can splash around, explore and enjoy endless moments of fun.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Mini Pendulum",
    content:
      "Swing high, splash down and smile big! A mini ride with maximum water fun. Enjoy a fun-filled water adventure with exciting swings, splashes and plenty of smiles along the way.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Rain Dance",
    content:
      "Music up, water on, fun unlimited! Dance, splash, and make unforgettable memories. Turn up the energy with music, refreshing showers and a celebration of endless fun with friends and family.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Speed Slide",
    content:
      "Ready, set, slide! Feel the speed. Feel the thrill. Race through an exciting water slide experience filled with speed, twists and an adrenaline rush.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Super Drop",
    content:
      "One big drop. Endless excitement! Feel the rush from the very top! Take the ultimate plunge and experience a thrilling drop that will leave you wanting more.",
    rules: []
  },
  {
    image: "/assets/images/crazy-cruise.png",
    title: "Wave Pool Beach Area",
    content:
      "A beachside adventure made for the whole family! Feel the waves, relax by the beach and enjoy a tropical escape filled with fun and relaxation.",
    rules: []
  }
];


const ruleIcons = {
  ageAllowed: "/assets/images/age-allowed.svg",
  height: "/assets/images/height.svg",
  weight: "/assets/images/weight.svg",
};



export default function WaterRidesClient() {

  
  


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Water Rides</h1>
    </div>
</section>



{/* rides section  */}
<section className={` ${style.rides_section} no_padding_top common_section`}>
    <div className={`container`}>
       <div className={style.ride_cards}>

    {WaterRidesData && WaterRidesData.map((item,index)=>(
      <div className={style.card} key={index}>
         <div className={style.image} >
         <Image src={item.image} width={420} height={547} alt={item.title}/>
         <Image src="/assets/images/water-vector.svg" className={style.water} width={420} height={547} alt={item.title}/>
        </div>
        <div className={style.content}>
<h2>{item.title}</h2>
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
