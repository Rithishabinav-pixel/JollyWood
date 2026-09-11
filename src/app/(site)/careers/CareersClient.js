"use client"

import React, { useEffect, useState, useActionState } from 'react'
import style from './Careers.module.css'
import '../innerpage.css'
import Image from 'next/image'
import '@/app/(site)/components/ui/form.css'
import { submitCareerEnquiry } from './actions'




export default function CareersClient() {

  const [state, formAction, pending] = useActionState(submitCareerEnquiry, undefined)



  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Careers</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.careers_section}`}>

<div className={`container ${style.container}`}>

<div className={style.content}>
  <h2 className='common_heading white'>Build Experiences. Build Your Future at VELS Jollywood.</h2>
  <p className='white'>At VELS Jollywood, every experience begins with the people behind the magic. We believe in nurturing talent, encouraging continuous learning and creating opportunities for our team to grow. With a focus on skill development and hands-on training, we empower our employees to take on new challenges with confidence. </p>
  <p className='white'>Our advanced training facilities and simulation-based learning help our operations and maintenance teams prepare for real-world scenarios. Join us to be part of a dynamic environment where creativity, teamwork and passion come together to create unforgettable experiences for every guest.</p>
</div>

  <div className={style.image}>
    <Image src="/assets/images/career-img.png" width={605} height={538} alt=''/>
  </div>

</div>




</section>

{/* form section  */}
<section className={`common_section yellow_section ${style.form_section}`}>

<div className={`container ${style.container}`}>

<div className={style.content}>
  <h2 className='common_heading'>Step Into A World Of Opportunities.</h2>
  <p className=''>Discover exciting career opportunities at VELS Jollywood and become a part of a team that brings joy, entertainment and unforgettable memories to life. Share your details with us and take the first step towards building your future with us.
</p>
</div>

  <div className={style.form_area}>
    <h2 className='purple'>Join with Us!</h2>

    {state?.error && <p role="alert">{state.error}</p>}
    {state?.success && <p role="status">Thank you! Your application has been received. Our team will get back to you soon.</p>}

    <form className='black_fields' action={formAction} key={state?.success ? "submitted" : "career-form"} aria-busy={pending}>
      <label htmlFor='careerFirstName' className='sr_only'>First Name</label>
      <input id='careerFirstName' name='firstName' type='text' className='half_cont input_field' placeholder='First Name *' required></input>

      <label htmlFor='careerLastName' className='sr_only'>Last Name</label>
      <input id='careerLastName' name='lastName' type='text' className='half_cont input_field' placeholder='Last Name *' required></input>

      <label htmlFor='careerMobileNumber' className='sr_only'>Mobile Number</label>
      <input id='careerMobileNumber' name='mobileNumber' type='tel' className='half_cont input_field' placeholder='Mobile Number *' required></input>

      <label htmlFor='careerEmail' className='sr_only'>Email Address</label>
      <input id='careerEmail' name='email' type='email' className='half_cont input_field' placeholder='Email Address *' required></input>

      <label htmlFor='careerDesignation' className='sr_only'>Current Designation</label>
      <input id='careerDesignation' name='currentDesignation' type='text' className='half_cont input_field' placeholder='Current Designation'></input>

      <label htmlFor='careerExperience' className='sr_only'>Relevant Experience</label>
      <input id='careerExperience' name='relevantExperience' type='text' className='half_cont input_field' placeholder='Relevant Experience'></input>

      <div className='file_upload full_cont'>
        <label htmlFor='resumeFile' className='input_field'> Upload Resume </label>
<input type='file' id='resumeFile' name='resume' accept='.pdf,.doc,.docx' hidden className='half_cont'></input>
      </div>

      <label htmlFor='careerCoverLetter' className='sr_only'>Cover Letter</label>
      <textarea id='careerCoverLetter' name='coverLetter' className='full_cont' placeholder='Cover Letter'></textarea>
<button className='common_btn black_shadow black_text white_bg left_tilt' type='submit' disabled={pending}>{pending ? "Submitting..." : "Apply now"} <Image src="/assets/images/yellow-arrow.svg" width={24} height={24} alt=''/></button>



    </form>
  </div>

</div>

</section>




    </>
  )
}
