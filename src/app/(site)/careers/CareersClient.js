"use client"

import React, { useEffect, useState, useActionState } from 'react'
import style from './Careers.module.css'
import '../innerpage.css'
import Image from 'next/image'
import '@/app/(site)/components/ui/form.css'
import { submitCareerEnquiry } from './actions'




export default function CareersClient() {

  const [state, formAction, pending] = useActionState(submitCareerEnquiry, undefined)

   const [mobile,setMobile] = useState(false);
        
        
          useEffect(()=>{
        
            const checkDevice = () => { setMobile(window.innerWidth <= 1200); };
        
        
            checkDevice();
        
           window.addEventListener("resize", checkDevice);
        
            return () => {
              window.addEventListener("resize", checkDevice);
              };
        
          },[])


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
  <h2 className='common_heading white'>Life @ <br className='desktop_break'/>Vels Jollywood</h2>
  <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
  <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
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
  <h2 className='common_heading'>Explore your opportunities at VELS Jollywood</h2>
  <p className=''>Our prime focus is also on training and development to equip our workforce to face challenges in a competitive environment. VELS Jollywood believes in continuous upgradation of skills of its employees. A state of the art simulator has been installed for providing training to our operations and maintenance professionals in simulating real time problems and finding solutions for them.</p>
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
