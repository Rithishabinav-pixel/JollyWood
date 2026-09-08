"use client"

import React, { useEffect, useState } from 'react'
import style from './WaterRides.module.css'
import '../innerpage.css'
import Image from 'next/image'



// water rides data 

const WaterRidesData = [
  {
    image:"/assets/images/crazy-cruise.png",
    title:"Crazy Cruise",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "16+"
    },
    {
      label: "height",
      value: "140+ cm"
    },
    {
      label: "weight",
      value: "6+ kg"
    }
  ],
  },
   {
    image:"/assets/images/crazy-cruise.png",
    title:"Crazy Cruise",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "16+"
    },
    {
      label: "height",
      value: "140+ cm"
    },
    {
      label: "weight",
      value: "6+ kg"
    }
  ],
  },
   {
    image:"/assets/images/crazy-cruise.png",
    title:"Crazy Cruise",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "16+"
    },
    {
      label: "height",
      value: "140+ cm"
    },
    {
      label: "weight",
      value: "6+ kg"
    }
  ],
  },
   {
    image:"/assets/images/crazy-cruise.png",
    title:"Crazy Cruise",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "16+"
    },
    {
      label: "height",
      value: "140+ cm"
    },
    {
      label: "weight",
      value: "6+ kg"
    }
  ],
  },
   {
    image:"/assets/images/crazy-cruise.png",
    title:"Crazy Cruise",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rules: [
    {
      label: "ageAllowed",
      value: "16+"
    },
    {
      label: "height",
      value: "140+ cm"
    },
    {
      label: "weight",
      value: "6+ kg"
    }
  ],
  },
]



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
        <h1 className={`title common_heading white`}>Our Story</h1>
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
