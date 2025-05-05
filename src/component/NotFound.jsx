import React from 'react'
import Image from '../assets/image-removebg-preview.png'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-[#f1f5f9] text-[#0f172a]'>
            <img src={Image} alt="Not Found" className='w-1/2 h-auto' />
            <h1 className='text-4xl font-semibold text-center mt-20'>Page Not Found</h1>
            <p className='text-center mt-4'>The page you are looking for does not exist.</p>
            <p className='text-center mt-2'>Please return to the <a href='/' className='text-[#38bdf8] hover:underline underline-offset-4'>homepage</a>.</p>
        </div>
    )
}

export default NotFound
