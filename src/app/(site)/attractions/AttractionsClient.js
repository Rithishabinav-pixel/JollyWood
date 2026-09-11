"use client"

import React, { useEffect, useState } from 'react'
import style from './Attractions.module.css'
import '../innerpage.css'
import Image from 'next/image'


// Experience Worlds data
const ExperienceWorldsData = [

  // Attractions

  {
    title: "Tribal Museum",
    description: "A glimpse of rural India. Discover stories, traditions and timeless culture.",
    link: "/attractions",
    image: "/assets/images/tribal-museum.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Movie Wall",
    description: "Where cinema comes alive. Walk through memories painted by movies.",
    link: "/attractions",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Ride N Reel",
    description: "A ride beyond imagination. Experience cinema in motion.",
    link: "/attractions",
    image: "/assets/images/ride-reel.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Vortex Tunnel",
    description: "Get delulu. Find your solulu. A mind-bending journey you won't forget.",
    link: "/attractions",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Virtual Cricket",
    description: "Step up. Swing hard. Score big. Enjoy cricket like never before.",
    link: "/attractions",
    image: "/assets/images/virtual-cricket.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Romancia Street",
    description: "Walk into a world from another era. Experience medieval charm, music and magic.",
    link: "/attractions",
    image: "/assets/images/romania-street.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Playtopia - Children's Play Area",
    description: "Where little explorers find big adventures. A wonderland of giggles and games.",
    link: "/attractions",
    image: "/assets/images/playtopia.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Titanic - Gallery & Simulation",
    description: "A legendary story beneath the waves. Relive the timeless mystery of Titanic's world.",
    link: "/attractions",
    image: "/assets/images/titanic.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "The Lost World",
    description: "A world forgotten by time. Explore a world where dinosaurs rule again.",
    link: "/attractions",
    image: "/assets/images/lost-world.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Twilight Dreams",
    description: "Night comes alive in colours. Watch a spectacular blend of lights, water and music unfold.",
    link: "/attractions",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Miniature City",
    description: "A tiny world made of big wonders. Wander through a magical city built in miniature.",
    link: "/attractions",
    image: "/assets/images/miniature-city-img.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Glow Garden",
    description: "Where imagination lights up the night. Step into a magical world of glowing wonders.",
    link: "/attractions",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Toy Train & Jolly Bus",
    description: "From little wheels to big smiles. Let the Jolly journey begin!",
    link: "/attractions",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Jubilee Theatre",
    description: "A blockbuster beyond the screen. Watch Indian cinema come alive on stage.",
    link: "/attractions",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },


  // Dry Rides

  {
    title: "Bumper Car",
    description: "Crash. Laugh. Repeat. Get behind the wheel and enjoy a fun-filled ride where friendly collisions create unforgettable moments. Challenge your friends, take control and enjoy a classic bumper car experience made for endless laughter. Age Allowed: 12+ Height: 106+ cm Weight: 20+ kg",
    link: "/dry-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Carousel",
    description: "A classic ride full of charm. Take a nostalgic spin on our beautifully crafted carousel. With colourful designs and gentle movement, it is the perfect ride for families looking for a joyful experience together. Age Allowed: 12+ Height: 137–195 cm",
    link: "/dry-rides",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Jolly Tornado",
    description: "The gravity tester begins. Hold on tight as the Jolly Tornado takes you through a thrilling experience that tests your balance, courage and excitement. How long can you float through the twist? (Age / Height / Weight: Information Required)",
    link: "/dry-rides",
    image: "/assets/images/lost-world.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Midi Dance Party",
    description: "Spin. Dance. Feel the beat. Lights, music and movement come together in this energetic ride. Get ready for a spinning experience filled with rhythm, excitement and nonstop fun with your friends. Age Allowed: 12+ Height: 137–195 cm",
    link: "/dry-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Mini Tagada",
    description: "Hold on. The fun is spinning. Get ready for a high-energy ride that twists, bounces and keeps the excitement going. With music and motion combined, Mini Tagada is a thrilling experience you won't forget. Age Allowed: 12+ Height: 143+ cm",
    link: "/dry-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Samba Balloon",
    description: "Float high. Spin higher. Hop into a balloon-shaped gondola and enjoy a colourful ride filled with twists, turns and exciting movements. A perfect adventure for those who love a little spin in the sky. Age Allowed: 12+ Height: 64+ cm",
    link: "/dry-rides",
    image: "/assets/images/samba-ballon.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Sky Swinger",
    description: "Swing high. See more. Rise above the park and enjoy breathtaking views with this classic swing ride. Feel the breeze, enjoy the gentle motion and experience a thrilling ride from a whole new height. Age Allowed: 12+ Height: 137+ cm",
    link: "/dry-rides",
    image: "/assets/images/sky-swinger.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "360 Cycle",
    description: "Turn your world upside down. Take on a unique cycling challenge that tests your balance and control. A fun-filled experience for adventure seekers ready to push their limits. Height: 3 ft - 6 ft Weight: 35 kg - 90 kg",
    link: "/dry-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Wall Climbing",
    description: "Climb. Challenge. Conquer. How high can you go? Push your limits and test your strength as you climb your way to the top. A thrilling challenge designed for adventure seekers who love reaching new heights. (Age / Height / Weight: Information Required)",
    link: "/dry-rides",
    image: "/assets/images/wall-climbing.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Adventure Games",
    description: "Challenge yourself. Challenge your friends. Let the adventure begin! Bring out your competitive spirit with exciting games designed to test your skills, teamwork and determination. Every challenge brings a new reason to play. (Age / Height / Weight: Information Required)",
    link: "/dry-rides",
    image: "/assets/images/adventure-games.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Toy Car Ride for Kids",
    description: "Tiny drivers, big smiles! Let the little ones hit the road for a joyful ride. A fun-filled driving experience designed for little adventurers. Watch them take the wheel, explore freely and create their first driving memories. (Age / Height / Weight: Information Required)",
    link: "/dry-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },


  // Water Rides

  {
    title: "Crazy Cruise",
    description: "Twist, turn, laugh and scream! The crazier the ride, the bigger the thrill! Take on exciting twists, thrilling turns and endless splashes in a ride designed for adventure seekers.",
    link: "/water-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Family Pool",
    description: "Every splash brings the family closer. Dive into a day of fun and laughter! Enjoy a safe and refreshing space where families can relax, play and create unforgettable moments together.",
    link: "/water-rides",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Family Slide",
    description: "Slide together, laugh together! A thrilling splash of fun for the whole family. Share the excitement of a fun-filled slide experience made for families to enjoy every splash.",
    link: "/water-rides",
    image: "/assets/images/lost-world.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Hide N Seek",
    description: "Hide, seek, splash and repeat! A water-filled adventure for little explorers. A playful water zone where kids can splash around, explore and enjoy endless moments of fun.",
    link: "/water-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Mini Pendulum",
    description: "Swing high, splash down and smile big! A mini ride with maximum water fun. Enjoy a fun-filled water adventure with exciting swings, splashes and plenty of smiles along the way.",
    link: "/water-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Rain Dance",
    description: "Music up, water on, fun unlimited! Dance, splash, and make unforgettable memories. Turn up the energy with music, refreshing showers and a celebration of endless fun with friends and family.",
    link: "/water-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Speed Slide",
    description: "Ready, set, slide! Feel the speed. Feel the thrill. Race through an exciting water slide experience filled with speed, twists and an adrenaline rush.",
    link: "/water-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Super Drop",
    description: "One big drop. Endless excitement! Feel the rush from the very top! Take the ultimate plunge and experience a thrilling drop that will leave you wanting more.",
    link: "/water-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Wave Pool Beach Area",
    description: "A beachside adventure made for the whole family! Feel the waves, relax by the beach and enjoy a tropical escape filled with fun and relaxation.",
    link: "/water-rides",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },


  // Adventures

  {
    title: "High Ropes Course",
    description: "Rise above the challenge. Take on a thrilling aerial adventure that tests your balance, strength and confidence. Navigate through exciting obstacles while pushing your limits and creating unforgettable moments. Age Allowed: 12+ Height: 140+ cm",
    link: "/adventures",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Zipline",
    description: "Take the leap. Feel the rush. Soar through the air and experience the thrill of speed as you glide across the zipline. A high-energy adventure that brings excitement, courage and unforgettable views. Age Allowed: 12+ Height: 140+ cm",
    link: "/adventures",
    image: "/assets/images/glow-garden.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Rock Climbing",
    description: "Climb higher. Push harder. Challenge yourself on a thrilling climbing wall that tests your strength, focus and determination. Reach the top, overcome obstacles and celebrate every achievement along the way. Age Allowed: 12+ Height: 140+ cm",
    link: "/adventures",
    image: "/assets/images/lost-world.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Obstacle Course",
    description: "Challenge accepted. Teamwork activated. Work together, overcome obstacles and test your coordination through an exciting course filled with walls, ropes, and balance challenges. This is the perfect adventure to build confidence and teamwork. Age Allowed: 12+ Height: 140+ cm",
    link: "/adventures",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Archery Tag",
    description: "Aim. Strategize. Conquer. Combine the thrill of archery with the excitement of a team battle. Test your accuracy, build strategies and compete with your team in this action-packed adventure. Age Allowed: 16+ Height: 160+ cm",
    link: "/adventures",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Maze Runner",
    description: "Find your way. Beat the maze. Enter a world of twists, turns and challenges where every step tests your problem-solving skills. Navigate through the maze and race towards the ultimate escape.",
    link: "/adventures",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },


  // Live Shows

  {
    title: "Jubilee Theatre",
    description: "Where cinema comes alive on stage. Experience the magic of Indian cinema through spectacular performances, music and storytelling. With dazzling visuals and captivating acts, Jubilee Theatre brings your favourite movie moments to life in an unforgettable celebration.",
    link: "/live-shows",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  },
  {
    title: "Twilight Dreams",
    description: "Where lights, water and music create magic. Watch the night transform into a breathtaking spectacle of colours, lasers and dancing fountains. Twilight Dreams combines technology and imagination to create a mesmerising show perfect for families, friends and unforgettable evenings.",
    link: "/live-shows",
    image: "/assets/images/movie-wall.png",
    video: "/assets/videos/ride-reel-video.mp4"
  }

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
