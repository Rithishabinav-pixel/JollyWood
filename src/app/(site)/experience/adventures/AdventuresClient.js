"use client"

import React, { useEffect, useState } from 'react'
import style from './Adventures.module.css'
import '../../innerpage.css'
import Image from 'next/image'


// Adventures data
const AdventuresData = [
  {
    image: "/assets/images/high-ropes-course.png",
    title: "High Ropes Course",
    content:
      "Rise above the challenge. Take on a thrilling aerial adventure that tests your balance, strength and confidence. Navigate through exciting obstacles while pushing your limits and creating unforgettable moments.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+ Years"
      },
      {
        label: "Height",
        value: "140+ cm"
      }
    ]
  },

  {
    image: "/assets/images/zipline.png",
    title: "Zipline",
    content:
      "Take the leap. Feel the rush. Soar through the air and experience the thrill of speed as you glide across the zipline. A high-energy adventure that brings excitement, courage and unforgettable views.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+ years"
      },
      {
        label: "Height",
        value: "140+ cm"
      }
    ]
  },

  {
    image: "/assets/images/rock-climbing.png",
    title: "Rock Climbing",
    content:
      "Climb higher. Push harder. Challenge yourself on a thrilling climbing wall that tests your strength, focus and determination. Reach the top, overcome obstacles and celebrate every achievement along the way.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+ years"
      },
      {
        label: "Height",
        value: "140+ cm"
      }
    ]
  },

  {
    image: "/assets/images/obstacle-course.png",
    title: "Obstacle Course",
    content:
      "Challenge accepted. Teamwork activated. Work together, overcome obstacles and test your coordination through an exciting course filled with walls, ropes, and balance challenges. This is the perfect adventure to build confidence and teamwork.",
    rules: [
      {
        label: "ageAllowed",
        value: "12+ years"
      },
      {
        label: "Height",
        value: "140+ cm"
      }
    ]
  },

  {
    image: "/assets/images/rock-climbing.png",
    title: "Archery Tag",
    content:
      "Aim. Strategize. Conquer. Combine the thrill of archery with the excitement of a team battle. Test your accuracy, build strategies and compete with your team in this action-packed adventure.",
    rules: [
      {
        label: "ageAllowed",
        value: "16+ years"
      },
      {
        label: "Height",
        value: "160+ cm"
      }
    ]
  },

  {
    image: "/assets/images/obstacle-course.png",
    title: "Maze Runner",
    content:
      "Find your way. Beat the maze. Enter a world of twists, turns and challenges where every step tests your problem-solving skills. Navigate through the maze and race towards the ultimate escape.",
    rules: []
  },

  {
    image: "/assets/images/zipline.png",
    title: "Speed - Go Kart",
    content:
      "Satisfy your need for speed and race against your friends and family at our specially designed track with sharp turns and challenging terrain, making for an exciting and competitive race experience.",
    rules: [
      {
        label: "Height",
        value: "140+ cm"
      },
      {
        label: "ageAllowed",
        value: "11+ years"
      }
    ]
  },

  {
    "image": "/assets/images/zipline.png",
    "title": "Rocket Ejection",
    "content": "**Ready for liftoff?** Feel the rush as you’re propelled upward in an adrenaline-filled experience that takes you from the ground to the sky in seconds. Hold on tight and enjoy the thrill of a rapid rise.",
    "rules": [
      {
        "label": "Height",
        "value": "4–7 ft"
      },
      {
        "label": "Weight",
        "value": "45–90 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Human Gyro",
    "content": "**Spin. Twist. Find your balance.** Step into a spinning challenge that puts your balance and body control to the test. Keep yourself steady as the motion takes over and see how well you can handle the Human Gyro.",
    "rules": [
      {
        "label": "Height",
        "value": "3–5.5 ft"
      },
      {
        "label": "Weight",
        "value": "40–80 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Melt Down",
    "content": "**Hold on. Things are about to get wobbly!** Take on a playful balance challenge where staying upright is half the fun. Keep your footing, find your balance and see how long you can keep from having your very own Melt Down.",
    "rules": [
      {
        "label": "Height",
        "value": "3–6 ft"
      },
      {
        "label": "Weight",
        "value": "15–70 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Sky Cycle",
    "content": "**Pedal above the ground.** Take your cycling skills sky-high as you pedal your way through an elevated adventure. Balance, focus and keep moving as you enjoy a whole new perspective from above.",
    "rules": [
      {
        "label": "Height",
        "value": "3+ ft"
      },
      {
        "label": "Weight",
        "value": "85 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Single Zip Bike",
    "content": "**Pedal. Zip. Feel the rush.** Hop onto a bike and take your ride beyond the usual. Combine cycling with the thrill of a zip experience as you move through an elevated adventure that puts your balance to the test.",
    "rules": [
      {
        "label": "Height",
        "value": "4.8–6 ft"
      },
      {
        "label": "Weight",
        "value": "30–90 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Tyre Climbing",
    "content": "**Climb on. Challenge yourself.** Put your strength and balance to work as you take on a climbing challenge using tyres. Find your footing, keep your grip and make your way higher with every move.",
    "rules": [
      {
        "label": "Weight",
        "value": "20–90 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Bull Ride",
    "content": "**Think you can stay on?** Take your seat and test your balance as the bull puts your riding skills to the test. Hold on through every movement and see how long you can stay in control.",
    "rules": [
      {
        "label": "Height",
        "value": "3–6 ft"
      },
      {
        "label": "Weight",
        "value": "15–80 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Bungee Trampoline",
    "content": "**Bounce higher. Dream bigger.** Take your trampoline experience up a notch with the help of bungee support. Jump, bounce and enjoy the freedom to go higher while turning every leap into a little adventure.",
    "rules": [
      {
        "label": "Height",
        "value": "3–5 ft"
      },
      {
        "label": "Weight",
        "value": "15–50 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Double Zip Bike",
    "content": "**Two riders. Twice the fun.** Grab a partner and take on an elevated cycling experience together. Pedal, balance, and enjoy the thrill side by side as you make your way through the adventure.",
    "rules": [
      {
        "label": "Weight",
        "value": "35–160 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Trampoline Park",
    "content": "**Bounce. Jump. Show off your moves.** A whole space dedicated to jumping, bouncing and having fun. Move from one bounce to the next, challenge your friends and let loose in a park built for energetic fun.",
    "rules": [
      {
        "label": "Height",
        "value": "3–7 ft"
      },
      {
        "label": "Weight",
        "value": "10–75 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Trampoline",
    "content": "**Let little feet take flight.** Give the little ones a space to jump, bounce and burn off some energy. Designed for younger adventurers, it’s a simple, playful experience filled with movement and big smiles.",
    "rules": [
      {
        "label": "ageAllowed",
        "value": "3–8 years"
      },
      {
        "label": "Weight",
        "value": "15–40 kg"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Archery",
    "content": "**Aim. Focus. Hit the bullseye.** Pick up your bow, take aim and put your accuracy to the test. Stay focused, steady your shot and see how close you can get to the centre.",
    "rules": [
      {
        "label": "ageAllowed",
        "value": "15+ years"
      }
    ]
  },
  {
    "image": "/assets/images/zipline.png",
    "title": "Gun Shoot",
    "content": "**Ready. Aim. Hit the mark.** Step up, steady your aim and put your accuracy to the test. Focus on your target and see how precisely you can hit the mark.",
    "rules": [
      {
        "label": "ageAllowed",
        "value": "15+ years"
      }
    ]
  }
];






const ruleIcons = {
  ageAllowed: "/assets/images/age-allowed.svg",
  Height: "/assets/images/height.svg",
  Weight: "/assets/images/weight.svg",
};


export default function AdventuresClient() {


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Adventures</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.adventure_section}`}>

<div className={`container section_container ${style.container}`}>

<div className={style.cards}>
{AdventuresData && AdventuresData.map((item,index)=>(


<div className={style.card} key={index}>
  <div className={style.image}>
    <Image src={item.image} width={720} height={535} alt=''/>
  </div>
  <div className={style.content}>
    <h2 className="">{item.title}</h2>
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
</div>
))}
</div>


</div>




</section>


    </>
  )
}
