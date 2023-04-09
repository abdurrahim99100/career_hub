import React from 'react';
import Banner from './Banner';
import Category from './Category';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    const loaderData = useLoaderData();
    console.log();
    return (
        <div>
            <div>
                {/* banner */}
                <Banner />
                <Category/>
                <div className='text-center'>
                    <h3 className='text-4xl font-semibold'>Featured Jobs</h3>
                    <p className='text-gray-400 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                {
                    loaderData.map(data => <FeaturedJobs key={data.id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default Home;