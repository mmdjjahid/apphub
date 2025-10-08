import React from 'react';
import googlePlay from '../../assets/GooglePlay.png'
import appStore from '../../assets/AppStore.png'
import heroImg from '../../assets/hero.png'


const Banner = () => {
    return (
        <div className='mx-3 md:mx-0 flex flex-col justify-center items-center'>
            <h1 className='mt-20 text-center font-black text-3xl md:text-7xl text-[#001931]'>We Build <br /> <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">Productive</span> Apps</h1>
            <p className='mt-4 mb-10 text-center text-[8px] md:text-xl font-normal text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className=' flex gap-3 mb-10'>
                <a href="http://play.google.com"><button className="bg-[#D2D2D2] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img className='md:w-fit w-3' src={googlePlay} alt="" />Google Play</button></a>
                <a href="http://www.apple.com/app-store/"><button className="bg-[#D2D2D2] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img className='md:w-fit w-3' src={appStore} alt="" />App Store</button></a>
            </div>
            <img className='w-70 md:w-fit' src={heroImg} alt="" />
        </div>
    );
};

export default Banner;