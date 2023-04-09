import React from 'react';
import Calculator from '../../img/catagory/accounts 1.png';
import Calculato1 from '../../img/catagory/business 1.png';
import Calculato2 from '../../img/catagory/chip 1.png';
import Calculato3 from '../../img/catagory/social-media 1.png';

const Category = () => {
    return (
        <div className='my-32'>
            <div className='text-center'>
                <h4 className='text-4xl font-semibold'>Job Category List</h4>
                <p className='text-gray-400 py-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>           
            </div>
            <div className='my-24 flex justify-between'>
                <div className='w-48 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md rounded'>
                    <img src={Calculator} alt="" />
                    <h5>Creative Design</h5>
                    <label htmlFor="#">100+ Jobs Available</label>
                </div>
                <div className='w-48 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md rounded'>
                    <img src={Calculato1} alt="" />
                    <h5>Marketing & Sales</h5>
                    <label htmlFor="#">150 Jobs Available</label>
                </div>
                <div className='w-48 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md rounded'>
                    <img src={Calculato2} alt="" />
                    <h5>Engineering Job</h5>
                    <label htmlFor="#">224 Jobs Available</label>
                </div>
                <div className='w-48 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md rounded'>
                    <img src={Calculato3} alt="" />
                    <h5>Marketing & Sales</h5>
                    <label htmlFor="#">300 Jobs Available</label>
                </div>
                <div className='w-48 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md rounded'>
                    <img src={Calculator} alt="" />
                    <h5>Account & Finance</h5>
                    <label htmlFor="#">300 Jobs Available</label>
                </div>
            </div>
        </div>
    );
};

export default Category;