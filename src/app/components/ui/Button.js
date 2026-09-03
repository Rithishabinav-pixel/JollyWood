import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Button({href,text,className}) {
  return (
    <>
    
     <Link className={className?className:""} href={href?href:""}>

      {className.includes("ticket")?
        <Image src="/assets/images/confirmation_number.svg" width={40} height={40} alt=''/>
        :""
        }

         {className.includes("stay")?
        <Image src="/assets/images/stay.svg" width={40} height={40} alt=''/>
        :""
        }

        {text?text:""}

        {className.includes("link")?
        <Image src="/assets/images/orange-arrow.svg" width={24} height={24} alt=''/>
        :""
        }
        
        {className.includes("arrow")?
        <Image className='right_arrow' src="/assets/images/btn-right-arrow.svg" width={37} height={24} alt=''/>
        :""
        }
         
      </Link>
    
    </>
  )
}
