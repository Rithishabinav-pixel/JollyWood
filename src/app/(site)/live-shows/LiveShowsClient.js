"use client"

import React, { useEffect, useState } from 'react'
import style from './LiveShows.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'


// Adventures data 
const LiveShowsData = [

  {
    image:"/assets/images/high-ropes-course.png",
    title:"Jubilee Theatre",
    content:"Where cinema comes alive on stage. Experience the magic of Indian cinema through spectacular performances, music and storytelling. With dazzling visuals and captivating acts, Jubilee Theatre brings your favourite movie moments to life in an unforgettable celebration.",
    time:"06:00 PM"
  },

  {
    image:"/assets/images/high-ropes-course.png",
    title:"Twilight Dreams",
    content:"Where lights, water and music create magic. Watch the night transform into a breathtaking spectacle of colours, lasers and dancing fountains. Twilight Dreams combines technology and imagination to create a mesmerising show perfect for families, friends and unforgettable evenings.",
    time:"06:00 PM"
  },

]



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
{LiveShowsData && LiveShowsData.map((item,index)=>(


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
