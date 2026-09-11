import React from 'react'
import '../../(site)/components/ui/ThankYou.css'
import Button from '../components/ui/Button'

export const metadata = {
  title: "Thank You",
  description: "Thank you for your corporate event enquiry with Vels Jollywood.",
};

export default function page() {
  return (

<section className='thank_you_section'>
    <div className='container'>
        <h1 className='common_heading white'>Thank You</h1>
        <p className='white'>Thank you for your interest in hosting your event with us. We’ve received your enquiry successfully.</p>
        <p className='white'>Our team will review your details and get back to you shortly. We appreciate your interest and look forward to making your event memorable.</p>
          <Button href="/" text="GoTo Home" className="common_btn orange_bg black_text right_tilt"></Button>

    </div>
</section>

  )
}
