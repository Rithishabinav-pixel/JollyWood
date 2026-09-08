"use client"

import React, { useEffect, useState } from 'react'
import style from './DryRides.module.css'
import '../innerpage.css'
import Image from 'next/image'


// rides data 
const RidesData = [
 {
  logo: "/assets/images/sky-swinger-logo.png",
  logoSize: [150, 85],
  title: "Sky Swinger",
  content:
    "Take a ride on the Sky Swinger, a classic swing ride that will lift you high into the air and give you a bird's eye view of the park. With its gentle swinging motion and stunning views, the Sky Swinger is a great way to relax and enjoy the sights.",
  rules: [
    {
      label: "ageAllowed",
      value: "16+"
    },
    {
      label: "height",
      value: "140+ cm"
    },
    {
      label: "weight",
      value: "6+ kg"
    }
  ],
  image: "/assets/images/sky-swinger.png"
},
  {
  logo: "/assets/images/bc-logo.png",
  logoSize: [193, 85],
  title: "Bumper Car",
  content:
    "For a more action-packed experience, climb aboard our bumper cars and let the fun begin! These classic cars are equipped with bumpers so you can crash into your friends and family without getting hurt. It's a great way to release some energy and have a good laugh.",
  rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "106+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  image: "/assets/images/bc-img.png"
},
{
  logo: "/assets/images/sb-logo.png",
  logoSize: [193, 85],
  title: "Samba Balloon",
  content:
    "The Samba Balloon is a ride that combines the thrill of spinning with the excitement of going up and down. You'll be seated in a balloon-shaped gondola that rotates and lifts up and down, giving you a feeling of weightlessness as you soar through the air.",
  rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "64+ cm"
    },
    {
      label: "weight",
      value: "60+ kg"
    }
  ],
  image: "/assets/images/sb-img.png"
},
{
  logo: "/assets/images/carousel-logo.png",
  logoSize: [193, 85],
  title: "Carousel",
  content:
    "Take a step back in time with our classic carousel ride. Featuring beautifully crafted horses and other animals that go up and down, the carousel is a ride that appeals to all ages. It's perfect for families with young children who want a gentle and nostalgic ride.",
  rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "137+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  image: "/assets/images/carousel-img.png"
},
{
  logo: "/assets/images/sky-swinger-logo.png",
  logoSize: [150, 85],
  title: "Sky Swinger",
  content:
    "Take a ride on the Sky Swinger, a classic swing ride that will lift you high into the air and give you a bird's eye view of the park. With its gentle swinging motion and stunning views, the Sky Swinger is a great way to relax and enjoy the sights.",
  rules: [
    {
      label: "ageAllowed",
      value: "16+"
    },
    {
      label: "height",
      value: "140+ cm"
    },
    {
      label: "weight",
      value: "6+ kg"
    }
  ],
  image: "/assets/images/sky-swinger.png"
},
  {
  logo: "/assets/images/bc-logo.png",
  logoSize: [193, 85],
  title: "Bumper Car",
  content:
    "For a more action-packed experience, climb aboard our bumper cars and let the fun begin! These classic cars are equipped with bumpers so you can crash into your friends and family without getting hurt. It's a great way to release some energy and have a good laugh.",
  rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "106+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  image: "/assets/images/bc-img.png"
},
{
  logo: "/assets/images/sb-logo.png",
  logoSize: [193, 85],
  title: "Samba Balloon",
  content:
    "The Samba Balloon is a ride that combines the thrill of spinning with the excitement of going up and down. You'll be seated in a balloon-shaped gondola that rotates and lifts up and down, giving you a feeling of weightlessness as you soar through the air.",
  rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "64+ cm"
    },
    {
      label: "weight",
      value: "60+ kg"
    }
  ],
  image: "/assets/images/sb-img.png"
},
{
  logo: "/assets/images/carousel-logo.png",
  logoSize: [193, 85],
  title: "Carousel",
  content:
    "Take a step back in time with our classic carousel ride. Featuring beautifully crafted horses and other animals that go up and down, the carousel is a ride that appeals to all ages. It's perfect for families with young children who want a gentle and nostalgic ride.",
  rules: [
    {
      label: "ageAllowed",
      value: "12+"
    },
    {
      label: "height",
      value: "137+ cm"
    },
    {
      label: "weight",
      value: "20+ kg"
    }
  ],
  image: "/assets/images/carousel-img.png"
}
]


const ruleIcons = {
  ageAllowed: "/assets/images/age-allowed.svg",
  height: "/assets/images/height.svg",
  weight: "/assets/images/weight.svg",
};



export default function DryRidesClient() {


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
        <h1 className={`title common_heading white`}>Dry Rides</h1>
    </div>
</section>


{/* rides section  */}
<section className={` ${style.rides_section} no_padding_top common_section`}>
    <div className={`container`}>
       <div className={style.ride_cards}>

    {RidesData && RidesData.map((item,index)=>(
      <div className={style.card} key={index}>
        <div className={style.content}>
            <Image className={style.logo} src={item.logo} width={item.logoSize [0]} height={item.logoSize[1]} alt={item.title}/>
<h2>{item.title}</h2>
<p>{item.content}</p>
<div className={style.rules}>
  {item.rules.map((rule) => (
    <div className={style.rule} key={rule.label}>
      <div className={style.icon}>
        <Image
          src={ruleIcons[rule.label]}
          width={40}
          height={40}
          alt=""
        />
      </div>

      <div className={style.detail}>
        <span>{rule.label==="ageAllowed"?"Age Allowed":rule.label}</span>
        <p>{rule.value}</p>
      </div>
    </div>
  ))}
</div>
        </div>
        <div className={style.image} style={{backgroundImage: !mobile ? `url("${item.image}")` : "none"}}>
         {mobile?<Image src={item.image} width={420} height={547} alt={item.title}/>:""} 
        </div>
      </div>
    ))}

       </div>
    </div>
</section>


    </>
  )
}
