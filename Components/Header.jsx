import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
                <button className='flex item-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-5px_6px_0px_#000000]'> Create Blog <Image src={assets.arrow} /></button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:txt-5xl font-medium'>Blog Diary</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et consectetur iure ab sint atque voluptatum vitae quod doloribus praesentium minima, sit archite voluptatem.</p>

            </div>
        </div>
    )
}

export default Header
