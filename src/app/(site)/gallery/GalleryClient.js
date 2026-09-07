"use client"

import React, { useEffect, useMemo, useState } from 'react'
import style from './Gallery.module.css'
import '../innerpage.css'


function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return hash;
}

function deterministicShuffle(list) {
  return [...list].sort((a, b) => hashString(a.id) - hashString(b.id));
}


export default function GalleryClient({ images, categories }) {

const [selectedCategory, setSelectedCategory] = useState("All");
const [lightboxIndex, setLightboxIndex] = useState(null);

const equalGallery = useMemo(() => {
  const selectedGallery = images.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.categories.includes(selectedCategory);
  });

  const shuffledGallery = deterministicShuffle(selectedGallery);

  const totalImages = Math.floor(shuffledGallery.length / 4) * 4;

  return shuffledGallery.slice(0, totalImages);
}, [images, selectedCategory]);

const galleryCount = equalGallery.length / 4;

const galleryFirstColumn = equalGallery.slice(
  0,
  galleryCount
);

const gallerySecondColumn = equalGallery.slice(
  galleryCount,
  galleryCount * 2
);

const galleryThirdColumn = equalGallery.slice(
  galleryCount * 2,
  galleryCount * 3
);

const galleryFourColumn = equalGallery.slice(
  galleryCount * 3,
  galleryCount * 4
);

const openLightbox = (index) => setLightboxIndex(index);
const closeLightbox = () => setLightboxIndex(null);
const showPrev = () => setLightboxIndex((index) => (index - 1 + equalGallery.length) % equalGallery.length);
const showNext = () => setLightboxIndex((index) => (index + 1) % equalGallery.length);

useEffect(() => {
  if (lightboxIndex === null) return;

  const total = equalGallery.length;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") setLightboxIndex(null);
    if (event.key === "ArrowLeft") setLightboxIndex((index) => (index - 1 + total) % total);
    if (event.key === "ArrowRight") setLightboxIndex((index) => (index + 1) % total);
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [lightboxIndex, equalGallery.length]);

  return (
    <>

{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Gallery</h1>
    </div>
</section>


{/* gallery section  */}

<section className={`common_section no_padding_top ${style.gallery_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading  ${style.top_heading}`}>
      <div className={`${style.right}`}>
        <button className={`${style.tab_btn} ${selectedCategory==="All"?style.active:""}`} onClick={()=>setSelectedCategory("All")}>All</button>
        {categories && categories.map((item)=>(
          <button key={item} className={`${style.tab_btn} ${selectedCategory===item?style.active:""}`} onClick={()=>setSelectedCategory(item)}>{item}</button>
        ))}
      </div>

    </div>

    <div className={style.galleryGrid}>
      <div className={style.cards}>
      { galleryFirstColumn && galleryFirstColumn.map((item,index)=>(
        <React.Fragment key={item.id}>
<img src={item.image} loading="lazy" alt="" onClick={()=>openLightbox(index)}/>
</React.Fragment>
        ))
      }
      </div>

       <div className={style.cards}>
      { gallerySecondColumn && gallerySecondColumn.map((item,index)=>(
        <React.Fragment key={item.id}>
<img src={item.image} loading="lazy" alt="" onClick={()=>openLightbox(galleryCount + index)}/>
</React.Fragment>
        ))
      }
      </div>

       <div className={style.cards}>
      { galleryThirdColumn && galleryThirdColumn.map((item,index)=>(
        <React.Fragment key={item.id}>
<img src={item.image} loading="lazy" alt="" onClick={()=>openLightbox(galleryCount * 2 + index)}/>
</React.Fragment>
        ))
      }
      </div>

       <div className={style.cards}>
      { galleryFourColumn && galleryFourColumn.map((item,index)=>(
        <React.Fragment key={item.id}>
<img src={item.image} loading="lazy" alt="" onClick={()=>openLightbox(galleryCount * 3 + index)}/>
</React.Fragment>
        ))
      }
      </div>
    </div>


</div>




</section>

{lightboxIndex !== null && equalGallery[lightboxIndex] && (
  <div className={style.lightbox} onClick={closeLightbox}>
    <button type="button" className={style.lightboxClose} onClick={closeLightbox} aria-label="Close">×</button>

    {equalGallery.length > 1 && (
      <button
        type="button"
        className={`${style.lightboxNav} ${style.lightboxPrev}`}
        onClick={(event) => { event.stopPropagation(); showPrev(); }}
        aria-label="Previous image"
      >
        ‹
      </button>
    )}

    <img
      className={style.lightboxImage}
      src={equalGallery[lightboxIndex].image}
      alt=""
      onClick={(event) => event.stopPropagation()}
    />

    {equalGallery.length > 1 && (
      <button
        type="button"
        className={`${style.lightboxNav} ${style.lightboxNext}`}
        onClick={(event) => { event.stopPropagation(); showNext(); }}
        aria-label="Next image"
      >
        ›
      </button>
    )}
  </div>
)}


    </>
  )
}
