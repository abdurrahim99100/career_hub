import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedJobs = ({ data }) => {
    // console.log(data);
    const navigate = useNavigate();

    const clickData = data;
    // console.log(clickData);


    const { id, address, company, jobtitle, salary, picture, remote, ful_time } = data;
    return (
        <div className='bg-slate-100 p-10 rounded-xl'>
            <img className='w-60 h-40' src={picture} alt="" />
            <h3 className='text-xl'>{jobtitle}</h3>
            <p className='my-2'>{company}</p>
            <button className='border-2 border-indigo-600 rounded px-2 mr-2'>{remote}</button>
            <button className='border-2 border-indigo-600 rounded px-2 mr-2'>{ful_time}</button>
            <div className='flex my-4'>
                <p className='flex mr-7'><MapPinIcon className="h-6 w-6 text-blue-500" />{address}</p>
                <p className='flex'><CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> Salary: {salary}</p>
            </div>
            {/* <button>View Details</button> */}
            <button className='btn-primary' onClick={() => navigate(`/details/${id}`)}>View Details</button>
        </div>
    );
};

export default FeaturedJobs;