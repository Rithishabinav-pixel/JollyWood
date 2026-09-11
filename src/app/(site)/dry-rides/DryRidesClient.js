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
    title: "Bumper Car",
    content:
      "Crash. Laugh. Repeat. Get behind the wheel and enjoy a fun-filled ride where friendly collisions create unforgettable moments. Challenge your friends, take control and enjoy a classic bumper car experience made for endless laughter.",
    rules: [
      { label: "ageAllowed", value: "12+" },
      { label: "height", value: "106+ cm" },
      { label: "weight", value: "20+ kg" }
    ],
    image: "/assets/images/bc-img.png"
  },
  {
    logo: "/assets/images/carousel-logo.png",
    logoSize: [193, 85],
    title: "Carousel",
    content:
      "A classic ride full of charm. Take a nostalgic spin on our beautifully crafted carousel. With colourful designs and gentle movement, it is the perfect ride for families looking for a joyful experience together.",
    rules: [
      { label: "ageAllowed", value: "12+" },
      { label: "height", value: "137–195 cm" }
    ],
    image: "/assets/images/carousel-img.png"
  },
  {
    logo: "/assets/images/sb-logo.png",
    logoSize: [193, 85],
    title: "Jolly Tornado",
    content:
      "The gravity tester begins. Hold on tight as the Jolly Tornado takes you through a thrilling experience that tests your balance, courage and excitement. How long can you float through the twist?",
    rules: [
      { label: "ageAllowed", value: "" },
      { label: "height", value: "" },
      { label: "weight", value: "" }
    ],
    image: "/assets/images/sb-img.png"
  },
  {
    logo: "/assets/images/sky-swinger-logo.png",
    logoSize: [150, 85],
    title: "Midi Dance Party",
    content:
      "Spin. Dance. Feel the beat. Lights, music and movement come together in this energetic ride. Get ready for a spinning experience filled with rhythm, excitement and nonstop fun with your friends.",
    rules: [
      { label: "ageAllowed", value: "12+" },
      { label: "height", value: "137–195 cm" }
    ],
    image: "/assets/images/sky-swinger.png"
  },
  {
    logo: "/assets/images/bc-logo.png",
    logoSize: [193, 85],
    title: "Mini Tagada",
    content:
      "Hold on. The fun is spinning. Get ready for a high-energy ride that twists, bounces and keeps the excitement going. With music and motion combined, Mini Tagada is a thrilling experience you won't forget.",
    rules: [
      { label: "ageAllowed", value: "12+" },
      { label: "height", value: "143+ cm" }
    ],
    image: "/assets/images/bc-img.png"
  },
  {
    logo: "/assets/images/sb-logo.png",
    logoSize: [193, 85],
    title: "Samba Balloon",
    content:
      "Float high. Spin higher. Hop into a balloon-shaped gondola and enjoy a colourful ride filled with twists, turns and exciting movements. A perfect adventure for those who love a little spin in the sky.",
    rules: [
      { label: "ageAllowed", value: "12+" },
      { label: "height", value: "64+ cm" }
    ],
    image: "/assets/images/sb-img.png"
  },
  {
    logo: "/assets/images/sky-swinger-logo.png",
    logoSize: [150, 85],
    title: "Sky Swinger",
    content:
      "Swing high. See more. Rise above the park and enjoy breathtaking views with this classic swing ride. Feel the breeze, enjoy the gentle motion and experience a thrilling ride from a whole new height.",
    rules: [
      { label: "ageAllowed", value: "12+" },
      { label: "height", value: "137+ cm" }
    ],
    image: "/assets/images/sky-swinger.png"
  },
  {
    logo: "/assets/images/carousel-logo.png",
    logoSize: [193, 85],
    title: "360 Cycle",
    content:
      "Turn your world upside down. Take on a unique cycling challenge that tests your balance and control. A fun-filled experience for adventure seekers ready to push their limits.",
    rules: [
      { label: "height", value: "3 ft - 6 ft" },
      { label: "weight", value: "35 kg - 90 kg" }
    ],
    image: "/assets/images/carousel-img.png"
  },
  {
    logo: "/assets/images/sky-swinger-logo.png",
    logoSize: [150, 85],
    title: "Wall Climbing",
    content:
      "Climb. Challenge. Conquer. How high can you go? Push your limits and test your strength as you climb your way to the top. A thrilling challenge designed for adventure seekers who love reaching new heights.",
    rules: [
      { label: "ageAllowed", value: "" },
      { label: "height", value: "" },
      { label: "weight", value: "" }
    ],
    image: "/assets/images/sky-swinger.png"
  },
  {
    logo: "/assets/images/bc-logo.png",
    logoSize: [193, 85],
    title: "Adventure Games",
    content:
      "Challenge yourself. Challenge your friends. Let the adventure begin! Bring out your competitive spirit with exciting games designed to test your skills, teamwork and determination. Every challenge brings a new reason to play.",
    rules: [
      { label: "ageAllowed", value: "" },
      { label: "height", value: "" },
      { label: "weight", value: "" }
    ],
    image: "/assets/images/bc-img.png"
  },
  {
    logo: "/assets/images/sb-logo.png",
    logoSize: [193, 85],
    title: "Toy Car Ride for Kids",
    content:
      "Tiny drivers, big smiles! Let the little ones hit the road for a joyful ride. A fun-filled driving experience designed for little adventurers. Watch them take the wheel, explore freely and create their first driving memories.",
    rules: [
      { label: "ageAllowed", value: "" },
      { label: "height", value: "" },
      { label: "weight", value: "" }
    ],
    image: "/assets/images/sb-img.png"
  }
];


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
            window.removeEventListener("resize", checkDevice);
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
