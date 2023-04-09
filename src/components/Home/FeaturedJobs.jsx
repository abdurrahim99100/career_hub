import React from 'react';

const FeaturedJobs = ({data}) => {
    console.log(data);
    return (
        <div>
            <img src={data.picture} alt="" />
            <p>name: {data.name}</p>
        </div>
    );
};

export default FeaturedJobs;