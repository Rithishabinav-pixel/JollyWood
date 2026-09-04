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
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },
   {
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },
   {
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },
   {
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },
   {
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },
   {
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },
   {
    image:"/assets/images/ac-rooms.png",
    title:"Air-conditioned Rooms",
    content:"Stay cool and comfortable with climate-controlled rooms designed for restful nights."
  },

]


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



// retail data

const RetailData = [
  {
    image:"/assets/images/aqua.png",
    title:"Aqua",
    link:""
  },
    {
    image:"/assets/images/aqua.png",
    title:"Aqua",
    link:""
  },
   {
    image:"/assets/images/aqua.png",
    title:"Aqua",
    link:""
  },

]


// corporate data
const CorporateData = [
  {
    image:"/assets/images/bm.png",
    title:"Business Meeting",
    link:""
  },
    {
    image:"/assets/images/bm.png",
    title:"Business Meeting",
    link:""
  },
   {
    image:"/assets/images/bm.png",
    title:"Business Meeting",
    link:""
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
  <Button href="#" text="Book Tickets" className="common_btn orange_bg white_text right_tilt big"></Button>
  <Button href="#" text="Group Booking" className="common_btn white_bg black_text left_tilt big"></Button>

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

  <div className={`${style.row} ${style.upperRow}`}>


    {randomStories.squareImages[0] && (
      <div className={style.squareImg}>

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
      <Link
        href={randomStories.content[0].link}
        className={`${style.content} ${style.square} ${style.curved}`}
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

      </Link>
    )}


    {/* ================================
        PINK CONTENT
    ================================= */}

    {randomStories.content[1] && (
      <Link
        href={randomStories.content[1].link}
        className={`${style.content} ${style.potrait}`}
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

      </Link>
    )}


    {/* ================================
        SQUARE IMAGE 2
    ================================= */}

    {randomStories.squareImages[1] && (
      <div className={style.squareImg}>

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
      <Link
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

      </Link>
    )}


    {randomStories.landscapeImages[0] && (
      <div className={style.landscapeImg}>

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
      <Link
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

      </Link>
    )}



    {randomStories.content[4] && (
      <Link
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

      </Link>
    )}

  </div>

</div>


</div>

</section>


{/* Comfort & Style section  */}

<section className={`common_section yellow_section ${style.comfort_section}`}>

<div className={`container ${style.container}`}>

   <div className={`top_heading left_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <h2 className='common_heading purple'>Stay Close to the Action in Comfort & Style</h2>
        <p className=''>Make your Vels Jollywood experience even more memorable with a stay at our on-site resort. Whether you're winding down after a fun-filled day or planning a weekend getaway, our cozy rooms, family-friendly amenities, and scenic surroundings offer the perfect retreat.</p>
         <Button href="#" text="Book a Stay" className="common_btn white_bg black_text left_tilt stay"></Button>
      </div>

      <div className={`right ${style.right}`}>
<Image src="/assets/images/comfort_stay.png" width={870} height={565} alt=''/>
      </div>
    </div>

</div>

<div className={`container full_container ${style.container} ${style.stay_slider_container}`}>
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


{/* retail section  */}
<section className={`common_section yellow_section ${style.retail_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='purple'>Retail Outlet - Souvenirs & Gifts</p>
        <h2 className='common_heading purple'>Take the magic of Jollywood home.</h2>
      </div>

    </div>

    <div className={style.retailCard}>

        {RetailData.map((slide,index) => (

            <div className={`${style.singleSlide}`} key={index}>
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

    <div className={`top_heading left_align ${style.top_heading}`}>

      <div className={`left ${style.left}`}>
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

            <div className={`${style.singleSlide}`} key={index}>
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
