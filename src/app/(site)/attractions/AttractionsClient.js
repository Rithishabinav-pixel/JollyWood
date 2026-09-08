"use client"

import React, { useEffect, useState } from 'react'
import style from './Attractions.module.css'
import '../innerpage.css'
import Image from 'next/image'


// Experience Worlds data
const ExperienceWorldsData = [
  {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
       {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
       {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
       {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
       {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
       {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
       {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
       {
       title:"Ride n Reel - a",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },

]




export default function AttractionsClient() {


    const [experienceVideo,setExperienceVideo] = useState(null);
  
  
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
        <h1 className={`title common_heading white`}>Our Story</h1>
    </div>
</section>


{/* attraction section  */}

<section className={`common_section no_padding_top ${style.attraction_section}`}>
  <div className={`container section_container ${style.container}`}>

  <div className={style.cards}>
    
        {ExperienceWorldsData.map((slide,index) => (
        
            <div className={`${style.card}`} key={index} onMouseEnter={()=>setExperienceVideo(index)} onMouseLeave={()=>setExperienceVideo(null)}>
              <div className={style.image}>
                <Image src={slide.image} width={420} height={526} alt={slide.title}/>
                {
                experienceVideo===index &&
               <video className={experienceVideo===index?style.active:""} width="720" height="1280"  autoPlay loop muted preload="none">
      <source src={slide.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    }
              </div>
              <div className={style.content}>
                <h3 className={`${style.title} white`}>{slide.title}</h3>
                <p className='white'>{slide.description}</p>
              </div>
            </div>
       
        ))}
     
    </div>

</div>

     






</section>


    </>
  )
}
