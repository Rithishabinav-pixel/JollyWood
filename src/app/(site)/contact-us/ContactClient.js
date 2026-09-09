"use client"

import React, { useEffect, useState, useActionState } from 'react'
import style from './Contact.module.css'
import Image from 'next/image'
import '@/app/(site)/components/ui/form.css'
import { submitContactEnquiry } from './actions'


// Timing datas
const TimingDatas = {
  weekdays:[
    {
      time:"10:45 AM - 07:30 PM",
      label:"Park Timings"
    },
    {
      time:"11:00 AM - 06:30 PM",
      label:"Rides Timings"
    },
    {
      time:"12:00 PM - 05:30 PM",
      label:"Water Park Timings"
    },
  ],
   weekends:[
    {
      time:"10:45 AM - 07:30 PM",
      label:"Park Timings"
    },
    {
      time:"11:00 AM - 06:30 PM",
      label:"Rides Timings"
    },
    {
      time:"11:30 AM - 06:00 PM",
      label:"Water Park Timings"
    },
  ],
}


export default function ContactClient() {

  const [state, formAction, pending] = useActionState(submitContactEnquiry, undefined)

  return (
    <>
  


{/* story section  */}
<section className={` ${style.contact_section}`}>

<div className={`container ${style.container}`}>

<div className={style.content}>
  <h1 className="common_heading white">Reach Us</h1>

  <div className={style.contactDetail}>
    <ul>
      <li>
        <a href='#'> 
        <span className={style.icon}> <Image src="/assets/images/c-map.svg" width={24} height={24} alt=''/> </span>
        <span className={style.detail}>
<h3>Vels Studios & Entertainment Pvt Ltd</h3>
<p>Plot No 24 & 26, Bidadi Industrial Area,<br/>Ramanagara District, Bidadi - 562 109.</p>
<span> <Image src="/assets/images/get-direction.svg" width={24} height={24} alt=''/> Get Direction</span>
        </span>
         </a>
         </li>

         <li>
        <a href='tel:+917009677009'> 
        <span className={style.icon}> <Image src="/assets/images/c-call.svg" width={24} height={24} alt=''/> </span>
        <span className={style.detail}> +91 7009 67 7009 </span>
         </a>
         </li>

         <li>
        <a href='mailto:marketing@velsjollywood.co.in'> 
        <span className={style.icon}> <Image src="/assets/images/c-mail.svg" width={24} height={24} alt=''/> </span>
        <span className={style.detail}> marketing@velsjollywood.co.in </span>
         </a>
         </li>

    </ul>
  </div>

  <div className={style.timings_section}>

    {/* character */}
<Image className={`${style.character} ${style.character_1}`} src="/assets/images/char_1.svg" width={480} height={506} alt=''/>

<div className={style.week}>
  <h3 className='white'>Weekdays</h3>
  {TimingDatas["weekdays"].map((item,index)=>(
  <div className={style.timing} key={index}>
    <h4 className={style.time}>{item.time}</h4>
    <p className='white'>{item.label}</p>
  </div>
  ))}
</div>

<div className={style.week}>
  <h3 className='white'>Weekends</h3>
  {TimingDatas["weekends"].map((item,index)=>(
  <div className={style.timing} key={index}>
    <h4 className={style.time}>{item.time}</h4>
    <p className='white'>{item.label}</p>
  </div>
  ))}
</div>

  </div>

</div>



  <div className={style.form_area}>
    <h2 className='white'>Send us a Message</h2>

    {state?.error && <p role="alert" className='white'>{state.error}</p>}
    {state?.success && <p role="status" className='white'>Thank you! Your enquiry has been received. Our team will get back to you soon.</p>}

    <form className='white_fields' action={formAction} key={state?.success ? "submitted" : "contact-form"}>
      <label htmlFor='contactFirstName' className='sr_only'>First Name</label>
      <input id='contactFirstName' name='firstName' type='text' className='full_cont input_field' placeholder='First Name *' required></input>

      <label htmlFor='contactLastName' className='sr_only'>Last Name</label>
      <input id='contactLastName' name='lastName' type='text' className='full_cont input_field' placeholder='Last Name *' required></input>

      <label htmlFor='contactMobileNumber' className='sr_only'>Mobile Number</label>
      <input id='contactMobileNumber' name='mobileNumber' type='tel' className='full_cont input_field' placeholder='Mobile Number *' required></input>

      <label htmlFor='contactEmail' className='sr_only'>Email Address</label>
      <input id='contactEmail' name='email' type='email' className='full_cont input_field' placeholder='Email Address *' required></input>

      <label htmlFor='contactMessage' className='sr_only'>Message</label>
      <textarea id='contactMessage' name='message' className='full_cont' placeholder='Message'></textarea>
<button className='common_btn black_shadow black_text white_bg left_tilt' type='submit' disabled={pending}>{pending ? "Submitting..." : "Submit"}<Image src="/assets/images/yellow-arrow.svg" width={24} height={24} alt=''/></button>



    </form>
  </div>



</div>




</section>


    </>
  )
}
