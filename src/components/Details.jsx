import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import { addToDb } from '../Utils/FakeDb';

const Details = () => {
    const detailsLoaderData = useLoaderData();
    
    // unique id;
    const paramsId = useParams();
    const id = paramsId.id;
    
    let carts = []
    const targetCart = detailsLoaderData.find(cart => cart.id === id);
    if(targetCart){
        carts.push(targetCart);
    };

    // add to job;
    const handelAddToJob = id =>{
        

        addToDb(id);
    }
    

    return (
        <div>
            {
                carts.map(cart => <DetailsPage handelAddToJob={handelAddToJob} key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export default Details;