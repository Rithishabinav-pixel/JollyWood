"use client"

import React, { useEffect, useState } from 'react'
import style from './Faq.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'
 

// faq data 
const FaqData = [
  {
    question:'Do I need a PCR test result or a "Green Pass" status in Jollywood to enter the park?',
    answer:'No. PCRs, face masks and ‘Green Pass’ status are no longer required to enter The Park.'
  },
    {
    question:'What is the best time of year to visit the park?',
    answer:'Any time of year is a good time. The Park is open to visitors every day, year round, and the park is entirely indoors.'
  },
    {
    question:'Is there a taxi stop near the park?',
    answer:'There is a taxi stop at the main entrance of Park where you can get a taxi at any point during the park opening hours.'
  },
    {
    question:'Can I leave the park & Re-enter on the same day?',
    answer:"Our park has a no re-entry policy. There may be exceptional circumstances in which you'll be allowed to leave the park and re-enter on the same day, but this will be at the discretion of the park management. Group exit and re-entry will not be permitted."
  },
    {
    question:'Is this a completely indoor theme park?',
    answer:'No, Jollywood has several outdoor attractions, including a water park and immersive indoor experiences, making it perfect for family fun year-round.'
  },
   {
    question:'Is it cheaper to buy park tickets online?',
    answer:'Yes. You can save up to 15% off your tickets when purchased online compared to the prices at the parks’ ticketing counters. ( WE need to remove discount but we can put something like this might have exciting offers and at the counter there will be hassle free transactions)'
  },
   {
    question:'What is the validity period of tickets?',
    answer:'Jollywood tickets are valid for one entry to the park on the selected date of visit.'
  },
   {
    question:'What do I do if I encounter a problem when buying online?',
    answer:'For enquiries related to online ticketing please contact us at +91 7009 67 7009 or you can email us at marketing@jollywood.co.in'
  },
   {
    question:'Do you offer a senior discount?',
    answer:'Presently, we do not have any discount on tickets for senior citizens. However, we are providing the standard tickets at a discounted price.'
  },
  {
    question:'How do I book a group?',
    answer:'To make a group booking (25 or more guests) call us on +91 7009 67 7009 or email our sales team at marketing@jollywood.co.in. We’ll respond within 24 hours, except on weekends.'
  },
]


export default function FaqClient() {

const [activeFaq,setActiveFaq] = useState(null);


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>FAQ's</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.faq_section}`}>

<div className={`container section_container ${style.container}`}>

{FaqData && FaqData.map((item,index)=>(
  <div className={`${style.accordion} ${activeFaq===index?style.active:""}`} key={index}>
    <div className={style.header}>
      <h2>{item.question}</h2>
       <button className={style.action} onClick={()=>setActiveFaq(activeFaq==index?null:index)} ></button> </div>
    <div className={style.body}>
      <div>
      {item.answer}
      </div>
      </div>
  </div>
))}

</div>




</section>


    </>
  )
}
