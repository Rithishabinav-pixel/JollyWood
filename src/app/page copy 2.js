"use client"

import React, { useState } from 'react'
import lcpStyle from "./lcp.module.css"
import style from './page.module.css'
import Button from './components/ui/Button'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from 'next/link'

// High Adrenaline data 
const HighAdrenalineData = [
  {
    image:"/assets/images/romancia-street.png",
    video:"/assets/videos/hover_sample.mp4",
    title:"Romancia Street",
    link:"#"
  },
   {
    image:"/assets/images/romancia-street.png",
    video:"/assets/videos/hover_sample.mp4",
    title:"Romancia Street",
    link:"#"
  },
   {
    image:"/assets/images/romancia-street.png",
    video:"/assets/videos/hover_sample.mp4",
    title:"Romancia Street",
    link:"#"
  },
   {
    image:"/assets/images/romancia-street.png",
    video:"/assets/videos/hover_sample.mp4",
    title:"Romancia Street",
    link:"#"
  },
   {
    image:"/assets/images/romancia-street.png",
    video:"/assets/videos/hover_sample.mp4",
    title:"Romancia Street",
    link:"#"
  },
   {
    image:"/assets/images/romancia-street.png",
    video:"/assets/videos/hover_sample.mp4",
    title:"Romancia Street",
    link:"#"
  },
]


// Experience Worlds data 
const ExperienceWorldsData = [
  {
    tab:"attractions",
    label:"Attractions",
    content:[
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
  },
  {
    tab:"dry-rides",
    label:"Dry Rides",
    content:[
      {
       title:"Ride n Reel - d",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel - d",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel - d",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel - d",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel - d",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      
    ]
  },
   {
    tab:"water-rides",
    label:"Water Rides",
    content:[
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      
    ]
  },
   {
    tab:"adventures",
    label:"Adventures",
    content:[
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      
    ]
  },
   {
    tab:"live-shows",
    label:"Live Shows",
    content:[
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      {
       title:"Ride n Reel",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
       link:"#",
       image:"/assets/images/movie-wall.png",
       video:"/assets/videos/hover_sample.mp4"
      },
      
    ]
  },
  
]



// offer data 
const OfferData = [
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",
  "/assets/images/offer_img.png",

]


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
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
    link:"#",
    image:"/assets/images/royal-kitchen.png"
  },
   {
    title:"Planet Jollywood",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
    link:"#",
    image:"/assets/images/planet-jollywood.png"
  },
   {
    title:"Beach Container",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
    link:"#",
    image:"/assets/images/beach-container.png"
  },
   {
    title:"Dry Ride Container",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
    link:"#",
    image:"/assets/images/dry-ride-container.png"
  },
   {
    title:"Maze Runner Kiosk",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
    link:"#",
    image:"/assets/images/maze.png"
  },
  {
    title:"Romancia Street",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.",
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


// stories data 

const StoriesData = {
  images: [
    {
      url: "/assets/images/story1.png",
      type: "square",
    },
    {
      url: "/assets/images/story2.png",
      type: "square",
    },
    {
      url: "/assets/images/story3.png",
      type: "landscape",
    },
    {
      url: "/assets/images/story1.png",
      type: "square",
    },
    {
      url: "/assets/images/story2.png",
      type: "square",
    },
    {
      url: "/assets/images/story3.png",
      type: "landscape",
    },
  ],

  content: [
    {
      text: "Vels Jollywood completely transformed our event! The energy, the music, the performances — everything was pure magic. Our guests are still talking about it weeks later.",
      link: "#",
      name: "Pravin",
    },
    {
      text: "Vels Jollywood completely transformed our event! The energy, the music, the performances — everything was pure magic. Our guests are still talking about it weeks later.",
      link: "#",
      name: "Pravin",
    },
    {
      text: "Vels Jollywood completely transformed our event! The energy, the music, the performances — everything was pure magic. Our guests are still talking about it weeks later.",
      link: "#",
      name: "Pravin",
    },
    {
      text: "Vels Jollywood completely transformed our event! The energy, the music, the performances — everything was pure magic. Our guests are still talking about it weeks later.",
      link: "#",
      name: "Pravin",
    },
    {
      text: "Vels Jollywood completely transformed our event! The energy, the music, the performances — everything was pure magic. Our guests are still talking about it weeks later.",
      link: "#",
      name: "Pravin",
    },
    {
      text: "Vels Jollywood completely transformed our event! The energy, the music, the performances — everything was pure magic. Our guests are still talking about it weeks later.",
      link: "#",
      name: "Pravin",
    },
    {
      text: "Vels Jollywood completely transformed our event! The energy, the music, the performances — everything was pure magic. Our guests are still talking about it weeks later.",
      link: "#",
      name: "Pravin",
    },
  ],
};


const squareImages = StoriesData.images.filter(
  (item) => item.type === "square"
);

const landscapeImages = StoriesData.images.filter(
  (item) => item.type === "landscape"
);

let squareImageIndex = 0;
let landscapeImageIndex = 0;
let contentIndex = 0;


const renderSquareImage = () => {
  const image = squareImages[squareImageIndex];

  squareImageIndex++;

  if (!image) {
    return null;
  }

  return (
    <div className={style.squareImg}>
      <Image
        className={style.imageData}
        src={image.url}
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
  );
};


const renderLandscapeImage = () => {
  const image = landscapeImages[landscapeImageIndex];

  landscapeImageIndex++;

  if (!image) {
    return null;
  }

  return (
    <div className={style.landscapeImg}>
      <Image
        className={style.imageData}
        src={image.url}
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
  );
};


const renderContent = (
  className,
  frame,
  frameWidth,
  frameHeight
) => {
  const content = StoriesData.content[contentIndex];

  contentIndex++;

  if (!content) {
    return null;
  }

  return (
    <Link
      href={content.link}
      className={className}
    >
      <p>
        {content.text}
      </p>

      <h3 className={style.name}>
        {content.name}
      </h3>

      <Image
        className={style.frame}
        src={frame}
        width={frameWidth}
        height={frameHeight}
        alt=""
      />
    </Link>
  );
};


export default function page() {

  const [adrenalineVideo,setAdrenalineVideo] = useState(null);
  const [experienceVideo,setExperienceVideo] = useState(null);


  const [experienceWorlds,setExperienceWorlds] = useState(0);

  const [foodSouk,setFoodSouk] = useState(0);

  return (
    <>
    
    {/* hero section  */}
    
    <section className={lcpStyle.heroSection}>
     
       <video width="1920" height="1080" autoPlay loop muted preload="none">
      <source src="/assets/videos/home_hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

 



    {/* floating ticket */}
<Image className={lcpStyle.floating_tickets} src="/assets/images/floating_tickets.svg" width={75} height={790} alt=''/>

     <div className={`container ${lcpStyle.container}`}>

         {/* Characters  */}
<Image className={`${lcpStyle.character} ${lcpStyle.character_1}`} src="/assets/images/char_1.svg" width={480} height={506} alt=''/>
<Image className={`${lcpStyle.character} ${lcpStyle.character_2}`} src="/assets/images/char_2.svg" width={306} height={503} alt=''/>

      <h1 className="common_heading white">Cinematic Family <br className='desktop_break'/>Universe</h1>

<div className={lcpStyle.actions}>
  <Button href="#" text="Book Tickets" className="common_btn orange_bg white_text right_tilt"></Button>
  <Button href="#" text="Group Booking" className="common_btn white_bg black_text left_tilt"></Button>

</div>

      </div>
    </section>
    
{/* High Adrenaline section  */}

<section className={`common_section ${style.adrenaline_section}`}>
  <div className={`container section_container ${style.container}`}>

    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left`}>
        <p className='white'>High Adrenaline</p>
        <h2 className='common_heading white'>Frozen Moments </h2>
      </div>

       <div className={`right`}>
        <p className='white'>Eleven rides. Zero hesitation. Thrill Island is where Vels Jollywood turns the volume up — fast climbs, sharp drops, and the kind of screams that turn into laughter the second your feet hit the ground.</p>
       </div>

    </div>


    <div className={style.slider}>
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
                <Button href={slide.link} text="" className="link"></Button>
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

      <div className={`left ${style.left}`}>
        <p className='white'>Experience Worlds</p>
        <h2 className='common_heading white'>5 Universe In 1 Galaxy @ Bengaluru</h2>
        <p className='white'>Every zone is its own universe — from prehistoric jungles to sunken ships, candy realms to adrenaline peaks.</p>
      </div>

       <div className={`right ${style.right}`}>

        <div className={style.exp_tabs}>
          {ExperienceWorldsData.map((item,index)=>(
 <button className={`${style.tab_btn} ${index===experienceWorlds?style.active:""}`} key={index} onClick={()=>setExperienceWorlds(index)} >{item.label} </button>
          ))}
         
        </div>
       
       </div>

    </div>
</div>

  <div className={`container section_container full_container ${style.container}`}>
       <div className={style.slider}>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={4}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  centeredSlides={false}
  loop={true}
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
 <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className=''>Special Offers</p>
        <h2 className='common_heading purple'>The Jollier the Deal</h2>
      </div>
    </div>
    </div>

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
        {[...OfferData,...OfferData].map((slide,index) => (
          <SwiperSlide key={index}>
            <div className={`${style.singleSlide}`} onMouseEnter={()=>setExperienceVideo(index)} onMouseLeave={()=>setExperienceVideo(null)}>
              <div className={style.image}>
                <Image src={slide} width={310} height={388} alt="Offer"/>
                
              </div>

            </div>
          </SwiperSlide>
        ))}



      </Swiper>
    </div>
  </div>

  <Image className={style.sliderMock} src="/assets/images/slider-mockup.svg" width={430} height={687} alt=''/>

  <div className='center_nav slider_arrow'>
  <button className='offer_prev'> <Image src="/assets/images/slider-arrow-left.svg" width={60} height={60} alt='' /> </button>
  <button className='offer_next'><Image src="/assets/images/slider-arrow-right.svg" width={60} height={60} alt='' /></button>
</div>

</section>


{/* cinematic section  */}
<section className={`common_section ${style.cinematic_section}`}>
<div className={`container ${style.container}`}>

   <div className={`top_heading left_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>The Stage</p>
        <h2 className='common_heading white'>Live Cinematic Spectacle</h2>
        <p className='white'>A multi-million rupee production featuring aerial acrobatics, gravity-defying stunts, and the most iconic tracks of Indian cinema.</p>
      </div>
   
      <div className={`right ${style.right}`}>
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

   <div className={`top_heading left_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>Flavours of the World</p>
        <h2 className='common_heading white'>Cooking Up Memories</h2>
      </div>
    </div>


    <div className={style.memories_grid}>

      <div className={`${style.card} ${style.videoTabContainer}`}>

       <div className={style.content}>
         <h3 className='white'>Food Souk</h3>
  <p className='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
 <Button href="#" text="Explore More" className="link white"></Button>
       </div>

         <video width="1920" height="1080" autoPlay loop muted preload="none">
      <source src={FoodSoukTabData[foodSouk].video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className={style.tabs}>
      {FoodSoukTabData.map((item,index)=>(
        <button key={index} onClick={()=>setFoodSouk(index)}> <Image src={item.image} width={111} height={60} alt='Food Souk'/></button>
      ))}
    </div>


      </div>


      {FoodSoukData.map((item,index)=>(
 <div className={`${style.card}`} key={index} style={{ backgroundImage: `url(${item.image})` }}>
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
 <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className=''>Facilities & Services</p>
        <h2 className='common_heading purple'>Lorem ipsum dolor</h2>
      </div>
    </div>
    </div>

<div className={`strict_full full_container ${style.container}`}>
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

   <div className={`top_heading left_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>Visitor Stories</p>
        <h2 className='common_heading white'>They Came.
They Loved It.</h2>
      </div>
    </div>

   <div className={style.stories_container}>

  {/* ================================
      UPPER ROW
  ================================= */}

  <div className={`${style.row} ${style.upperRow}`}>

    {/* Square Image 1 */}
    {renderSquareImage()}


    {/* Orange Content */}
    {renderContent(
      `${style.content} ${style.square} ${style.curved}`,
      "/assets/images/frame-orange.svg",
      246,
      271
    )}


    {/* Pink / Portrait Content */}
    {renderContent(
      `${style.content} ${style.potrait}`,
      "/assets/images/pink-frame.svg",
      291,
      339
    )}


    {/* Square Image 2 */}
    {renderSquareImage()}

  </div>


  {/* ================================
      LOWER ROW
  ================================= */}

  <div className={`${style.row} ${style.lowerRow}`}>

    {/* Yellow Content */}
    {renderContent(
      `${style.content} ${style.square} ${style.straight}`,
      "/assets/images/frame-yellow.svg",
      311,
      313
    )}


    {/* Landscape Image */}
    {renderLandscapeImage()}


    {/* Blue Content */}
    {renderContent(
      `${style.content} ${style.square} ${style.straight}`,
      "/assets/images/frame-blue.svg",
      311,
      313
    )}


    {/* Green Content */}
    {renderContent(
      `${style.content} ${style.square} ${style.curved}`,
      "/assets/images/frame-green.svg",
      246,
      271
    )}

  </div>

</div>


</div>

</section>




    </>
  )
}
