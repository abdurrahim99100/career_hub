import React from 'react';
import { getStoreCart } from '../Utils/FakeDb';
import { useLoaderData } from 'react-router-dom';
import ApplyJobDetails from './ApplyJobDetails';

const Apply = () => {
    const fetchData = useLoaderData();
    const jobCart = getStoreCart();

    let applyCart = [];
    for (const id in jobCart) {
        const findJob = fetchData.find(cart => cart.id === id)
        if (findJob) {
            applyCart.push(findJob);
        }
    }



    return (
        <div>
            <div className='p-40 text-center bg-slate-100 mb-10'>
                <h1 className='font-semibold text-4xl'>Applied Jobs</h1>
            </div>
            <div className='flex justify-end mx-5 my-5 gap-2'>
                <button className='border-2 border-indigo-600 rounded px-2 mr-2'>Onside</button> <button className='border-2 border-indigo-600 rounded px-2 mr-2'>Remote</button>
            </div>
            {
                applyCart.map(cart => <ApplyJobDetails key={cart.id} cart={cart} />)
            }
        </div>
    );
};

export default Apply;