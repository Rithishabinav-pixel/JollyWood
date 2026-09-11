"use client"

import React, { useEffect, useState } from 'react'
import lcpStyle from "./lcp.module.css"
import style from './page.module.css'
import Button from './components/ui/Button'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from 'next/link'

import { useRouter } from "next/navigation";



// High Adrenaline data
const HighAdrenalineData = [
  {
    image:"/assets/images/romancia-street.png",
    video:"/assets/videos/ride-reel-video.mp4",
    title:"Romancia Street",
    link:"#"
  },
   {
    image:"/assets/images/graphic-shots.png",
    video:"/assets/videos/ride-reel-video.mp4",
    title:"Graphica shots",
    link:"#"
  },
   {
    image:"/assets/images/mini-city.png",
    video:"/assets/videos/ride-reel-video.mp4",
    title:"Miniature city",
    link:"#"
  },
   {
    image:"/assets/images/hut-beach.png",
    video:"/assets/videos/ride-reel-video.mp4",
    title:"Hut in beach",
    link:"#"
  },
]


// Experience Worlds data
const ExperienceWorldsData = [

  {
    tab: "attractions",
    label: "Attractions",
    content: [
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
      }
    ]
  },

  {
    tab: "dry-rides",
    label: "Dry Rides",
    content: [
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
      }
    ]
  },

  {
    tab: "water-rides",
    label: "Water Rides",
    content: [
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
      }
    ]
  },

  {
    tab: "adventures",
    label: "Adventures",
    content: [
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
      }
    ]
  },

  {
    tab: "live-shows",
    label: "Live Shows",
    content: [
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
    ]
  }

];


// Food Souk tab data
const FoodSoukTabData = [
  {
    image:"/assets/images/rest-1.png",
    video:"/assets/videos/food-souk.mp4"
  },
   {
    image:"/assets/images/rest-2.png",
    video:"/assets/videos/food-souk.mp4"
  },
   {
    image:"/assets/images/rest-3.png",
    video:"/assets/videos/food-souk.mp4"
  },
   {
    image:"/assets/images/rest-4.png",
    video:"/assets/videos/food-souk.mp4"
  },
   {
    image:"/assets/images/rest-5.png",
    video:"/assets/videos/food-souk.mp4"
  },
]

// Food Souk data
const FoodSoukData = [
  {
    title:"Royal Kitchen",
    description:"A royal feast of Indian flavours. Indulge in a grand dining experience crafted with tradition.",
    link:"#",
    image:"/assets/images/royal-kitchen.png"
  },
   {
    title:"Planet Jollywood",
    description:"Lights. Camera. Delicious! A star-studded dining experience awaits.",
    link:"#",
    image:"/assets/images/planet-jollywood.png"
  },
   {
    title:"Beach Container",
    description:"Quick bites. Cool vibes. Beachside fun. The perfect pit stop for every hungry adventurer!",
    link:"#",
    image:"/assets/images/beach-container.png"
  },
   {
    title:"Dry Ride Container",
    description:"Ride. Refuel. Repeat. Tasty bites to keep your adventure rolling! ",
    link:"#",
    image:"/assets/images/dry-ride-container.png"
  },
   {
    title:"Maze Runner Kiosk",
    description:"Complete the adventure and snack your way to happiness.",
    link:"#",
    image:"/assets/images/maze.png"
  },
  {
    title:"Romancia Street",
    description:"Old-world charm. New-age flavours. A vibrant street experience where food and entertainment come alive.",
    link:"#",
    image:"/assets/images/romancia.png"
  },
]


// facilities data
const FacilitiesData = [

  {
    icon:"/assets/images/parking.svg",
    text:"Parking Lot"
  },
  {
    icon:"/assets/images/first-aid.svg",
    text:"First Aid"
  },
  {
    icon:"/assets/images/wheel-chair.svg",
    text:"Wheelchair/ Pram"
  },
  {
    icon:"/assets/images/lockers.svg",
    text:"Individual Lockers"
  },
  {
    icon:"/assets/images/rooms.svg",
    text:"Changing Rooms"
  },
  {
    icon:"/assets/images/water.svg",
    text:"Drinking Water"
  }
]


const getRandomItem = (array) => {
  if (!array.length) {
    return null;
  }

  return array[Math.floor(Math.random() * array.length)];
};

const getRandomItems = (array, count) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled.slice(0, count);
};


// comforts data

const ComfortsData = [
  {
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },
   {
    image:"/assets/images/osp.png",
    title:"Outdoor Swimming Pool",
    content:"Take a refreshing dip or lounge by our resort-style open-air pool."
  },
   {
    image:"/assets/images/f-wifi.png",
    title:"Free Wi-Fi",
    content:"Stay connected with complimentary high-speed internet throughout your stay."
  },
   {
    image:"/assets/images/ird.png",
    title:"In-room Dining",
    content:"Enjoy delicious meals and snacks delivered straight to your room."
  },
   {
    image:"/assets/images/kp-area.png",
    title:"Kids’ Play Area ",
    content:"Let little ones have their own fun in a safe and colorful play zone."
  },
    {
    image:"/assets/images/security-p.png",
    title:"Secure Parking",
    content:"Park your vehicle worry-free in our private, monitored parking area."
  }
]


// playtopia data

const PlaytopiaData = [
  {
    image:"/assets/images/jollylicious.png",
    title:"Jollylicious",
    link:"/memories#playtopia"
  },
   {
    image:"/assets/images/play-kp.png",
    title:"Kids Play Area",
    link:"/memories#playtopia"
  },
   {
    image:"/assets/images/bday-zone.png",
    title:"Birthday Zone",
    link:"/memories#playtopia"
  }

]



// retail data

const RetailData = [
  {
    image:"/assets/images/aqua-r.png",
    title:"Aqua",
    link:""
  },
    {
    image:"/assets/images/cirkus-k.png",
    title:"Cirkus",
    link:""
  },
   {
    image:"/assets/images/aqua.png",
    title:"Jollylicious",
    link:""
  },

]


// corporate data
const CorporateData = [
  {
    image:"/assets/images/bm.png",
    title:"Business Meeting",
    link:"/corporate-events"
  },
    {
    image:"/assets/images/entertainment.png",
    title:"Entertainment",
    link:"/corporate-events"
  },
   {
    image:"/assets/images/exp.png",
    title:"Experience",
    link:"/corporate-events"
  },

]



export default function HomePageClient({ offers, storyContents, storyImages }) {


  const router = useRouter();


  const [adrenalineVideo,setAdrenalineVideo] = useState(null);
  const [experienceVideo,setExperienceVideo] = useState(null);


  const [experienceWorlds,setExperienceWorlds] = useState(0);

  const [foodSouk,setFoodSouk] = useState(0);

  const [activeOffer,setActiveOffer] = useState(null)


  const [randomStories, setRandomStories] = useState({
  squareImages: [],
  landscapeImages: [],
  content: [],
});



useEffect(() => {

  const squareImages = storyImages
    .filter((image) => image.imageType === "SQUARE")
    .map((image) => ({ url: image.image, type: "square" }));

  const landscapeImages = storyImages
    .filter((image) => image.imageType === "LANDSCAPE")
    .map((image) => ({ url: image.image, type: "landscape" }));

  const storyContent = storyContents.map((content) => ({
    text: content.testimonial,
    link: content.link,
    name: content.name,
  }));

  const updateStories = () => {
    setRandomStories({

      squareImages: getRandomItems(squareImages, 2),
      landscapeImages: getRandomItems(landscapeImages, 1),
      content: getRandomItems(storyContent, 5),
    });
  };


  updateStories();

  const interval = setInterval(() => {
    updateStories();
  }, 5000);


  return () => {
    clearInterval(interval);
  };

}, [storyContents, storyImages]);



const [bannerText, setBannerText] = useState("Cinematic Family<br>Universe");
const [fade, setFade] = useState(false);

useEffect(() => {
  let fadeTimeout;

  const interval = setInterval(() => {
    setFade(true);

    fadeTimeout = setTimeout(() => {
      setBannerText((prev) =>
        prev === "Cinematic Family<br>Universe"
          ? "Namma Jollywood,<br>Nimma Bengaluru"
          : "Cinematic Family<br>Universe"
      );

      setFade(false);
    }, 500);
  }, 6000);

  return () => {
    clearInterval(interval);
    clearTimeout(fadeTimeout);
  };
}, []);


  return (
    <>

    {/* hero section  */}

    <section className={lcpStyle.heroSection}>

       <video width="1920" height="1080" autoPlay loop muted preload="none">
      <source src="/assets/videos/home_hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>




<a href='#'>
<Image className={lcpStyle.floating_tickets} priority src="/assets/images/floating_tickets.svg" width={75} height={790} alt=''/>

</a>


     <div className={`container ${lcpStyle.container}`}>

         {/* Characters  */}
<Image className={`${lcpStyle.character} ${lcpStyle.character_1}`} priority  src="/assets/images/char_1.svg" width={480} height={506} alt=''/>
<Image className={`${lcpStyle.character} ${lcpStyle.character_2}`} priority  src="/assets/images/char_2.svg" width={306} height={503} alt=''/>

      {bannerText && (
  <h1
    className={`common_heading white ${lcpStyle.bannerHeading} ${
      fade ? lcpStyle.fadeOut : lcpStyle.fadeIn
    }`}
    dangerouslySetInnerHTML={{ __html: bannerText }}
  ></h1>
)}

<div className={lcpStyle.actions}>
  <Button href="#" text="Book Tickets" className="common_btn orange_bg white_text right_tilt big"></Button>
  <Button href="#" text="Group Booking" className="common_btn white_bg black_text left_tilt big"></Button>

</div>

      </div>
    </section>

{/* High Adrenaline section  */}

<section className={`common_section ${style.adrenaline_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left`} data-aos="fade-right">
        <p className='white'>High Adrenaline</p>
        <h2 className='common_heading white'>Frozen Moments </h2>
      </div>

       <div className={`right`} data-aos="fade-left">
        <p className='white'>Eleven rides. Zero hesitation. Thrill Island is where Vels Jollywood turns the volume up — fast climbs, sharp drops, and the kind of screams that turn into laughter the second your feet hit the ground.</p>
       </div>

    </div>


    <div className={style.slider} data-aos="fade-up">
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0:{slidesPerView:1},
          767:{slidesPerView:3},
          1600:{slidesPerView:4,spaceBetween:30}

        }}
      >
        {HighAdrenalineData.map((slide,index) => (
          <SwiperSlide key={index}>
            <div className={`${style.singleSlide}`} onMouseEnter={()=>setAdrenalineVideo(index)} onMouseLeave={()=>setAdrenalineVideo(null)}>
              <div className={style.image} >
                <Image src={slide.image} width={420} height={526} alt={slide.title}/>
                {
                adrenalineVideo===index &&
               <video className={adrenalineVideo===index?style.active:""} width="720" height="1280"  autoPlay loop muted preload="none">
      <source src={slide.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    }
              </div>
              <div className={style.content}>
                <h3 className={`${style.title} white`}>
                  {slide.title}
                </h3>
                <Button href={slide.link} text="" className="link large"></Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>



  </div>
</section>


{/* Experience Worlds section  */}

<section className={`common_section no_padding_top ${style.experience_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left ${style.left}`} data-aos="fade-right">
        <p className='white'>Experience Worlds</p>
        <h2 className='common_heading white'>5 Universe In 1 Galaxy @ Bengaluru</h2>
        <p className='white'>Every zone is its own universe — from prehistoric jungles to sunken ships, candy realms to adrenaline peaks.</p>
      </div>

       <div className={`right ${style.right}`} data-aos="fade-left">

        <div className={style.exp_tabs} >
          {ExperienceWorldsData.map((item,index)=>(
 <button className={`${style.tab_btn} ${index===experienceWorlds?style.active:""}`} key={index} onClick={()=>setExperienceWorlds(index)} >{item.label} </button>
          ))}

        </div>

       </div>

    </div>
</div>

  <div className={`container section_container full_container ${style.container}`} data-aos="fade-up">
       <div className={style.slider}>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={4}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}

  centeredSlides={false}
  loop={false}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1200:{
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4.2,
      spaceBetween: 30,
    },
  }}
>
        {ExperienceWorldsData[experienceWorlds].content.map((slide,index) => (
          <SwiperSlide key={index}>
            <div className={`${style.singleSlide}`} onMouseEnter={()=>setExperienceVideo(index)} onMouseLeave={()=>setExperienceVideo(null)}>
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
                <Button href={slide.link} text="Explore More" className="link white"></Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>





</section>


{/* Special Offers section  */}

<section className={`common_section yellow_section ${style.offers_section}`}>

    <div className={`container ${style.container}`}>
 <div className={`top_heading center_align ${style.top_heading}`} data-aos="fade-up">
      <div className={`left ${style.left}`}>
        <p className=''>Special Offers</p>
        <h2 className='common_heading purple'>The Fun Just Got A Jolly Upgrade</h2>
      </div>
    </div>
    </div>

    {offers.length > 0 && (
    <div className={`container full_container strict_full  ${style.container}`}>
       <div className={style.slider}>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={4}
  navigation={{
      prevEl: '.offer_prev',
      nextEl: '.offer_next',
    }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  centeredSlides={true}
  loop={true}
  className='center_slider'
  breakpoints={{
    0:{
      slidesPerView:1.6
    },
    499: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 5.5,
      spaceBetween: 30,
    },
  }}
>
       {[...offers, ...offers].map((slide, index) => {
  const activeIndex = index % offers.length;

  return (
    <SwiperSlide key={index}>
      <Link
        href={slide.link}
        className={style.singleSlide}
        onMouseEnter={() => setActiveOffer(activeIndex)}
      >
        <div className={style.image}>
          <Image
            src={slide.image}
            width={310}
            height={388}
            alt="Offer"
          />
        </div>
      </Link>
    </SwiperSlide>
  );
})}

      </Swiper>
    </div>
  </div>
    )}

  <Image  onClick={()=>{ if (activeOffer !== null) { router.push(offers[activeOffer].link);}}} className={style.sliderMock} src="/assets/images/slider-mockup.svg" width={430} height={687} alt=''/>

  <div className='center_nav slider_arrow'>
  <button className='offer_prev'> <Image src="/assets/images/slider-arrow-left.svg" width={60} height={60} alt='' /> </button>
  <button className='offer_next'><Image src="/assets/images/slider-arrow-right.svg" width={60} height={60} alt='' /></button>
</div>

</section>


{/* cinematic section  */}
<section className={`common_section ${style.cinematic_section}`}>
<div className={`container ${style.container}`}>

   <div className={`top_heading left_align ${style.top_heading}`}>
      <div className={`left ${style.left}`} data-aos="fade-right">
        <p className='white'>The Stage</p>
        <h2 className='common_heading white'>Live Cinematic Spectacle</h2>
        <p className='white'>A multi-million rupee production featuring aerial acrobatics, gravity-defying stunts, and the most iconic tracks of Indian cinema.</p>
      </div>

      <div className={`right ${style.right}`} data-aos="fade-left">
        <p className={`white ${style.mixed}`}>Today’s <span>Show Timing</span></p>
        <p className={`white ${style.timing}`}>06:00 PM</p>
  <Button href="#" text="Book Tickets" className="common_btn orange_bg black_text right_tilt ticket"></Button>

      </div>
    </div>


</div>
</section>


{/* Flavours of the World section  */}
<section className={`common_section ${style.memories_section}`}>
<div className={`container section_container ${style.container}`}>

   <div className={`top_heading left_align ${style.top_heading}`} data-aos="fade-up">
      <div className={`left ${style.left}`}>
        <p className='white'>Flavours of the World</p>
        <h2 className='common_heading white'>Cooking Up Memories</h2>
      </div>
    </div>


    <div className={style.memories_grid}>

      <div className={`${style.card} ${style.videoTabContainer}`} data-aos="fade-up">

       <div className={style.content}>
         <h3 className='white'>Food Souk</h3>
  <p className='white'>Where every craving finds its flavour. A culinary journey filled with variety, taste and memorable moments.</p>
 <Button href="/dining" text="Explore More" className="link white"></Button>
       </div>

         <video width="1920" height="1080" autoPlay loop muted preload="none">
      <source src={FoodSoukTabData[foodSouk].video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className={style.tabs} >
      {FoodSoukTabData.map((item,index)=>(
        <button key={index} onClick={()=>setFoodSouk(index)}> <Image src={item.image} width={111} height={60} alt='Food Souk'/></button>
      ))}
    </div>


      </div>


      {FoodSoukData.map((item,index)=>(
 <div className={`${style.card}`} data-aos="zoom-in" key={index} style={{ backgroundImage: `url(${item.image})` }}>
<div className={style.content}>
  <h3 className='white'>{item.title}</h3>
  <p className='white'>{item.description}</p>
 <Button href={item.link} text="Explore More" className="link white"></Button>
 </div>
 </div>

      ))}

    </div>


</div>
</section>


{/* Facilities & Services section */}

<section className={`common_section yellow_section ${style.facilities_section}`}>

    <div className={`container ${style.container}`}>
 <div className={`top_heading center_align ${style.top_heading}`} data-aos="fade-up">
      <div className={`left ${style.left}`}>
        <p className=''>Facilities & Services</p>
        <h2 className='common_heading purple'>Everything You Need For A Jolly Day</h2>
      </div>
    </div>
    </div>

<div className={`strict_full full_container ${style.container}`} data-aos="fade-up">
    <div className={style.facilities_rows}>
      <div className={style.facilities_single_row}>
        {[...FacilitiesData,...FacilitiesData].map((item,index)=>(
          <div className={style.single} key={index}>
            <Image src={item.icon} width={64} height={64} alt=''/>
            <p>{item.text}</p>
           </div>
        ))}
      </div>

       <div className={`${style.facilities_single_row} ${style.reverse}`}>
        {[...FacilitiesData,...FacilitiesData].map((item,index)=>(
          <div className={style.single} key={index}>
            <Image src={item.icon} width={64} height={64} alt=''/>
            <p>{item.text}</p>
           </div>
        ))}
      </div>

    </div>
    </div>

</section>


{/* Visitor Stories section  */}
<section className={`common_section ${style.stories_section}`}>

  <div className={`container section_container ${style.container}`}>

   <div className={`top_heading left_align ${style.top_heading}`} data-aos="fade-right">
      <div className={`left ${style.left}`}>
        <p className='white'>Visitor Stories</p>
        <h2 className='common_heading white'>Jollywood Through Their Eyes</h2>
      </div>
    </div>

<div className={style.stories_container} >

  <div className={`${style.row} ${style.upperRow}`}>


    {randomStories.squareImages[0] && (
      <div className={style.squareImg} data-aos="zoom-in" data-aos-delay="100">

        <Image
          className={style.imageData}
          src={randomStories.squareImages[0].url}
          width={262}
          height={262}
          alt="story"
        />

        <Image
          className={style.frame}
          src="/assets/images/square-frame.svg"
          width={309}
          height={300}
          alt=""
        />

      </div>
    )}


    {/* ================================
        ORANGE CONTENT
    ================================= */}

    {randomStories.content[0] && (
      <a target='_blank'
        href={randomStories.content[0].link}
        className={`${style.content} ${style.square} ${style.curved}`} data-aos="zoom-in" data-aos-delay="200"
      >

        <p>
          {randomStories.content[0].text}
        </p>

        <h3 className={style.name}>
          {randomStories.content[0].name}
        </h3>

        <Image
          className={style.frame}
          src="/assets/images/frame-orange.svg"
          width={246}
          height={271}
          alt=""
        />

      </a>
    )}


    {/* ================================
        PINK CONTENT
    ================================= */}

    {randomStories.content[1] && (
      <a target='_blank'
        href={randomStories.content[1].link}
        className={`${style.content} ${style.potrait}`} data-aos="zoom-in" data-aos-delay="300"
      >

        <p>
          {randomStories.content[1].text}
        </p>

        <h3 className={style.name}>
          {randomStories.content[1].name}
        </h3>

        <Image
          className={style.frame}
          src="/assets/images/pink-frame.svg"
          width={291}
          height={339}
          alt=""
        />

      </a>
    )}


    {/* ================================
        SQUARE IMAGE 2
    ================================= */}

    {randomStories.squareImages[1] && (
      <div className={style.squareImg} data-aos="zoom-in" data-aos-delay="100">

        <Image
          className={style.imageData}
          src={randomStories.squareImages[1].url}
          width={262}
          height={262}
          alt="story"
        />

        <Image
          className={style.frame}
          src="/assets/images/square-frame.svg"
          width={309}
          height={300}
          alt=""
        />

      </div>
    )}

  </div>


  <div className={`${style.row} ${style.lowerRow}`}>

    {randomStories.content[2] && (
      <a target='_blank' data-aos="zoom-in" data-aos-delay="200"
        href={randomStories.content[2].link}
        className={`${style.content} ${style.square} ${style.straight}`}
      >

        <p>
          {randomStories.content[2].text}
        </p>

        <h3 className={style.name}>
          {randomStories.content[2].name}
        </h3>

        <Image
          className={style.frame}
          src="/assets/images/frame-yellow.svg"
          width={311}
          height={313}
          alt=""
        />

      </a>
    )}


    {randomStories.landscapeImages[0] && (
      <div className={style.landscapeImg} data-aos="zoom-in" data-aos-delay="300">

        <Image
          className={style.imageData}
          src={randomStories.landscapeImages[0].url}
          width={413}
          height={235}
          alt="story"
        />

        <Image
          className={style.frame}
          src="/assets/images/rect-frame.svg"
          width={516}
          height={291}
          alt=""
        />

      </div>
    )}


    {randomStories.content[3] && (
      <a target='_blank' data-aos="zoom-in" data-aos-delay="100"
        href={randomStories.content[3].link}
        className={`${style.content} ${style.square} ${style.straight}`}
      >

        <p>
          {randomStories.content[3].text}
        </p>

        <h3 className={style.name}>
          {randomStories.content[3].name}
        </h3>

        <Image
          className={style.frame}
          src="/assets/images/frame-blue.svg"
          width={311}
          height={313}
          alt=""
        />

      </a>
    )}



    {randomStories.content[4] && (
      <a target='_blank' data-aos="zoom-in" data-aos-delay="200"
        href={randomStories.content[4].link}
        className={`${style.content} ${style.square} ${style.curved}`}
      >

        <p>
          {randomStories.content[4].text}
        </p>

        <h3 className={style.name}>
          {randomStories.content[4].name}
        </h3>

        <Image
          className={style.frame}
          src="/assets/images/frame-green.svg"
          width={246}
          height={271}
          alt=""
        />

      </a>
    )}

  </div>

</div>


</div>

</section>


{/* Comfort & Style section  */}

<section className={`common_section yellow_section ${style.comfort_section}`}>

<div className={`container ${style.container}`}>

   <div className={`top_heading left_align ${style.top_heading}`}>
      <div className={`left ${style.left}`} data-aos="fade-right" >
        <h2 className='common_heading purple'>Stay Close To The Magic. </h2>
        <p className=''>Extend your Vels Jollywood adventure with a comfortable stay designed for relaxation, family time and unforgettable moments. Wake up closer to the magic and make every day a complete experience.</p>
         <Button href="#" text="Book a Stay" className="common_btn white_bg black_text left_tilt stay"></Button>
      </div>

      <div className={`right ${style.right}`} data-aos="fade-left">
<Image src="/assets/images/comfort_stay.png" width={870} height={565} alt=''/>
      </div>
    </div>

</div>

<div className={`container full_container ${style.container} ${style.stay_slider_container}`} data-aos="fade-up">
<div className={style.stay_slider}>

   <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={4}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  centeredSlides={false}
  loop={true}
  className='purple_dots'
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 1.8,
    },
    1200:{
      slidesPerView: 2,
    },
     1300: {
      slidesPerView:2.5,
      spaceBetween: 30,
    },
     1400: {
      slidesPerView:2.9,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView:3.1,
      spaceBetween: 30,
    },
     1750: {
      slidesPerView:3.8,
      spaceBetween: 30,
    },
     1900: {
      slidesPerView: 4.15,
      spaceBetween: 30,
    },
  }}
>
        {ComfortsData.map((slide,index) => (
          <SwiperSlide key={index}>
            <div className={`${style.singleSlide}`} onMouseEnter={()=>setExperienceVideo(index)} onMouseLeave={()=>setExperienceVideo(null)}>
              <div className={style.image}>
                <Image src={slide.image} alt={slide.title} width={120} height={120} />
              </div>
              <div className={style.content}>
                <h3 className={`${style.title} white`}>{slide.title}</h3>
                <p className='white'>{slide.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>




</div>
</div>




</section>


{/* playtopia section  */}
<section className={`common_section ${style.playtopia_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`} data-aos="fade-up">

      <div className={`left ${style.left}`}>
        <p className='white'>Playtopia</p>
        <h2 className='common_heading white'>Make Your Birthday a Blockbuster</h2>
      </div>

    </div>



       <div className={style.playtopiaCard}>

        {PlaytopiaData.map((slide,index) => (

            <div className={`${style.singleSlide}`} key={index} data-aos="fade-up" data-aos-delay={`${index*250}`}>
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


{/* retail section  */}
<section className={`common_section yellow_section ${style.retail_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`} data-aos="fade-up">
      <div className={`left ${style.left}`}>
        <p className='purple'>Retail Outlet - Souvenirs & Gifts</p>
        <h2 className='common_heading purple'>Take A Piece Of Jollywood Home</h2>
      </div>

    </div>

    <div className={style.retailCard}>

        {RetailData.map((slide,index) => (

            <div className={`${style.singleSlide}`} key={index} data-aos="fade-up" data-aos-delay={`${index*250}`}>
              <div className={style.image}>
                <Image src={slide.image} width={570} height={639} alt={slide.title}/>

              </div>
              <div className={style.content}>
                <h3 className={`${style.title}`}>{slide.title}</h3>
                <Button href={slide.link} text="" className="link white large"></Button>
              </div>
            </div>

        ))}

    </div>

</div>




</section>



{/* corporate section  */}
<section className={`common_section ${style.corporate_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`} data-aos="fade-right">

      <div className={`left ${style.left}`} data-aos="fade-right">
        <p className='white'>Corporate</p>
        <h2 className='common_heading white'>Studios for MICE</h2>
      </div>

    </div>

<div className={style.splitSection}>

  <div className={style.singleTexts}>
<h3>Meeting</h3>
<h3>Incentive</h3>
<h3>Conference</h3>
<h3>Events</h3>
<div>
  <Button href="#" text="KNow More" className="common_btn orange_bg black_text black_shadow left_tilt arrow"></Button>
  </div>

  </div>

   <div className={style.corporateCard}>

        {CorporateData.map((slide,index) => (

            <div className={`${style.singleSlide}`} key={index} data-aos="fade-up" data-aos-delay={`${index*250}`}>
              <div className={style.image}>
                <Image src={slide.image} width={420} height={500} alt={slide.title}/>

              </div>
              <div className={style.content}>
                <h3 className={`${style.title} white`}>{slide.title}</h3>
                <Button href={slide.link} text="" className="link white  large"></Button>
              </div>
            </div>

        ))}

    </div>

</div>






</div>

</section>





    </>
  )
}
