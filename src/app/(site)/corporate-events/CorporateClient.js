"use client"

import React, { useActionState } from 'react'
import style from './Corporate.module.css'
import '../innerpage.css'
import Image from 'next/image'
import '@/app/(site)/components/ui/form.css'
import Button from '../components/ui/Button'
import { submitCorporateEnquiry } from './actions'


// corporate data
const CorporateData = [
  {
    image:"/assets/images/bm.png",
    title:"Business Meeting",
    content:"Where great ideas meet great people. The perfect setting for productive meetings.",
   
  },
    {
    image:"/assets/images/bm.png",
    title:"Entertainment",
    content:"Bring Your Team. We’ll Bring The Magic. Entertainment that creates moments worth remembering.",
  
  },
   {
    image:"/assets/images/bm.png",
    title:"Experience",
    content:"Create Moments Beyond The Ordinary. Experiences that inspire connection and collaboration.",

  },

]


export default function CorporateClient() {

  const [state, formAction, pending] = useActionState(submitCorporateEnquiry, undefined)


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Corporate Events</h1>
    </div>
</section>


{/* corporate section  */}
<section className={`common_section no_padding_top ${style.corporate_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading center_align ${style.top_heading}`}>

      <div className={`left ${style.left}`}>
        <p className='white'>Corporate</p>
        <h2 className='common_heading white'>A New Way To<br className='desktop_break'/> Host Events</h2>
        <p className='white'>Forget predictable conference rooms and routine gatherings. At VELS Jollywood, bring your team together with a refreshing mix of meetings, entertainment and experiences. Create a space where ideas flow, connections grow and every corporate gathering becomes a memorable experience your team will look forward to.</p>
      </div>

    </div>

<div className={style.splitSection}>

  <div className={style.singleTexts}>
<h3>Meeting</h3>
<h3>Incentive</h3>
<h3>Conference</h3>
<h3>Events</h3>

  </div>

   <div className={style.corporateCard}>

        {CorporateData.map((slide,index) => (

            <div className={`${style.singleSlide}`} key={index}>
              <div className={style.image}>
                <Image src={slide.image} width={420} height={500} alt={slide.title}/>

              </div>
              <div className={style.content}>          
                <h3 className={`${style.title} white`}>{slide.title}</h3>
                <p className='white'>{slide.content}</p>       
              </div>
            </div>

        ))}

    </div>

</div>


</div>

</section>


{/* form section  */}
<section className={`common_section yellow_section ${style.form_section}`}>

<div className={`container ${style.container}`}>

<div className={style.content}>
  <h2 className='common_heading'>Host Your Event at VELS Jollywood</h2>
  <p className=''>From birthday celebrations to office outings and family gatherings, VELS Jollywood offers the perfect setting for your next event. Share your event details with us and our team will help bring it to life.</p>
</div>

  <div className={style.form_area}>
    <h2 className='purple'>Host With Us!</h2>

    {state?.error && <p role="alert">{state.error}</p>}
    {state?.success && <p role="status">Thank you! Your enquiry has been received. Our team will get back to you soon.</p>}

    <form className='black_fields' action={formAction} key={state?.success ? "submitted" : "corporate-form"} aria-busy={pending}>
      <label htmlFor='corporateName' className='sr_only'>Name</label>
      <input id='corporateName' name='name' type='text' className='half_cont input_field' placeholder='Name *' required></input>

      <label htmlFor='corporatePhone' className='sr_only'>Phone Number</label>
      <input id='corporatePhone' name='mobileNumber' type='tel' className='half_cont input_field' placeholder='Phone Number *' required></input>

      <label htmlFor='corporateEmail' className='sr_only'>Email</label>
      <input id='corporateEmail' name='email' type='email' className='half_cont input_field' placeholder='Email *' required></input>

      <label htmlFor='corporateLocation' className='sr_only'>Location</label>
      <input id='corporateLocation' name='location' type='text' className='half_cont input_field' placeholder='Location'></input>

      <label htmlFor='corporateEventType' className='sr_only'>Type of Event</label>
      <select id='corporateEventType' name='eventType' className={`half_cont input_field ${style.eventTypeSelect}`} defaultValue=''>
        <option value='' disabled>Type of Event</option>
        <option value='Birthday'>Birthday</option>
        <option value='Office'>Office</option>
        <option value='Family'>Family</option>
        <option value='Others'>Others</option>
      </select>

      <label htmlFor='corporateEventDate' className='sr_only'>Date of Event</label>
      <input id='corporateEventDate' name='eventDate' type='date' className='half_cont input_field' placeholder='Date of Event'></input>

<button className='common_btn black_shadow black_text white_bg left_tilt' type='submit' disabled={pending}>{pending ? "Submitting..." : "Submit"} <Image src="/assets/images/yellow-arrow.svg" width={24} height={24} alt=''/></button>



    </form>
  </div>

</div>

</section>


    </>
  )
}
