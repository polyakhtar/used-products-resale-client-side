import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';
import CategoriesData from '../CategoriesData/CategoriesData';


const Categories = () => {
const {data:categories=[],isLoading}=useQuery({
      queryKey:['categories'],
      queryFn:async()=>{
        const res=await fetch('https://used-mobile-phone-resale-market-server.vercel.app/categories');
        const data=await res.json();
        return data;
      }
})
if(isLoading){
    return <Loading></Loading>
}
    return (
        <div>
            <h1 className='text-4xl text-blue-500 font-bold text-center py-16'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
            categories.map(category=><CategoriesData 
            key={category._id}
            category={category}>
            </CategoriesData>)  
           }
            </div>
        </div>
    );
};

export default Categories;