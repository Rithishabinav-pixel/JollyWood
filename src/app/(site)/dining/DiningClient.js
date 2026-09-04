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



      const [foodSouk,setFoodSouk] = useState(0);
      const [foodContainerData,setFoodContainerData] = useState(0)
    

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

      <div className={`left`}>
        <h2 className='common_heading white'>Food Souk</h2>
        <p className='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
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
      </div>

    </div>


<div className={style.waveContainer}>
<div className={style.image}>
    <Image src="/assets/images/wave1.png" width={870} height={698} alt=''/>
</div>
<div className={style.content}>
    <Image src="/assets/images/wave-logo.svg" width={188} height={235} alt=''/>
    <p>Welcome to Wave Bistro, a unique dining experience located right beside a wave pool and man-made sand beach complete with swaying coconut trees. Our lounge provides a perfect setting for those looking to escape the hustle and bustle of city life and immerse themselves in a relaxing and tropical environment.</p>
    <p>Our menu features an extensive selection of dishes that are sure to satisfy any appetite. We pride ourselves on using only the freshest ingredients, ensuring that every dish is bursting with flavor. Our team of skilled chefs has created a menu that includes both international and local delicacies, giving our guests a truly authentic taste of the region.</p>
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
        <h2 className='common_heading purple'>Royal Kitchen</h2>
        <p>Welcome to Royal Kitchens of India, a restaurant that offers an unparalleled dining experience featuring the best of Indian cuisine. Our restaurant specializes in serving delicious and authentic Indian dishes, all of which are available in a buffet style, allowing our guests to sample a wide variety of culinary delights.</p>
        <p>Our restaurant is designed to transport you to the majestic and opulent palaces of India, with a regal ambiance that exudes luxury and sophistication. Our team of talented chefs has crafted an extensive menu that showcases the rich diversity of Indian cuisine, with dishes from all regions of the country. From spicy and flavorful curries to fragrant biryanis, from sizzling tandoori grills to mouth-watering desserts, our buffet has something for everyone.</p>
        <p>Our buffet is an all-you-can-eat extravaganza that features a wide range of vegetarian and non-vegetarian dishes, all prepared using the freshest ingredients and traditional cooking methods. Our chefs use a blend of spices and herbs that are unique to Indian cuisine, resulting in a symphony of flavors that will tantalize your taste buds.</p>
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
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing.</p>
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
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia</p>
      </div>
    </div>

<div className={style.kitchenContainer}>
<div className={style.image}>
    <Image src="/assets/images/bc.png" width={870} height={600} alt=''/>
    <div>
        <h3 className='white'>Beach Container</h3>
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. </p>
    </div>
</div>

<div className={style.image}>
    <Image src="/assets/images/dr.png" width={870} height={600} alt=''/>
      <div>
        <h3 className='white'>Dry Ride Container</h3>
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. </p>
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
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
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
        <p className=''>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia</p>
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
