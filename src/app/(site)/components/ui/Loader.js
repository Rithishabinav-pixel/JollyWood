import React from 'react'
import style from './Loader.module.css'

export default function Loader() {
  return (
    <div className={style.loader}>
        <video
      width="1920"
      height="1080"
      poster="/assets/images/loader-poster.webp"
      preload="none"
      autoPlay
      muted
    >
      <source src="/assets/videos/loader.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}
