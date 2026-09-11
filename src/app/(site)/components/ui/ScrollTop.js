"use client"

import Image from 'next/image'
import React from 'react'
import { getLenisInstance } from '../lenis/SmoothScroll'

export default function ScrollTop() {
  const handleClick = (event) => {
    event.preventDefault()
    const lenis = getLenisInstance()
    if (lenis) {
      lenis.scrollTo(0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (


    <a className='scroll_to_top' href='#' aria-label='Scroll to top' onClick={handleClick}>
        <Image className='text' src="/assets/images/btt.svg" width={90} height={90} alt='' />
        <Image className='arrow' src="/assets/images/st_arrow.svg" width={43} height={43} alt=''/>

    </a>


  )
}
