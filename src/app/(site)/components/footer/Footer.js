import React from 'react'

import style from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const currentYear = new Date().getFullYear();

export default function Footer() {


  return (

    <footer id={style.footer}>

        <div className={`container`}>

            <div className={style.linksContainer}>

<div className={style.siteInfo}>
    <Link className={style.logo} href="/">
<Image src="/assets/images/logo.svg" width={151} height={99} alt='Jollywood Logo'/>
</Link>
<ul className={style.socialIcons}>
    <li> <a href='https://www.facebook.com/velsjollywoodadventures/' target='_blank' rel='noopener noreferrer'> <Image src="/assets/images/facebook_icon.svg" width={30} height={30} alt='Facebook'/> </a> </li>
    <li> <a href='https://twitter.com/Jollywoood' target='_blank' rel='noopener noreferrer'> <Image src="/assets/images/twitter_icon.svg" width={30} height={30} alt='Twitter'/> </a> </li>
    <li> <a href='https://www.instagram.com/velsjollywoodadventures/' target='_blank' rel='noopener noreferrer'> <Image src="/assets/images/insta_icon.svg" width={30} height={30} alt='Instagram'/> </a> </li>
    <li> <a href='https://www.youtube.com/@Jollywoodadventures' target='_blank' rel='noopener noreferrer'> <Image src="/assets/images/youtube_icon.svg" width={30} height={30} alt='Youtube'/> </a> </li>
</ul>
</div>

<div className={style.menuColumn}>
    <h3>Quick Link</h3>
    <ul>
        <li> <Link href="/">Home </Link>  </li>
        <li> <Link href="/dining">Dining  </Link>  </li>
        <li> <Link href="/our-story">Our Story </Link>  </li>
        <li> <Link href="/studios">Studios </Link>  </li>
        <li> <Link href="/gallery">Gallery </Link>  </li>
        <li> <Link href="/blog">Blog </Link>  </li>
        <li> <Link href="/contact-us">Reached Us </Link>  </li>
        <li> <Link href="/corporate-events">Host For Events </Link>  </li>
    </ul>
</div>

<div className={style.menuColumn}>
    <h3>Rides</h3>
    <ul>
        <li> <Link href="/dry-rides">Dry Ride  </Link>  </li>
        <li> <Link href="/water-rides">Water Ride  </Link>  </li>
    </ul>
</div>


<div className={style.menuColumn}>
    <h3>Information for Guests</h3>
    <ul>
        <li> <Link href="/faq">FAQs</Link>  </li>
        <li> <Link href="/visitors-guide">Visitor's Guide</Link>  </li>
        <li> <Link href="/guest-safety">Guest Safety</Link>  </li>
        <li> <Link href="/rules-regulations">Rules and Regulations</Link>  </li>
        <li> <Link href="/terms-of-use">Terms of Use</Link>  </li>
        <li> <Link href="/privacy-policy">Privacy policy</Link>  </li>
    </ul>
</div>


<div className={style.contactDetails}>
    <ul>
        <li>
            <a href='https://maps.app.goo.gl/snRpHZoYgE9TW2X17' target='_blank'>
            <Image src="/assets/images/map_pin.svg" width={32} height={32} alt=''/>
        <div>
            <h4>Vels Studios &  Entertainment Pvt Ltd</h4>
            <p>Plot No 24 & 26,<br/>
Bidadi Industrial Area,<br/>
Ramanagara District,<br/>
Bidadi - 562 109.</p>
        </div>
        </a>
         </li>

          <li>
            <a href='tel:+917009677009' target='_blank'>
            <Image src="/assets/images/call_icon.svg" width={32} height={32} alt=''/>
        <div>
            <p>+91 7009 67 7009</p>
        </div>
        </a>
         </li>

         <li>
            <a href='mailto:marketing@velsjollywood.co.in' target='_blank'>
            <Image src="/assets/images/mail_icon.svg" width={32} height={32} alt=''/>
        <div>
            <p>marketing@velsjollywood.co.in</p>
        </div>
        </a>
         </li>


    </ul>
</div>

</div>

<div className={style.playArea}>
    <Image className={style.mainImg} src="/assets/images/footer_play_area.svg" width={1770} height={470} alt=''/>

<div className={style.ropes}>
    <Image src="/assets/images/rope.svg" width={18} height={212} alt=''/>
    <Image src="/assets/images/rope.svg" width={18} height={212} alt=''/>
    <Image src="/assets/images/rope.svg" width={18} height={212} alt=''/>
    <Image src="/assets/images/rope.svg" width={18} height={212} alt=''/>
    <Image src="/assets/images/rope.svg" width={18} height={212} alt=''/>
    <Image src="/assets/images/rope.svg" width={18} height={212} alt=''/>
</div>

<Image className={style.top} src="/assets/images/cone-top.svg" width={93} height={71} alt=''/>

<div className={style.ice}>
        <Image className={style.cart} src="/assets/images/ice-shop.svg" width={103} height={110} alt=''/>
       <Image className={style.shadow} src="/assets/images/ice-shadow.svg" width={103} height={2} alt=''/>
       <Image className={style.frontWheel} src="/assets/images/ice-wheel-front.svg" width={26} height={26} alt=''/>
       <Image className={style.backWheel} src="/assets/images/ice-wheel-back.svg" width={13} height={13} alt=''/>

</div>

</div>

<p className={style.copyrights}>
    © {currentYear} Vels Jollywood Studios & Adventures. All Rights Reserved. Designed & Developed By <a href='https://www.pixel-studios.com/' target='_blank'>Pixel Studios</a>
</p>

        </div>

    </footer>

  )
}
