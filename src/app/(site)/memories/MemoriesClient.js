"use client"

import React, { useEffect, useState } from 'react'
import style from './Memories.module.css'
import '../innerpage.css'
import Image from 'next/image'


// playtopia data

const PlaytopiaData = [
  {
    image:"/assets/images/jollylicious-m.png",
    title:"Jollylicious",
    link:"/memories#playtopia"
  },
   {
    image:"/assets/images/play-kp-m.png",
    title:"Kids Play Area",
    link:"/memories#playtopia"
  },
   {
    image:"/assets/images/bday-zone-m.png",
    title:"Birthday Zone",
    link:"/memories#playtopia"
  }

]


export default function MemoriesClient() {

  
   const [mobile, setMobile] = useState(false);

useEffect(() => {
  const hashId = window.location.hash;


  if (hashId) {
    const idSection = document.querySelector(hashId);
    console.log(hashId)

    if (idSection) {
      idSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const checkDevice = () => {
    setMobile(window.innerWidth <= 1200);
  };

  checkDevice();

  window.addEventListener("resize", checkDevice);

  return () => {
    window.removeEventListener("resize", checkDevice);
  };
}, []);


                


  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Memories</h1>
    </div>
</section>

{/* gardern section  */}
<section className={` ${style.gardern_section} no_padding_top common_section`} id='mini-city'>
    <div className={`container ${style.container}`}>
   <div className={style.content}>
        <h2 className='common_heading white'>Miniature Garden City </h2>
        <h3 className='white'>A little world of endless wonders. Create beautiful memories amidst nature and wonder.</h3>
        <p className='white'>Step into a charming world where nature, imagination and tranquillity come together. Miniature Garden City is a beautiful escape filled with vibrant flowers, lush greenery and enchanting landscapes designed for visitors of all ages. Wander through thoughtfully crafted pathways, discover hidden corners and admire the beauty of gardens, ponds and artistic creations along the way.</p>
<p className='white'>A peaceful retreat for those seeking relaxation and a magical space for little explorers, this experience brings everyone closer to nature. Take a moment to enjoy the beauty around you, listen to the melodies of birds and create timeless memories amidst a world of wonder.</p>
   </div>
   <div className={style.image}>
<Image className={style.mainImg} src="/assets/images/miniature-city.png" width={720} height={547} alt=''/>
<Image className={style.dinozaur} src="/assets/images/dinozaur.png" width={345} height={555} alt=''/>

   </div>
    </div>
</section>


{/* romancia section  */}
<section className={` ${style.romancia_section} yellow_section common_section`}>
  <Image className={style.rabbit} src="/assets/images/rabbit.png" width={395} height={613} alt=''/>
    <div className={`container ${style.container}`}>
   <div className={style.content}>
        <h2 className='common_heading purple'>Romancia</h2>
        <h3 className=''>Old-world charm. New-age memories. Experience the magic of Romancia come alive.</h3>
        <p>Step into Romancia, a charming medieval-inspired street where every corner brings a new experience. With its beautiful architecture, grand marble fountain and lively atmosphere, Romancia transports you to a world filled with charm and wonder. Enjoy captivating live performances, street acts, character parades and musical moments that bring the streets to life.</p>
<p>Beyond entertainment, explore delightful shopping and dining experiences featuring unique finds and local flavours. Whether you are enjoying a performance by the fountain, discovering hidden treasures or simply soaking in the old-world ambience, Romancia offers a magical escape where every visit becomes a memorable journey.</p>
   </div>

   {mobile && 
   <div className={style.image}>
    <Image src="/assets/images/romancia-mobile-img.png" width={1000} height={744} alt=''/>
   </div>
   }

    </div>
</section>


{/* playtopia section  */}
<section className={`common_section ${style.playtopia_section}`} id='playtopia'>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left ${style.left}`}>
        <p className='white'>Playtopia</p>
        <h2 className='common_heading white'>Where childhood comes alive.</h2>
        <h3 className='white'>A playful world filled with laughter, imagination and unforgettable moments.</h3>
        <p className='white'>Playtopia is where little smiles turn into lifelong memories. Designed for endless fun, this vibrant space lets kids explore, play and celebrate through exciting experiences. From joyful playtime to special celebrations, every moment here is made to be remembered.</p>
      </div>

    </div>



       <div className={style.playtopiaCard}>

        {PlaytopiaData.map((slide,index) => (

            <div className={`${style.singleSlide}`} key={index}>
              <div className={style.image}>
                <Image src={slide.image} width={570} height={450} alt={slide.title}/>

              </div>
              <div className={style.content}>
                <h3 className={`${style.title} white`}>{slide.title}</h3>
                {/* <Button href={slide.link} text="" className="link white large"></Button> */}
              </div>
            </div>

        ))}

    </div>




</div>

</section>


{/* Graphica section  */}
<section className={`common_section ${style.graphica_section}`} id='graphica'>
  <Image className={style.dinozaur} src="/assets/images/dinozaur.png" width={345} height={555} alt=''/>
  <div className={`container section_container ${style.container}`}>


  <div className={style.content}>
    <h2 className='common_heading purple'>Graphica Shots</h2>
    <h3 className=''>Step Into the Picture. Live the Moment. </h3>
    <p>Turn up the fun with colourful graffiti walls, quirky 3D setups and picture-perfect spots made for posing. Get creative with your shots, strike your best pose and capture moments that are as playful as your Jollywood adventure. Whether you're here with friends or family, every corner gives you another reason to stop, pose and click.
</p>
  </div>

   {mobile && 
   <div className={style.image}>
    <Image src="/assets/images/graphica-bg.png" width={849} height={785} alt=''/>
   </div>
   }



</div>

</section>


{/* hut section  */}
<section className={`common_section ${style.hut_section}`} id='hut'>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <h2 className='common_heading white'>Hut in Beach</h2>
        <h3 className='white'>A little hut. A lot of beach vibes. Sit back, relax and enjoy the moment.</h3>
        <p className='white'>Take a break from the splashes and excitement at this laid-back beachside spot. Settle in with your family or friends, enjoy the relaxed surroundings and soak up the holiday vibes. Whether you’re taking a breather, enjoying a quick chat or simply watching the fun unfold, the Hut in Beach gives you the perfect pause between adventures. Take your time, recharge and get ready for the next splash.</p>
      </div>

    </div>

  <div className={style.hutImage}>
    <Image src="/assets/images/hut.png" width={1170} height={580} alt=''/>
  </div>

</div>




</section>


    </>
  )
}
