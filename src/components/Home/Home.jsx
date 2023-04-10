import React from 'react';
import Banner from './Banner';
import Category from './Category';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const useLoadData = useLoaderData();
    // console.log(useLoadData);
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
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        useLoadData.map(data => <FeaturedJobs key={data.id} data={data}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;