"use client"

import React, { useEffect, useState } from 'react'
import style from './Attractions.module.css'
import '../../innerpage.css'
import Image from 'next/image'


// Experience Worlds data
const ExperienceWorldsData = [

  // Attractions
  {
    title: "The Lost World",
    description: "A world forgotten by time. Explore a world where dinosaurs rule again.",
    link: "/experience/attractions",
    image: "/assets/images/lost-world.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Titanic - Gallery & Simulation",
    description: "A legendary story beneath the waves. Relive the timeless mystery of Titanic's world.",
    link: "/experience/attractions",
    image: "/assets/images/titanic.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Tribal Museum",
    description: "A glimpse of rural India. Discover stories, traditions and timeless culture.",
    link: "/experience/attractions",
    image: "/assets/images/tribal-museum.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Movie Wall",
    description: "Where cinema comes alive. Walk through memories painted by movies.",
    link: "/experience/attractions",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Ride N Reel",
    description: "A ride beyond imagination. Experience cinema in motion.",
    link: "/experience/attractions",
    image: "/assets/images/ride-reel.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Vortex Tunnel",
    description: "Get delulu. Find your solulu. A mind-bending journey you won't forget.",
    link: "/experience/attractions",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Virtual Cricket",
    description: "Step up. Swing hard. Score big. Enjoy cricket like never before.",
    link: "/experience/attractions",
    image: "/assets/images/virtual-cricket.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Romancia Street",
    description: "Walk into a world from another era. Experience medieval charm, music and magic.",
    link: "/experience/attractions",
    image: "/assets/images/romania-street.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Playtopia - Children's Play Area",
    description: "Where little explorers find big adventures. A wonderland of giggles and games.",
    link: "/experience/attractions",
    image: "/assets/images/playtopia.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  
  {
    title: "Twilight Dreams",
    description: "Night comes alive in colours. Watch a spectacular blend of lights, water and music unfold.",
    link: "/experience/attractions",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Miniature City",
    description: "A tiny world made of big wonders. Wander through a magical city built in miniature.",
    link: "/experience/attractions",
    image: "/assets/images/miniature-city-img.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Glow Garden",
    description: "Where imagination lights up the night. Step into a magical world of glowing wonders.",
    link: "/experience/attractions",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Toy Train & Jolly Bus",
    description: "From little wheels to big smiles. Let the Jolly journey begin!",
    link: "/experience/attractions",
    image: "/assets/images/toy-train.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Jubilee Theatre",
    description: "A blockbuster beyond the screen. Watch Indian cinema come alive on stage.",
    link: "/experience/attractions",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
];


export default function AttractionsClient() {


    const [experienceVideo,setExperienceVideo] = useState(null);
  
  
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
        <h1 className={`title common_heading white`}>Attractions</h1>
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
