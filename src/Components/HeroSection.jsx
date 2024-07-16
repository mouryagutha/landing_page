import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            it is landing page 
            <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">{" "}for startup </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Discover a world of innovative solutions and cutting-edge technology designed to elevate your business and simplify your life. 
        At Lander, we are dedicated to providing top-notch services that cater to your unique needs.
        Whether you're looking to streamline your operations, enhance your online presence, or find the perfect tech solution, our team of experts is here to help. 
        Explore our comprehensive range of services, from web development and design to digital marketing and IT consulting.
        Join us on the journey to success and let us transform your vision into reality. Your future starts here.

        </p>
        <div className="felx justify-center my-10">
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>start for free</a>
            <a href='#' className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
        </div>
        <div className='flex after:flex-wrap mt-10 justify-center '>
            <video 
                autoPlay 
                loop 
                muted
                className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 '>
            <source src={video1} type='video/mp4'/>
            your browser does not support the video tag.
            </video>
            <video 
                autoPlay 
                loop 
                muted 
                className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 '>
            <source src={video2} type='video/mp4'/>
            your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
};

export default HeroSection;