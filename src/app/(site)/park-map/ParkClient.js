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
    category: "utilities",
    style: {
      top: "65.00%",
      left: "50.10%",
    },
  },
  {
    count: 1,
    label: "Emergency Assembly Area (Parking Lot)",
    category: "utilities",
    style: {
      top: "49.25%",
      left: "77.62%",
    },
  },
  {
    count: 2,
    label: "Waiting Area",
    category: "utilities",
    style: {
      top: "55.34%",
      left: "78.19%",
    },
  },
  {
    count: 3,
    label: "Driver Waiting Area",
    category: "utilities",
    style: {
      top: "44.83%",
      left: "77.88%",
    },
  },
  {
    count: 4,
    label: "VIP Lounge Area",
    category: "utilities",
    style: {
      top: "67.07%",
      left: "74.86%",
    },
  },
  {
    count: 5,
    label: "Box Office – Ticket Counter (Wheelchair Available)",
    category: "utilities",
    style: {
      top: "66.78%",
      left: "76.47%",
    },
  },
  {
    count: 6,
    label: "Baggage Room",
    category: "utilities",
    style: {
      top: "65.98%",
      left: "77.88%",
    },
  },
  {
    count: 7,
    label: "Food Kiosk",
    category: "Restaurants and Kiosk",
    style: {
      top: "72.87%",
      left: "64.51%",
    },
  },
  {
    count: 8,
    label: "Twilight Dream Show (Multimedia Show @ 7:00 PM)",
    category: "attraction",
    style: {
      top: "70.29%",
      left: "68.61%",
    },
  },
  {
    count: 9,
    label: "Movie Wall",
    category: "attraction",
    style: {
      top: "61.32%",
      left: "66.62%",
    },
  },
  {
    count: 10,
    label: "Playtopia (Exclusive Kid Zone / Birthday Party Hall)",
    category: "attraction",
    style: {
      top: "55.92%",
      left: "66.58%",
    },
  },
  {
    count: 11,
    label: "Tribal Museum",
    category: "attraction",
    style: {
      top: "47.01%",
      left: "53.78%",
    },
  },
  {
    count: 12,
    label: "Basketball Game & Board Busters (Chargeable)",
    category: "attraction",
    style: {
      top: "56.78%",
      left: "60.67%",
    },
  },
  {
    count: 14,
    label: "Romancia Parade @ 06:30 PM / Cirkus Store (Stroller Available)",
    category: "attraction",
    style: {
      top: "48.39%",
      left: "58.34%",
    },
  },
  {
    count: 15,
    label: "Circus Store (Shopping Zone) / Strollers Available",
    category: "Souvenir and Gifts",
    style: {
      top: "44.54%",
      left: "57.76%",
    },
  },
  {
    count: 16,
    label: "I-Pics Photo Corner (Chargeable)",
    category: "Souvenir and Gifts",
    style: {
      top: "46.38%",
      left: "57.07%",
    },
  },
  {
    count: 17,
    label: "Planet Jollywood – Fine Dine",
    category: "Restaurants and Kiosk",
    style: {
      top: "39.66%",
      left: "55.77%",
    },
  },
  {
    count: 18,
    label: "Games Area",
    category: "attraction",
    style: {
      top: "44.48%",
      left: "52.32%",
    },
  },
  {
    count: 19,
    label: "Trampoline Park",
    category: "attraction",
    style: {
      top: "32.93%",
      left: "52.13%",
    },
  },
  {
    count: 20,
    label: "Baby Trampoline",
    category: "attraction",
    style: {
      top: "32.18%",
      left: "50.10%",
    },
  },
  {
    count: 21,
    label: "Jolly Tornado",
    category: "attraction",
    style: {
      top: "34.08%",
      left: "50.40%",
    },
  },
  {
    count: 22,
    label: "Bucket Toss (Chargeable)",
    category: "attraction",
    style: {
      top: "36.21%",
      left: "49.14%",
    },
  },
  {
    count: 23,
    label: "Dino Bites",
    category: "Restaurants and Kiosk",
    style: {
      top: "35.06%",
      left: "41.89%",
    },
  },
  {
    count: 24,
    label: "Maze Runner",
    category: "attraction",
    style: {
      top: "35.86%",
      left: "44.15%",
    },
  },
  {
    count: 25,
    label: "First Aid Centre",
    category: "utilities",
    style: {
      top: "39.25%",
      left: "49.94%",
    },
  },
  {
    count: 26,
    label: "Aqua Store (Swimwear)",
    category: "Souvenir and Gifts",
    style: {
      top: "40.11%",
      left: "36.34%",
    },
  },
  {
    count: 27,
    label: "The Titanic Experience",
    category: "attraction",
    style: {
      top: "36.55%",
      left: "33.65%",
    },
  },
  {
    count: 28,
    label: "The Lost World – Dino Park",
    category: "attraction",
    style: {
      top: "40.52%",
      left: "39.17%",
    },
  },
  {
    count: 29,
    label: "Glow Garden",
    category: "attraction",
    style: {
      top: "41.95%",
      left: "52.70%",
    },
  },
  {
    count: 30,
    label: "Hang Man (Chargeable)",
    category: "attraction",
    style: {
      top: "42.30%",
      left: "34.76%",
    },
  },
  {
    count: 31,
    label: "Adventures Bites",
    category: "Restaurants and Kiosk",
    style: {
      top: "46.55%",
      left: "33.08%",
    },
  },
  {
    count: 32,
    label: "Fish the Duck (Chargeable)",
    category: "attraction",
    style: {
      top: "44.54%",
      left: "31.70%",
    },
  },
  {
    count: 33,
    label: "Mini Tagada",
    category: "attraction",
    style: {
      top: "48.97%",
      left: "33.08%",
    },
  },
  {
    count: 34,
    label: "Sky Swinger",
    category: "attraction",
    style: {
      top: "52.18%",
      left: "30.55%",
    },
  },
  {
    count: 35,
    label: "Rocket Ejector",
    category: "attraction",
    style: {
      top: "46.09%",
      left: "28.63%",
    },
  },
  {
    count: 36,
    label: "Bungee Trampoline",
    category: "attraction",
    style: {
      top: "47.87%",
      left: "26.14%",
    },
  },
  {
    count: 37,
    label: "Carousel",
    category: "attraction",
    style: {
      top: "49.43%",
      left: "27.48%",
    },
  },
  {
    count: 38,
    label: "Bumper Car",
    category: "attraction",
    style: {
      top: "51.95%",
      left: "22.54%",
    },
  },
  {
    count: 39,
    label: "Rope Course",
    category: "attraction",
    style: {
      top: "53.28%",
      left: "18.44%",
    },
  },
  {
    count: 40,
    label: "Zip Line",
    category: "attraction",
    style: {
      top: "53.85%",
      left: "19.93%",
    },
  },
  {
    count: 41,
    label: "Sky Cycle",
    category: "attraction",
    style: {
      top: "55.17%",
      left: "18.70%",
    },
  },
  {
    count: 42,
    label: "Double Sky Cycle",
    category: "attraction",
    style: {
      top: "55.29%",
      left: "17.55%",
    },
  },
  {
    count: 43,
    label: "Rock Wall Climbing",
    category: "attraction",
    style: {
      top: "51.15%",
      left: "18.63%",
    },
  },
  {
    count: 44,
    label: "Tyre Wall Climbing",
    category: "attraction",
    style: {
      top: "52.70%",
      left: "20.62%",
    },
  },
  {
    count: 45,
    label: "Sky Roller",
    category: "attraction",
    style: {
      top: "56.15%",
      left: "19.62%",
    },
  },
  {
    count: 46,
    label: "Midi Dance Party",
    category: "attraction",
    style: {
      top: "53.74%",
      left: "24.65%",
    },
  },
  {
    count: 47,
    label: "Samba Balloon",
    category: "attraction",
    style: {
      top: "54.14%",
      left: "28.25%",
    },
  },
  {
    count: 48,
    label: "Changing Room",
    category: "utilities",
    style: {
      top: "42.30%",
      left: "29.13%",
    },
  },
  {
    count: 49,
    label: "Beach Container",
    category: "Restaurants and Kiosk",
    style: {
      top: "44.94%",
      left: "37.37%",
    },
  },
  {
    count: 50,
    label: "Watch Tower",
    category: "attraction",
    style: {
      top: "56.67%",
      left: "27.60%",
    },
  },
  {
    count: 51,
    label: "Wave Pool",
    category: "attraction",
    style: {
      top: "54.43%",
      left: "35.72%",
    },
  },
  {
    count: 52,
    label: "Beach Area",
    category: "attraction",
    style: {
      top: "53.33%",
      left: "39.06%",
    },
  },
  {
    count: 53,
    label: "Rain Dance",
    category: "attraction",
    style: {
      top: "47.76%",
      left: "41.20%",
    },
  },
  {
    count: 54,
    label: "Wave Bistro (AC Restaurant / Event Space)",
    category: "Restaurants and Kiosk",
    style: {
      top: "56.95%",
      left: "40.32%",
    },
  },
  {
    count: 55,
    label: "Family Pool",
    category: "attraction",
    style: {
      top: "41.09%",
      left: "58.26%",
    },
  },
  {
    count: 55,
    label: "Family Pool",
    category: "attraction",
    style: {
      top: "55.34%",
      left: "44.54%",
    },
  },
  {
    count: 56,
    label: "Mini Pendulum Water Slide",
    category: "attraction",
    style: {
      top: "51.26%",
      left: "54.16%",
    },
  },
  {
    count: 57,
    label: "Super Drop Water Slide",
    category: "attraction",
    style: {
      top: "51.90%",
      left: "56.73%",
    },
  },
  {
    count: 58,
    label: "Hide N Seek Water Slide",
    category: "attraction",
    style: {
      top: "53.74%",
      left: "55.88%",
    },
  },
  {
    count: 59,
    label: "Family Water Slide",
    category: "attraction",
    style: {
      top: "53.74%",
      left: "57.26%",
    },
  },
  {
    count: 60,
    label: "Speed Water Slide",
    category: "attraction",
    style: {
      top: "52.59%",
      left: "55.12%",
    },
  },
  {
    count: 61,
    label: "Crazy Cruise Water Slide",
    category: "attraction",
    style: {
      top: "50.98%",
      left: "55.46%",
    },
  },
  {
    count: 62,
    label: "Ice Berg – Refreshment Corner",
    category: "Restaurants and Kiosk",
    style: {
      top: "32.01%",
      left: "36.30%",
    },
  },
  {
    count: 63,
    label: "Royal Kitchen of India (Buffet)",
    category: "Restaurants and Kiosk",
    style: {
      top: "29.02%",
      left: "36.80%",
    },
  },
  {
    count: 64,
    label: "The Food Souk",
    category: "Restaurants and Kiosk",
    style: {
      top: "27.07%",
      left: "36.22%",
    },
  },
  {
    count: 65,
    label: "Nursing Room (Feeding Room)",
    category: "utilities",
    style: {
      top: "29.31%",
      left: "46.76%",
    },
  },
  {
    count: 66,
    label: "Jubilee Theatre (Cinematic Dance Show)",
    category: "attraction",
    style: {
      top: "24.02%",
      left: "55.92%",
    },
  },
  {
    count: 67,
    label: "Miniature City",
    category: "attraction",
    style: {
      top: "16.49%",
      left: "55.50%",
    },
  },
  {
    count: 68,
    label: "Restroom",
    category: "utilities",
    style: {
      top: "41.44%",
      left: "30.66%",
    },
  },
  {
    count: 69,
    label: "Special Guest Restroom",
    category: "utilities",
    style: {
      top: "43.39%",
      left: "58.91%",
    },
  },
  {
    count: 69,
    label: "Special Guest Restroom",
    category: "utilities",
    style: {
      top: "53.85%",
      left: "75.81%",
    },
  },
  {
    count: 70,
    label: "Ride Area School Students Baggage Lockers",
    category: "utilities",
    style: {
      top: "44.14%",
      left: "25.30%",
    },
  },
  {
    count: 71,
    label: "Water Park School Students Baggage Lockers",
    category: "utilities",
    style: {
      top: "59.20%",
      left: "52.55%",
    },
  },
  {
    count: 72,
    label: "Water Park – Guest Lockers",
    category: "utilities",
    style: {
      top: "47.99%",
      left: "34.61%",
    },
  },
  {
    count: 73,
    label: "Ride Area – Guest Lockers",
    category: "utilities",
    style: {
      top: "58.16%",
      left: "20.20%",
    },
  },
  {
    count: 74,
    label: "Assembly Points",
    category: "utilities",
    style: {
      top: "28.16%",
      left: "46.30%",
    },
  },
  {
    count: 74,
    label: "Assembly Points",
    category: "utilities",
    style: {
      top: "49.60%",
      left: "70.64%",
    },
  },
  {
    count: 74,
    label: "Assembly Points",
    category: "utilities",
    style: {
      top: "74.71%",
      left: "70.30%",
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

  <div className={style.parkMap} >
    <Image className={style.map_image} src="/assets/images/park-map.webp" width={1482} height={965} alt=''/>
    {
  MapData?.map((item, index) => (
    <div
      className={`${style.pin} `}
      key={index}
      style={item.style}
    >
      <p className={`${style.count}`} data-category={item.category} >{item.count}</p>
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
