"use client"

import React, { useEffect, useState } from 'react'
import style from './Story.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'




export default function StoryClient() {



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
        <h2 className='common_heading white'>Welcome to VELS Jollywood Studios & Adventures</h2>
        <p className='white'>The ultimate movie-themed family destination that promises a world of magical experiences for visitors of all ages. From grandparents to grandchild, we offer immersive experiences, culinary delights, shopping, and entertainment, all in one place. Whether you're looking to spend quality time with family, host a corporate outing or team-building activity, or simply indulge in some fun-filled entertainment, VELS Jollywood has something for everyone.</p>
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
