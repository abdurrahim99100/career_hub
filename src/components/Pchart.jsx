import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';


const Pchart = () => {


    const data = [
        {
            name: 'Assignment-1',
            value: 58
        },
        {
            name: 'Assignment-2',
            value: 59
        },
        {
            name: 'Assignment-3',
            value: 60
        },
        {
            name: 'Assignment-4',
            value: 57
        },
        {
            name: 'Assignment-5',
            value: 57
        },
        {
            name: 'Assignment-6',
            value: 53
        },
        {
            name: 'Assignment-7',
            value: 60
        },
        {
            name: 'Assignment-8',
            value: 58
        }
    ];

    return (
        <div className='flex justify-center items-center my-44'>
            <PieChart width={400} height={400} data={data}>
                <Pie
                    dataKey="value"
                    startAngle={360}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip/>
            </PieChart>
        </div>
    );
};

export default Pchart;