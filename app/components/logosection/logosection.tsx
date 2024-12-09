import React from 'react'
import Image from 'next/image'

export const LogoSection = () => {
  return (
    <div className='w-[1440px] h-[122px] bg-black flex justify-evenly items-center m-auto '>
        <Image
        src={'/logosection/1.png'}
        width={100}
        height={100}
        alt='versace logo'
        className='w-[166.5px] h-[33px]'
        />
        <Image
        src={'/logosection/2.png'}
        width={100}
        height={100}
        alt='zara logo'
        className='w-[91px] h-[38px]'
        />
        <Image
        src={'/logosection/3.png'}
        width={100}
        height={100}
        alt='gucci logo'
        className='w-[156px] h-[36px]'
        />
        <Image
        src={'/logosection/4.png'}
        width={100}
        height={100}
        alt='prada logo'
        className='w-[194px] h-[32px]'
        />
        <Image
        src={'/logosection/5.png'}
        width={100}
        height={100}
        alt='ck logo'
        className='w-[207px] h-[33px]'
        />
        
    </div>
  )
}