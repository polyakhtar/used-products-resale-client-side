import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import MyMobilesData from '../MyMobilesData/MyMobilesData';

const MyMobiles = () => {
const {data:addmobiles=[],refetch,isLoading}=useQuery({
    queryKey:['addmobiles'],
    queryFn:async()=>{
        const res=await fetch('https://used-mobile-phone-resale-market-server.vercel.app/addmobiles');
        const data=await res.json();
        return data;
    }
})
if(isLoading){
    return <Loading></Loading>
}
    return (
        <div className='py-8 px-4'>
            <h2 className='text-4xl font-bold text-center mb-6'>My mobiles</h2>
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