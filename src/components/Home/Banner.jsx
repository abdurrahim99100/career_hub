import React from 'react';
import BannerP from '../../img/banner/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center my-5'>
            <div>
                <h2 className='text-8xl font-semibold'>One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span></h2>
                <p className='text-gray-500 my-5'>Explore thousands of job opportunities with <br /> all the information you need. Its your future. Come <br /> find it. Manage all your job application from start to finish.</p>
                <button className='btn-primary'>Get Started</button>
            </div>
            <div>
                <img src={BannerP} alt="" />
            </div>
        </div>
    );
};

export default Banner;