import React from 'react';
import style from "./FloatingAnnouncement.module.css"
import Button from '../ui/Button';
import { prisma } from '@/lib/prisma';

export default async function FloatingAnnouncement() {

  const announcementsData = await prisma.announcement.findMany({
    where: { isActive: true },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
  });

  if (announcementsData.length === 0) {
    return null;
  }

  return (
  <div className={style.floating_announcement}>
    <div className={style.marquee}>
      <div className={style.marquee_track}>
        {[...announcementsData, ...announcementsData].map((item, index) => (
          <div
            key={index}
            className={style.announcementSlide}
          >
            <span>{item.text}</span>

            <Button href={item.link} text="Explore More" className="link orange_icon"></Button>

          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
