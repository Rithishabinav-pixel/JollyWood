import Image from 'next/image'
import React from 'react'

export default function ScrollTop() {
  return (
    

    <a className='scroll_to_top' href='#'>
        <Image className='text' src="/assets/images/btt.svg" width={90} height={90} alt='' />
        <Image className='arrow' src="/assets/images/st_arrow.svg" width={43} height={43} alt=''/>

    </a>


  )
}
