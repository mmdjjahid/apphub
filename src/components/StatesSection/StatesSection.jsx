import React from 'react';

const StatesSection = () => {
    return (
        <div className='max-w-[1600px] mx-auto my-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20'>
            <h3 className='text-center text-2xl md:text-5xl font-bold text-white'>Trusted by Millions, Built for You</h3>
            <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-5 md:gap-50'>
                <div className='text-center'>
                    <p className='text-base text-white font-normal'>Total Downloads</p>
                    <h2 className='font-extrabold text-[64px] text-white'>29.6M</h2>
                    <p className='text-base text-white font-normal'>21% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-base text-white font-normal'>Total Reviews</p>
                    <h2 className='font-extrabold text-[64px] text-white'>906K</h2>
                    <p className='text-base text-white font-normal'>46% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-base text-white font-normal'>Active Apps</p>
                    <h2 className='font-extrabold text-[64px] text-white'>132+</h2>
                    <p className='text-base text-white font-normal'>31 more will Launch</p>
                </div>
            </div>
            
        </div>
    );
};

export default StatesSection;