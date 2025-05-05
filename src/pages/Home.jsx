import React from 'react'
import Background_Image from '../assets/pexels-sebastiaan9977-1311590.jpg'
import { Link } from 'react-router'

const Home = () => {
    return (
        <div className='py-30 md:py-50 px-5 md:px-20 lg:px-50 bg-[#f1f5f9] text-[#0f172a]'>

            <h1 className='text-2xl md:text-4xl font-bold text-center'>Welcome to ThreadsHub</h1>

            <p className='text-center mt-4'>Your one stop shop for all your threading needs.</p>

            <img
                src={Background_Image}
                alt="background image"
                className='rounded-lg mt-10 w-full h-64 md:h-[60vh] object-cover'
            />


            <div className='text-center mt-10'>
                <p>Explore our collection of threads and accessories.</p>
                <Link to="/shop" >
                    <button className='bg-[#38bdf8] text-white px-4 py-2 rounded-lg mt-4 cursor-pointer hover:bg-[#38bdf8]/80 transition duration-200'>
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
