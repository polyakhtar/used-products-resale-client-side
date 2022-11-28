import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AllSellers = () => {
  const {user}=useContext(AuthContext);
    const {data:sellers=[],refetch}=useQuery({
        queryKey:['sellers'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/users/Seller',{
              headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
              }
            }
            );
            const data=await res.json();
            return data;
        }
    })
    const handleDelete=id=>{
        fetch(`http://localhost:5000/users/Seller/${id}`,{
        method:"DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount){
          toast.success('Seller Deleted Successfully');
          refetch();
        }
      }) 
      }
      const handleVerified=id=>{
        fetch(`http://localhost:5000/users/Seller/${id}`,{
        method:'PUT',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Verified By Admin Successfully');
                refetch();
            }
        })
        
    }
console.log(sellers)
    return (
        <div>
            <h2 className='text-3xl mb-6'>All Sellers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>verify</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
{
    sellers?.map((seller,i)=><tr key={seller._id}>
         <th>{i+1}</th>
        <th>{seller.name}</th>
        <th>{seller.email}</th>
        <th>
        {
            user?.verification!=="verified" && <button onClick={()=>handleVerified(seller._id)} className='btn btn-sm btn-primary'>Verify</button>
          }
          </th>
        <th>
          <button onClick={()=>handleDelete(seller._id)} className='btn btn-sm btn-error'>Delete</button></th>
    </tr>)
}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;