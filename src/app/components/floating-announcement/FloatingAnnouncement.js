"use client";

import React from 'react';
import style from "./FloatingAnnouncement.module.css"
import Button from '../ui/Button';

const announcementsData = [
    {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },
     {
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"#"
    },

]

export default function FloatingAnnouncement() {
  return (
  <div className={style.floating_announcement}>
    <div className={style.marquee}>
      <div className={style.marquee_track}>
        {[...announcementsData, ...announcementsData].map((item, index) => (
          <div
            key={index}
            className={style.announcementSlide}
          >
            <span>{item.title}</span>

            <Button href={item.link} text="Explore More" className="link orange_icon"></Button>

          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
