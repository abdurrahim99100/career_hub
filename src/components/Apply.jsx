import React from 'react';
import { getStoreCart } from '../Utils/FakeDb';
import { useLoaderData } from 'react-router-dom';
import ApplyJobDetails from './ApplyJobDetails';

const Apply = () => {
    const fetchData = useLoaderData();
    const jobCart = getStoreCart();


    let applyCart = [];
    for(const id in jobCart){
        const findJob = fetchData.find(cart => cart.id === id)
        if(findJob){
            applyCart.push(findJob);
        }
    }
    


    return (
        <div>
            <div className='p-40 text-center bg-slate-100 mb-10'>
                <h1 className='font-semibold text-4xl'>Applied Jobs</h1>
            </div>
            {
                applyCart.map(cart => <ApplyJobDetails key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export default Apply;