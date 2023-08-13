import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
  const {data:Users=[],refetch,isLoading}=useQuery({
    queryKey:['Users'],
    queryFn:async()=>{
      const res=await fetch('http://localhost:5000/users/buyer',{
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data=await res.json();
      return data;
    }
  })
    
    const handleDelete=id=>{
      console.log(id)
      fetch(`http://localhost:5000/users/buyer/${id}`,{
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
        <div className='py-8 px-4'>
            <h2 className='text-4xl mb-6 font-bold text-center'>All Buyers</h2>
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