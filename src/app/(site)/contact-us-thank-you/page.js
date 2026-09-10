import React from 'react'
import '../../(site)/components/ui/ThankYou.css'
import Button from '../components/ui/Button'

export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting Vels Jollywood. We have received your enquiry.",
};

export default function page() {
  return (
    
<section className='thank_you_section'>
    <div className='container'>
        <h1 className='common_heading white'>Thank You</h1>
        <p className='white'>Thank you for getting in touch with us. We’ve received your enquiry successfully.</p>
        <p className='white'>Our team will review your message and get back to you as soon as possible. We appreciate your interest and look forward to connecting with you.</p>
          <Button href="/" text="GoTo Home" className="common_btn orange_bg black_text right_tilt"></Button>
        
    </div>
</section>

  )
}
