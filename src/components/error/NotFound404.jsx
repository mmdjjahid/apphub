import React from 'react';
import img404 from '../../assets/error-404.png'
import { useNavigate } from 'react-router';
const NotFound404 = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center'>
           <img src={img404} alt="" />
           <p className='font-semibold text-5xl text-[#001931]'>Oops, page not found!</p>
           <p className='text-[#627382] mt-4'>The page you are looking for is not available.</p>
           <button onClick={()=>navigate(-1)} className="btn bg-[#00D390] text-white">Go Back</button>
        </div>
    );
};

export default NotFound404;