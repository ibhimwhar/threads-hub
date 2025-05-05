import React from 'react';
import BannerImage from '../assets/pexels-aden-ardenrich-181745-581339.jpg';

const About = () => {
    return (
        <div className="bg-[#f8fafc] text-[#0f172a] py-50 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">About Us</h1>
                <p className="text-center md:text-lg mb-12 max-w-3xl mx-auto">
                    We're more than just a clothing brand we're a culture. From unique threads to bold accessories,
                    everything we create tells a story. Built from passion, made for you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <img
                        src={BannerImage}
                        alt="About our brand"
                        className="w-full rounded-2xl shadow-lg object-cover h-80"
                    />

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold">Why We Exist</h2>
                        <p>
                            We started with a simple goal: to create standout fashion that speaks loud and feels right.
                            Our collections are inspired by street style, individualism, and movement. Whether you're stepping
                            out or leveling up your wardrobe, our mission is to make you feel bold, confident, and original.
                        </p>

                        <p>
                            Everything is designed in-house, crafted with quality, and delivered with care. Join the tribe.
                        </p>

                        <div className="mt-4">
                            <a href="/shop" className="bg-[#38bdf8] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#38bdf8]/80 transition">
                                Explore Our Products
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;