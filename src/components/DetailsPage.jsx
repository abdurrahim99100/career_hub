import React from 'react';
import { CurrencyDollarIcon, MapPinIcon, PhoneIcon, InboxIcon, BriefcaseIcon } from '@heroicons/react/24/solid';


const DetailsPage = ({cart, handelAddToJob}) => {
    // console.log(cart);
    const {id, company, education_requerments, email, experiences, ful_time, job_descreption, job_responsibility, jobtitle, name, phone, picture, salary, address} = cart;
    return (
        <div>
            <div className="bg-gray-100 h-96 flex items-center justify-center ">
                <h1 className='text-5xl'>Job Details</h1>
            </div>
            <div className='flex gap-10 mt-60'>
                <div className='w-2/3'>
                    <p> <label className='text-xl'>Job Description: </label> {job_descreption}</p>
                    <p className='my-4'> <label className='text-xl'>Job Responsibility: </label>{job_responsibility}</p>
                    <h3 className='mt-10'> <label className='text-xl'>Educational Requirements:</label></h3>
                    <p>{education_requerments}</p>
                    <h3> <label className='text-xl'>Experiences: </label></h3>
                    <p>{experiences}</p>
                </div>
                <div className='bg-gray-100 px-10 py-5 w-1/3 leading-loose rounded'>
                    <h3>Job Details</h3>
                    <hr />
                    <p className='flex gap-2 items-center'><CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> salary: {salary}</p>
                    <p className='flex gap-2 items-center mb-10'><BriefcaseIcon className="h-6 w-6 text-blue-500" /> Job Title: </p>

                    <h3>Contact Information: </h3>
                    <hr />
                    <p className='flex gap-2 items-center'><PhoneIcon className="h-6 w-6 text-blue-500" /> Phone: {phone}</p>
                    <p className='flex gap-2 items-center'><InboxIcon className="h-6 w-6 text-blue-500" /> Email: {email}</p>
                    <p className='flex gap-2'><MapPinIcon className="h-6 w-6 text-blue-500" /> Address: {address}</p>
                    <button onClick={() => handelAddToJob(id)} className='w-full py-2 my-5 px-4 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;