import React from 'react'
import style from'./Error.module.css'
import Image from 'next/image'
import Link from 'next/link'
import '@/app/(site)/globals.css'
import Button from './Button'

export default function NotFoundContent() {
  return (

<section className={style.errorSection}>
  <div className={`container ${style.container}`}>

<div className={style.errorDisplay}>
  <h2>4</h2>

<div className={style.filmRole}>
  <Image className={style.disk} src="/assets/images/disc.svg" width={500} height={500} alt=''/>
  <Image className={style.frameBg} src="/assets/images/frame-bg.svg" width={500} height={566} alt=''/>
  <Image className={style.frameFg} src="/assets/images/frame-fg.svg" width={500} height={566} alt=''/>
</div>

  <h2>4</h2>

</div>

<div className={style.content}>
  <h3>Oops! Page Not Found</h3>
  <p>The page you’re looking for doesn’t exist or may have been moved. But don’t worry — there’s plenty more fun waiting for you at Jollywood.</p>
  <Button text="GoTo Home" href="/" className="common_btn orange_bg white_text right_tilt" ></Button>
</div>

  </div>
</section>

  )
}
