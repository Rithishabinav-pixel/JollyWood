"use client"

import React, { useEffect, useState } from 'react'
import style from '@/app/(site)/components/ui/contentList.module.css'
import '../innerpage.css'
import Image from 'next/image'



// rules & regulations data
const RulesData = [
  {
    icon: "/assets/images/alcohol.svg",
    title: "Ticket Policy",
    content: "Each ticket grants entry to one person and is valid only for the specified date and time. Tickets are non-transferable and non-refundable."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Security Checks",
    content: "For the safety of all guests, we conduct security checks at the park entrance and at other locations as deemed necessary."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Queue Etiquette",
    content: "Please maintain discipline and fairness while waiting in ride queues. Group members cannot join those already in the queue."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Dress Code",
    content: "To ensure Hygiene and Safety, we enforce a dress code within the park. When enjoying water rides, kindly wear nylon and lycra swimwear only such as t-shirts, shorts, bermudas, three-fourths, or swimsuits. We prohibit attires such as sarees, churidars/salwars, dupattas, formal pants, shirts, burkhas/pardas, school uniforms, denim (jeans and three-fourth jeans), cargos, and similar outfits in the water park and certain high thrill rides for people’s safety."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Safety Instructions",
    content: "As many rides are adventurous in nature, it is vital to follow the safety instructions provided by lifeguards, ride operators, and displayed signs near the rides. The management will not be held responsible for any injuries or accidents resulting from guest negligence."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Children's Supervision",
    content: "We advise the parents to pay special attention to their children and ensure they’re under surveillance."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Early Closure",
    content: "In certain circumstances, guests may be required to leave the park before the scheduled closing time."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Ride Closures",
    content: "The management reserves the right to close any ride at any time for safety or technical reasons without prior notice."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "No Smoking",
    content: "Strict Prohibition of Smoking in the common areas. Please use the designated smoking area."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "No Pets",
    content: "Unfortunately, pet animals are not allowed inside the park."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Additionally, the following activities require prior approval from the management",
    content: "Sale or display of goods or services.\nDistribution of printed materials.\nCommercial photography, videography, or recording.\nBrand promotion, display of banners, or any unauthorized events."
  }
];



export default function RulesClient() {

  

  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Rules & Regulation
</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.contentList_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>Welcome to Jollywood Studios & Adventures! We are thrilled to have you here and want to ensure a safe and enjoyable experience for everyone. To achieve this, we kindly request your cooperation in following the guidelines outlined below. By adhering to these rules, you contribute to creating a pleasant and secure environment for all.</p>
      </div>
    </div>

  <div className={style.content}>

    {RulesData && RulesData.map((item,index)=>(
      <div className={style.card} key={index}>
        <div className={style.icon}>
          <Image src={item.icon} width={64} height={64} alt={item.title}/>
        </div>
        <div className={style.detail}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      </div>
    ))}
   
  </div>

</div>




</section>


    </>
  )
}
