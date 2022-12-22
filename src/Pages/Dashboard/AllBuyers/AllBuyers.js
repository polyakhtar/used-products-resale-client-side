import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
  const {data:Users=[],refetch,isLoading}=useQuery({
    queryKey:['Users'],
    queryFn:async()=>{
      const res=await fetch('https://used-mobile-phone-resale-market-server.vercel.app/users/User',{
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data=await res.json();
      return data;
    }
  })
    
    const handleDelete=id=>{
      fetch(`https://used-mobile-phone-resale-market-server.vercel.app/users/User/${id}`,{
      method:"DELETE",
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount){
        toast.success('Buyer Deleted Successfully');
        refetch();
      }
    })
      
    }
    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div className='py-6'>
            <h2 className='text-3xl mb-6'>All Buyers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
{
    Users?.map((buyer,i)=><tr key={buyer._id}>
         <th>{i+1}</th>
        <th>{buyer.name}</th>
        <th>{buyer.email}</th>
        <th><button onClick={()=>handleDelete(buyer._id)} className='btn btn-sm btn-error'>Delete</button></th>
    </tr>)
}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;