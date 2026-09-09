"use client"

import React, { useEffect, useState } from 'react'
import style from '@/app/(site)/components/ui/contentList.module.css'
import '../innerpage.css'
import Image from 'next/image'



// visitors data
const VisitorsData = [
  {
    icon:"/assets/images/alcohol.svg",
    title:"Alcohol",
    content:"Alcoholic beverages are available for purchase at designated locations within the park. However, outside alcohol is not permitted."
  },
   {
    icon:"/assets/images/baby-care.svg",
    title:"Baby Care",
    content:"At Jollywood Studios & Adventures, we prioritize the needs of our young guests and their families. We offer dedicated lounge facilities, changing stations, and baby switch services to ensure a pleasant experience for all."
  },
    {
    icon:"/assets/images/breakfast.svg",
    title:"Breakfast",
    content:"Start your day off right by enjoying a delicious breakfast at our restaurants. Breakfast is served daily from 11:00 am onwards."
  },
    {
    icon:"/assets/images/dress.svg",
    title:"Dress Code",
    content:"To maintain hygiene and safety, we enforce a dress code within the park. When participating in water rides, please wear appropriate nylon attire such as t-shirts, shorts, bermudas, three-fourths, or swimwear. Outfits such as sarees, churidars/salwars, dupatta, formal pants, shirts, burkhas/pardas, school uniforms, denims (jeans and three-fourth jeans), cargos, and similar clothing are not permitted in the water park and certain high thrill rides."
  },
    {
    icon:"/assets/images/credit.svg",
    title:"Credit Card & Payment Options",
    content:"We accept Visa and Mastercard debit/credit cards issued in India as payment options at all our restaurants, retail stores, and admission counters."
  },
    {
    icon:"/assets/images/disability.svg",
    title:"Disability Support",
    content:"We provide wheelchair rentals at the Main Entrance for a nominal fee. Wheelchair accessibility is available at restaurants and several attractions, and wheelchair-accessible toilets are located throughout the park."
  },
    {
    icon:"/assets/images/first-aid-i.svg",
    title:"First Aid Facility",
    content:"Our park is equipped with a fully equipped first aid facility staffed by certified medical professionals to address any medical concerns or emergencies promptly."
  },
    {
    icon:"/assets/images/info-i.svg",
    title:"Information Kiosks",
    content:"Guests can visit the Information Centre & Guest Relations Counter situated at the Park Entrance for any inquiries. Our friendly staff members are also available throughout the park to assist with any queries."
  },
    {
    icon:"/assets/images/locker.svg",
    title:"Lockers & Baggage Counters",
    content:"Limited Locker Counter available inside the water park area (Aquaventure) for rental of Rs 200/- and refundable deposit of Rs 100/- at the time of returning the Key."
  },
    {
    icon:"/assets/images/lost.svg",
    title:"Lost & Found",
    content:"In the event that you misplace an item, our Lost & Found desk is located at the Entrance. While we cannot guarantee the safety of your belongings, any items found by fellow guests may be deposited here to help reunite them with their owners. Please take care of your valuables."
  },
    {
    icon:"/assets/images/parking-i.svg",
    title:"Parking",
    content:"We provide ample parking on a first-come, first-served basis. Please collect a parking ticket upon entering the park, and a parking fee will apply."
  },
    {
    icon:"/assets/images/photography.svg",
    title:"Photography & Delightful Memories",
    content:"DSLR camera not allowed inside the park."
  },
    {
    icon:"/assets/images/restroom.svg",
    title:"Restrooms & Changing Facilities",
    content:"Restrooms are conveniently located throughout the park, all of which are wheelchair accessible. Ladies' restrooms in the Park are equipped with changing stations for babies."
  },
    {
    icon:"/assets/images/restrict.svg",
    title:"Ride Restrictions",
    content:"Each attraction has its own specific restrictions. It is important to note that several rides prohibit the use of loose articles such as GoPro cameras, selfie sticks, glasses, mobile phones, pens, and cameras."
  },
   {
    icon:"/assets/images/seating.svg",
    title:"Seating & Shaded Areas",
    content:"We provide ample seating options throughout the park."
  },

]



export default function VisitorsClient() {

  

  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Visitors Guide</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.contentList_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>We are thrilled to have you join us and aim to ensure that your visit is both enjoyable and seamless. This comprehensive guide has been created to provide you with all the essential information needed to navigate our park, discover our attractions, and make the most of your time with us.</p>
      </div>
    </div>

  <div className={style.content}>

    {VisitorsData && VisitorsData.map((item,index)=>(
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
