import React from 'react';
// import hero icon;
import { CurrencyDollarIcon, MapPinIcon, PhoneIcon, InboxIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const ApplyJobDetails = ({cart}) => {
    console.log(cart);
    const {address, company, ful_time, remote, jobtitle, picture, salary} = cart;
    return (
        <div className='flex justify-between items-center mb-10 p-10 border-2 border-gray-300 rounded bg-gray-50'>
            <div className='flex items-center gap-10'>
                <div>
                    <img className='w-40 h-40' src={picture} alt="" />
                </div>
                <div>
                    <p className='text-2xl font-semibold'>{jobtitle}</p>
                    <p className='text-xl font-light'>{company}</p>
                    <div className='my-2'>
                        <button className='border-2 border-indigo-600 rounded px-2 mr-2'>{remote}</button> <button className='border-2 border-indigo-600 rounded px-2 mr-2'>{ful_time}</button>
                    </div>
                    <div className='flex gap-10'>
                        <p className='flex items-center gap-1'> <MapPinIcon className="h-6 w-6 text-blue-500" /> {address}</p>
                        <p className='flex items-center gap-1'> <MapPinIcon className="h-6 w-6 text-blue-500" /> {salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn-primary'>View Details</button>
            </div>
        </div>
    );
};

export default ApplyJobDetails;