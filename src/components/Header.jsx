import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex my-4 justify-between'>
            <div>
                <h2 className='text-2xl font-bold'>Bangladesh Jobs L.T.D</h2>
            </div>
            <div className='flex gap-5 text-xl font-semibold'>
                <Link to='home'>Home</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='applied'>Applied Jobs</Link>
                <Link to='blog'>Blog</Link>
            </div>
            <button className='btn-primary'>Star Applying</button>
        </div>
    );
};

export default Header;