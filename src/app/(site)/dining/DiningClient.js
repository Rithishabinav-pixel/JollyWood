"use client"

import React, { useEffect, useState } from 'react'
import style from './Dining.module.css'
import '../innerpage.css'
import Image from 'next/image'




// Food Souk tab data
const FoodSoukTabData = [
  {
    image:"/assets/images/food1.png",
    video:"/assets/videos/food-souk.mp4",
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'
  },
   {
    image:"/assets/images/food2.png",
    video:"/assets/videos/food-souk.mp4",
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'
  },
   {
    image:"/assets/images/food3.png",
    video:"/assets/videos/food-souk.mp4",
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'

  },
   {
    image:"/assets/images/food4.png",
    video:"/assets/videos/food-souk.mp4",
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'

  },
   {
    image:"/assets/images/food5.png",
    video:"/assets/videos/food-souk.mp4",
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'

  },
]

export default function DiningClient() {



      const [foodContainerData,setFoodContainerData] = useState(0)
    

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
        <h1 className={`title common_heading white`}>Dining</h1>

{/* Characters  */}
<Image className={`${style.character} ${style.character_1}`} src="/assets/images/duck.png" width={480} height={497} alt=''/>
<Image className={`${style.character} ${style.character_2}`} src="/assets/images/panda.png" width={529} height={507} alt=''/>

    </div>
</section>

{/* food souk section */}
<section className={`common_section ${style.food_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left ${style.left}`}>
        <h2 className='common_heading white'>The Food Souk</h2>
        <h3 className='white'>Where every craving finds its flavour. A culinary journey filled with variety, taste and memorable moments.</h3>
        <p className='white'>From local favourites to global flavours, Food Souk brings together diverse dining experiences in one lively space. With five restaurants serving delicious creations, it’s the perfect stop to relax, recharge and enjoy great food with your loved ones.</p>
      </div>

       <div className={`right ${style.right}`}>
        <div className={style.tabs}>
      {FoodSoukTabData.map((item,index)=>(
        <button key={index} onClick={()=>setFoodContainerData(index)}> <Image src={item.image} width={540} height={293} alt='Food Souk'/></button>
      ))}
    </div>
       </div>

    </div>


<div className={style.tabContainer}>
<video width="1920" height="1080" autoPlay loop muted preload="none">
      <source src={FoodSoukTabData[foodContainerData].video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
<div className={style.content}>
    <Image src={FoodSoukTabData[foodContainerData].image} width={540} height={292} alt=""/>
    <p dangerouslySetInnerHTML={{__html:FoodSoukTabData[foodContainerData].content}}/>
</div>
</div>




  </div>
</section>


{/* wave section */}
<section className={`common_section no_padding_top ${style.wave_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading center_align ${style.top_heading}`}>

      <div className={`left`}>
        <h2 className='common_heading white'>The Wave Bistro</h2>
        <h3 className='white'>A taste of paradise awaits. Dine, unwind and enjoy the perfect tropical escape.</h3>
      </div>

    </div>


<div className={style.waveContainer}>
<div className={style.image}>
    <Image src="/assets/images/wave1.png" width={870} height={698} alt=''/>
</div>
<div className={style.content}>
    <Image src="/assets/images/wave-logo.svg" width={188} height={235} alt=''/>
    <p className=''>Located beside a wave pool and a sandy beach, The Wave Bistro brings together delicious food and a refreshing tropical ambience. Surrounded by swaying coconut trees and scenic views, it offers the perfect setting to unwind after a day of adventure.</p>
    <p className=''>Enjoy a diverse menu featuring local and international flavours while relaxing with family and friends in a vibrant beachside atmosphere. Whether it’s a casual meal, a special gathering or a memorable evening by the shore, The Wave Bistro turns every dining moment into a delightful escape.</p>
</div>
<div className={style.image}>
    <Image src="/assets/images/wave2.png" width={870} height={698} alt=''/>
</div>
</div>




  </div>
</section>


{/* royal section */}
<section className={`common_section yellow_section ${style.royal_section}`}>

        <Image className={style.panda} src="/assets/images/royal_panda.png" width={507} height={561} alt=''/>


  <div className={`container section_container ${style.container}`}>


    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left ${style.left}`}>
        <h2 className='common_heading purple'>Royal Kitchens of India </h2>
        <h3 className=''>A royal feast of Indian flavours. Indulge in a grand dining experience crafted with tradition.</h3>
        <p>Step into Royal Kitchens of India, where authentic Indian flavours meet a grand dining experience. Designed with a regal ambience inspired by the majestic palaces of India, the restaurant offers a lavish buffet featuring a diverse selection of vegetarian and non-vegetarian delicacies. From aromatic biryanis and flavourful curries to traditional favourites and delightful desserts, every dish celebrates the rich culinary heritage of India.</p>
        <p>With carefully crafted recipes, warm hospitality and an elegant setting, Royal Kitchens of India creates the perfect experience for family gatherings, celebrations and memorable meals.</p>
      </div>

    </div>


  </div>
</section>



{/* planet section */}
<section className={`common_section ${style.planet_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading center_align ${style.top_heading}`}>

      <div className={`left`}>
        <h2 className='common_heading white'>Planet Jollywood</h2>
        <h3 className='white'>Lights. Camera. Delicious! A star-studded dining experience awaits.</h3>
        <p className='white'>Planet VELS Jollywood, where the magic of cinema meets the joy of dining. Inspired by Hollywood’s iconic era, this unique destination brings together movie-inspired ambience, legendary memorabilia and flavours crafted to delight. From themed dishes to an unforgettable atmosphere, every moment here feels like a scene from your favourite film. Experience a dining adventure where every plate tells a story.</p>
      </div>

    </div>

     </div>
    <div className={`container full_container strict_full`}>


<div className={style.planetContainer}>
<div className={style.image}>
    <Image src="/assets/images/planet.png" width={720} height={513} alt=''/>
</div>

<div className={style.image}>
    <Image src="/assets/images/planet_c.png" width={720} height={513} alt=''/>
</div>

<div className={style.image}>
    <Image src="/assets/images/planet.png" width={720} height={513} alt=''/>
</div>

</div>




  </div>
</section>



{/* kitchen section */}
<section className={`common_section no_padding_top ${style.kitchen_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left`}>
        <h2 className='common_heading white'>Container Kitchen</h2>
        <p className='white'>Take a break from the excitement and treat yourself to quick, satisfying bites at Container Kitchen. Designed for explorers on the move, it’s the perfect place to recharge before your next unforgettable experience. </p>
      </div>
    </div>

<div className={style.kitchenContainer}>
<div className={style.image}>
    <Image src="/assets/images/bc.png" width={870} height={600} alt=''/>
    <div>
        <h3 className='white'>Beach Container</h3>
        <p className='white'><strong>Quick bites. Cool vibes. Beachside fun. The perfect pit stop for every hungry adventurer!</strong><br/>Enjoy delicious quick bites in a relaxed beachside setting. A refreshing stop to recharge, unwind and enjoy tasty treats between your water adventures.</p>
    </div>
</div>

<div className={style.image}>
    <Image src="/assets/images/dr.png" width={870} height={600} alt=''/>
      <div>
        <h3 className='white'>Dry Ride Container</h3>
        <p className='white'><strong>Ride. Refuel. Repeat. Tasty bites to keep your adventure rolling!</strong><br/>Take a quick break from the thrills and recharge with satisfying snacks and refreshments. The perfect stop to fuel your next adventure at Jollywood.</p>
    </div>
</div>

</div>




  </div>
</section>


{/* romancia section */}
<section className={`common_section ${style.romancia_section}`}>

  <div className={`container section_container ${style.container}`}>


    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left ${style.left}`}>
        <h2 className='common_heading white'>Romancia Street</h2>
        <h3 className='white'>Old-world charm. New-age flavours. A vibrant street experience where food and entertainment come alive.</h3>
        <p className='white'>Step into Romancia Street, a charming medieval-inspired destination where flavours, entertainment and old-world charm come together. Wander through beautifully designed streets filled with delightful cafés, restaurants and unique experiences that transport you to another era. From delicious local favourites to international flavours, every corner offers something new to discover.</p>
        <p className='white'>Enjoy lively performances, festive celebrations and the vibrant atmosphere as you relax, explore and create memorable moments. Whether you’re looking for a delightful meal, a refreshing drink or simply a magical place to unwind, Romancia Street brings together the perfect blend of culture, cuisine and entertainment. </p>
        </div>

    </div>

    {mobile && 
    <Image src="/assets/images/romancia_mobile.png" className={style.mobileImg} width={1000} height={481} alt=''/>
    }


  </div>
</section>


{/* maze section  */}
<section className={`common_section ${style.maze_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading center_align ${style.top_heading}`}>

      <div className={`left`}>
        <h2 className='common_heading'>Maze Runner Kiosk</h2>
        <h3 className=''>Complete the adventure and snack your way to happiness.</h3>
        <p className=''>After finding your way through the maze, recharge with delicious bites and refreshing treats. The perfect stop to celebrate your victory and keep the fun going.</p>
      </div>

    </div>


<div className={style.mazeContainer}>
    <Image src="/assets/images/maze_bg.png" width={1186} height={585} alt=''/>

</div>




  </div>
</section>



    </>
  )
}
