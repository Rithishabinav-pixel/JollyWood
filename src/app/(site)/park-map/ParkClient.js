"use client"

import React, { useEffect, useState } from 'react'
import style from './Park.module.css'
import '../innerpage.css'
import Image from 'next/image'


// list data 
const ListData = [
  "Attraction and Adventures",
  "Restaurants and Kiosk",
  "Souvenir and Gifts",
  "Utilities"
]

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
  

{/* story section  */}
<section className={`common_section ${style.park_section}`}>

<div className={`container ${style.container}`}>


  <div className={style.content}>
<h1 className={`title common_heading white`}>Take a Stroll around our Park</h1>
<p className='white'>Navigate your way through all the lands, rides, attractions, shopping and dining options available at VELS Jollywood.</p>
<ul>
  {ListData && ListData.map((item,index)=>(
    <li key={index}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2592 19.6875H11.5028C11.4841 20.8379 11.7533 22.5363 13.292 23.562C13.3329 23.5899 13.379 23.6093 13.4275 23.6193C13.476 23.6292 13.5261 23.6295 13.5747 23.62C13.6233 23.6105 13.6696 23.5914 13.7108 23.564C13.752 23.5365 13.7874 23.5011 13.8148 23.4599C13.8423 23.4187 13.8614 23.3725 13.8709 23.3238C13.8804 23.2752 13.8801 23.2252 13.8702 23.1767C13.8603 23.1282 13.8408 23.0821 13.813 23.0411C13.7851 23.0001 13.7495 22.9651 13.708 22.938C12.4652 22.1095 12.2457 20.6689 12.2592 19.6875Z" fill="black"/>
<path d="M12 0.75C10.1085 0.754658 8.29601 1.50943 6.96028 2.84874C5.62454 4.18805 4.87461 6.00251 4.875 7.89405C4.875 10.5015 6.08625 12.9434 8.3775 14.9557C9.28641 15.7496 10.2879 16.4308 11.3603 16.9844L10.0474 18.2974C9.99495 18.3498 9.95924 18.4166 9.94478 18.4894C9.93032 18.5621 9.93774 18.6375 9.96612 18.706C9.9945 18.7745 10.0425 18.8331 10.1042 18.8743C10.1659 18.9155 10.2383 18.9375 10.3125 18.9375H13.6875C13.7617 18.9375 13.8341 18.9155 13.8958 18.8743C13.9575 18.8331 14.0055 18.7745 14.0339 18.706C14.0623 18.6375 14.0697 18.5621 14.0552 18.4894C14.0408 18.4166 14.0051 18.3498 13.9526 18.2974L12.6396 16.9843C13.712 16.4307 14.7135 15.7495 15.6224 14.9556C17.9137 12.9434 19.125 10.5015 19.125 7.89405C19.1254 6.00251 18.3755 4.18805 17.0397 2.84874C15.704 1.50943 13.8915 0.754658 12 0.75Z" fill="black"/>
</svg>

     {item}</li>
  ))}
</ul>

<Image src="/assets/images/map-text.png" width={105} height={92} alt=''/>

  </div>

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
