"use client"

import React, { useEffect, useState } from 'react'
import style from './Park.module.css'
import '../innerpage.css'
import Image from 'next/image'


// map data 
const MapData = [
  {
    count: 1,
    label: "Emergency Assembly Area (Parking Lot)",
    style: {
      top: "50%",
      right: "22%",
    },
  },
  {
    count: 2,
    label: "Wave Pool",
    style: {
      top: "52%",
      left: "36%",
    },
  },
  {
    count: 3,
    label: "Planet Jollywood - Fine Dine",
    style: {
      top: "40%",
      left: "55%",
    },
  },
  {
    count: 4,
    label: "Family Pool",
    style: {
      top: "55%",
      left: "50%",
    },
  },
];

export default function ParkClient() {

  


  return (
    <>
    
{/* hero section  */}

<section className={`${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Park Map</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.hut_section}`}>

<div className={`container ${style.container}`}>

  <div className={style.parkMap}>
    <Image className={style.map_image} src="/assets/images/park-map.webp" width={1482} height={965} alt=''/>
    {
  MapData?.map((item, index) => (
    <div
      className={style.pin}
      key={index}
      style={item.style}
    >
      <p className={style.count}>{item.count}</p>
      <span>{item.label}</span>
    </div>
  ))
}
  </div>

</div>




</section>


    </>
  )
}
