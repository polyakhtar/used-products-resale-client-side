import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyMobilesData from '../MyMobilesData/MyMobilesData';

const MyMobiles = () => {
const {data:addmobiles=[],refetch}=useQuery({
    queryKey:['addmobiles'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/addmobiles');
        const data=await res.json();
        return data;
    }
})
    return (
        <div>
            <h2 className='text-3xl mb-6 p-4'>My mobiles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    addmobiles.map(mobile=><MyMobilesData
                    key={mobile._id}
                    mobile={mobile}
                    refetch={refetch}
                    ></MyMobilesData>)
                }
            </div>
        </div>
    );
};

export default MyMobiles;