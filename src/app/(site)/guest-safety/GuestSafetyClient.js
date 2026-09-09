"use client"

import React, { useEffect, useState } from 'react'
import style from '@/app/(site)/components/ui/contentList.module.css'
import '../innerpage.css'
import Image from 'next/image'



// safety data
const SafetyData = [
  {
    icon: "/assets/images/alcohol.svg",
    title: "Daily Ride Safety Checks",
    content: "Our rides undergo comprehensive safety inspections on a daily basis to ensure they meet the highest standards of safety."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Ride Safety Harnesses",
    content: "To enhance your safety during rides, we provide and require the use of safety harnesses or restraints. Please ensure they are properly fastened and adjusted."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Attendants and Radios",
    content: "Trained attendants equipped with two-way radios are stationed throughout the park, ready to assist you and ensure rapid communication in case of any emergencies."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Lifeguards/Security Personnel",
    content: "For your safety around water-based attractions, we have dedicated lifeguards and security personnel on duty to closely monitor and respond to any potential hazards."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Lightning Protection",
    content: "To mitigate lightning hazards, our park is equipped with lightning arresters strategically placed throughout the premises."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "CCTV Surveillance",
    content: "We maintain a comprehensive CCTV surveillance system that covers all areas of the park, helping us monitor and address any potential safety concerns."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Public Address System",
    content: "In the event of an emergency or important announcement, our park is equipped with a public address system to quickly and effectively communicate important information."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "First Aid Facility",
    content: "A fully equipped first aid facility staffed by certified medical professionals is available on-site to promptly address any medical concerns or emergencies."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Security Checks",
    content: "To ensure the safety and security of all guests, we conduct security checks on all individuals and belongings upon entry to the park and at other appropriate locations within the premises."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Safety Instructions",
    content: "As many of our rides are of an adventurous nature, we strongly advise guests to carefully follow the safety instructions provided by lifeguards, ride operators, and displayed signs near the attractions. Please note that the management cannot be held responsible for any injuries or accidents resulting from guest negligence."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Pool Safety",
    content: "It is important to note that our pools are shallow. Therefore, diving into the pools is strictly prohibited to prevent any potential injuries."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Health Advisory",
    content: "For your well-being, we advise pregnant women, heart patients, individuals with high blood pressure, and those prone to epilepsy to avoid fast-paced or adventurous rides."
  },
  {
    icon: "/assets/images/alcohol.svg",
    title: "Height Restrictions",
    content: "Please be aware that certain rides have specific height restrictions. Children below the stipulated height are not permitted to ride those attractions for their safety."
  }
];



export default function GuestSafetyClient() {

  

  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Guest Safety</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.contentList_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>At Jollywood Studios & Adventures, we prioritize the safety and well-being of every single guest. Our unwavering commitment is to provide a secure and enjoyable environment for everyone who visits our park. We kindly request that you acquaint yourself with the following safety measures and collaborate with our staff to ensure a safe and memorable experience for all:</p>
      </div>
    </div>

  <div className={style.content}>

    {SafetyData && SafetyData.map((item,index)=>(
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
