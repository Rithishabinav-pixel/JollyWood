"use client"

import React, { useEffect, useState } from 'react'
import style from '@/app/(site)/components/ui/contentList.module.css'
import '../innerpage.css'
import Image from 'next/image'



// privacy policy data
const PrivacyPolicyData = [
  {
    title: "Information We Collect",
    content:
      "We may collect certain personal information from you when you visit our website, make a reservation, purchase tickets, subscribe to our newsletter, participate in surveys, or interact with our online platforms. The types of personal information we may collect include:",
    listContent: [
      "Name, email address, postal address, and telephone number.",
      "Payment and billing information.",
      "Demographic information.",
      "Information about your preferences and interests.",
    ],
  },
  {
    title: "Use of Personal Information",
    content:
      "We use the personal information we collect for various purposes, including:",
    listContent: [
      "Providing you with the services you request, such as processing reservations and ticket purchases and sending booking confirmations.",
      "Sending you promotional offers, newsletters, and marketing communications, subject to your preferences and applicable laws.",
      "Conducting surveys and market research to improve our services and better understand your needs and preferences.",
      "Personalizing your experience on our website and platforms.",
      "Protecting the security and integrity of our website and preventing fraud.",
      "Complying with legal obligations and resolving any disputes.",
    ],
  },
  {
    title: "Sharing of Personal Information",
    content:
      "We may share your personal information with our corporate entities and affiliates to facilitate joint or co-branded services. We may also disclose personal information if required by law or in good faith belief that such disclosure is necessary to respond to legal processes, protect our rights, or enforce our terms and conditions.",
    listContent: [],
  },
  {
    title: "Third-Party Sharing & Storage",
    content: "",
    listContent: [
      "Meta Platforms: We may use Meta-hosted services to store and manage our WhatsApp chat history. This means Meta may process these messages on our behalf to improve business tools.",
      "End-to-End Encryption: Personal messages between you and Jollywood Studios remain end-to-end encrypted; however, once received, they are governed by our company's privacy practices.",
    ],
  },
  {
    title: "Prohibited AI Use (2026 Update)",
    content: "",
    listContent: [
      "Task-Oriented AI: We may use AI for specific customer service functions (like booking or support), but we do not use general-purpose AI assistants that distribute AI technology for unrelated purposes.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We may use cookies and similar tracking technologies to analyse website traffic, enhance your browsing experience, and provide personalized content. You can adjust your browser settings to refuse cookies, but please note that certain features and functionalities of our website may not be accessible.",
    listContent: [],
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of third-party websites before providing any personal information.",
    listContent: [],
  },
  {
    title: "Security Measures",
    content:
      "We have implemented reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no data transmission over the internet or storage system is completely secure. We cannot guarantee the absolute security of your personal information.",
    listContent: [],
  },
  {
    title: "Updates to Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website. Please review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information.",
    listContent: [],
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at : Vels Studios & Entertainment Pvt Ltd, Plot No 24 & 26, Bidadi Industrial Area, Ramanagara District, Bidadi - 562 109.",
    listContent: [],
  },
];



export default function PrivacyClient() {

  

  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Privacy Policy</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.contentList_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>This Privacy Policy explains how Jollywood Studios & Adventure ("we," "us," or "our") collects, uses, and discloses your personal information when you visit our website, use our services, or interact with us.</p>
      </div>
    </div>

  <div className={style.content}>

    {PrivacyPolicyData && PrivacyPolicyData.map((item,index)=>(
      <div className={style.card} key={index}>

        <div className={style.detail}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          {item.listContent && 
          <ul>
            {item.listContent.map((list,index)=>(
              <React.Fragment key={index}>
              <li>{list}</li>
              </React.Fragment>
            ))}
          </ul>
          }
        </div>
      </div>
    ))}
   
  </div>

</div>




</section>


    </>
  )
}
