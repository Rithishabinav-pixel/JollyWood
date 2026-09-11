"use client"

import React, { useEffect, useState } from 'react'
import style from './Experience.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'


// experience cards data 
const ExperienceData = [
  {
    title: "Attractions",
    content:
      "There’s always something exciting waiting around the corner at VELS Jollywood. Explore unique attractions, discover new experiences and create moments filled with wonder, laughter and a little bit of magic for everyone.",
    link: "/attractions",
    image: "/assets/images/attractions-exp.png",
    sizeWidth: 591,
    sizeHeight: 550
  },
  {
    title: "Dry Rides",
    content:
      "Ready for some serious fun? Take on exciting spins, thrilling turns and joyful rides that bring out the kid in everyone. Whether you’re chasing a little adventure or a lot of laughter, the fun starts here.",
    link: "/dry-rides",
    image: "/assets/images/dry-rides-exp.png",
    sizeWidth: 636,
    sizeHeight: 555
  },
  {
    title: "Water Rides",
    content:
      "Beat the heat and dive into a world of splashes, slides and endless smiles. From exciting drops to relaxing pools, our water rides are the perfect way to make every summer moment a little more fun.",
    link: "/water-rides",
    image: "/assets/images/water-rides-exp.png",
    sizeWidth: 524,
    sizeHeight: 550
  },
  {
    title: "Adventures",
    content:
      "Think you’re ready for a challenge? Take on exciting adventures that test your courage, skills and teamwork. Climb higher, aim better and push your limits while creating stories you’ll love sharing later.",
    link: "/adventures",
    image: "/assets/images/adventures-exp.png",
    sizeWidth: 692,
    sizeHeight: 492
  },
  {
    title: "Live Shows",
    content:
      "Lights, music and a whole lot of entertainment come together at VELS Jollywood. Enjoy spectacular performances, captivating shows and magical moments that turn an ordinary day into a celebration.",
    link: "/live-shows",
    image: "/assets/images/adventures-exp.png",
    sizeWidth: 692,
    sizeHeight: 492
  }
];



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
