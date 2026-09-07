"use client"

import React, { useEffect, useState } from 'react'
import style from './Memories.module.css'
import '../innerpage.css'
import Image from 'next/image'
import Button from '../components/ui/Button'


// playtopia data

const PlaytopiaData = [
  {
    image:"/assets/images/jollylicious.png",
    title:"Jollylicious",
    link:""
  },
   {
    image:"/assets/images/jollylicious.png",
    title:"Jollylicious",
    link:""
  },
   {
    image:"/assets/images/jollylicious.png",
    title:"Jollylicious",
    link:""
  }

]


export default function MemoriesClient() {

  
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
        <h1 className={`title common_heading white`}>Memories</h1>
    </div>
</section>

{/* gardern section  */}
<section className={` ${style.gardern_section} no_padding_top common_section`}>
    <div className={`container ${style.container}`}>
   <div className={style.content}>
        <h2 className='common_heading white'>Miniature Garden City</h2>
        <p className='white'>Discover the enchanting world of Miniature city, a truly remarkable experience for all ages. Immerse yourself in the splendor of lush gardens adorned with a breathtaking array of vibrant flowers and majestic trees. Nestled within this haven of natural beauty, Miniature city provides a serene environment perfect for elders seeking tranquility and relaxation and for the young ones, this playground of wonder and excitement. Beyond its picturesque beauty, Miniature city is a sanctuary that fosters a deep connection with nature. Take a moment to listen to the melodies of chirping birds, feel the velvety petals of a blooming flower, or simply sit under the shade of a towering tree and savor the serenity.</p>
<p className='white'>Embark on a magical journey as you wander along thoughtfully designed walking paths that meander through the gardens. Each step unveils a new enchantment, revealing secret nooks and charming vistas. The carefully curated route invites you to explore the diverse landscapes, from fragrant rose gardens to serene lily ponds, and from whimsical topiaries to grand arboretums.</p>
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
        <p className=''>Nestled in the heart of a charming medieval town lies the picturesque Romancia street, complete with a stunning marble fountain at its center. But there's much more to this street than just its beautiful scenery. Romancia is a hub of activity, with live performances, circus acts, character parades, and a wealth of shopping and dining options.</p>
<p className=''>As you wander down the street, you'll be entertained by the lively street performers, musicians, and dancers who bring Romancia to life. The fountain in the center serves as a stage for various acts, from juggling to acrobatics, and the crowds gather around to watch in awe.</p>
<p className=''>But it's not just the entertainment that makes Romancia special. The street is also home to a variety of retail shops, selling everything from handmade crafts to local delicacies. Visitors can browse the stalls and pick up souvenirs to take home, or simply window shop and soak up the medieval atmosphere.</p>
   </div>

   {mobile && 
   <div className={style.image}>
    <Image src="/assets/images/romancia-mobile-img.png" width={1000} height={744} alt=''/>
   </div>
   }

    </div>
</section>


{/* playtopia section  */}
<section className={`common_section ${style.playtopia_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left ${style.left}`}>
        <p className='white'>Playtopia</p>
        <h2 className='common_heading white'>Make Your Birthday a Blockbuster</h2>
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
                <Button href={slide.link} text="" className="link white large"></Button>
              </div>
            </div>

        ))}

    </div>




</div>

</section>


{/* Graphica section  */}
<section className={`common_section ${style.graphica_section}`}>
  <Image className={style.dinozaur} src="/assets/images/dinozaur.png" width={345} height={555} alt=''/>
  <div className={`container section_container ${style.container}`}>


  <div className={style.content}>
    <h2 className='common_heading purple'>Graphica Shots</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.</p>
  </div>

   {mobile && 
   <div className={style.image}>
    <Image src="/assets/images/graphica-bg.png" width={849} height={785} alt=''/>
   </div>
   }



</div>

</section>


{/* hut section  */}
<section className={`common_section ${style.hut_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <h2 className='common_heading white'>Hut in Beach</h2>
        <p className='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
