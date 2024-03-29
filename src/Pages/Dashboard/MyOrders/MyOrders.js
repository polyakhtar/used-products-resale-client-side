
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
const MyOrders = () => {
const {user}=useContext(AuthContext);
const url=`https://used-products-resale-server-side-drab.vercel.app/bookings?email=${user?.email}`;
const {data:bookings=[],isLoading}=useQuery({
    queryKey:['bookings',user?.email],
    queryFn:async()=>{
        const res=await fetch(url,{
          headers:{
            authorization:`bearer ${localStorage.getItem('mobileToken')}`
          }
        });
        const data=await res.json();
        return data;                          
    }
})
if(isLoading){
  return <Loading></Loading>
}
    return (
        <div className='py-8 px-4'>
           <h2 className='text-4xl font-bold text-center mb-6'>My Orders:{bookings.length}</h2> 
           <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
            bookings?.map((booking,i)=>
                <tr key={booking._id}>
                <th>{i+1}</th>
                <td>
                <div className="avatar">
               <div className="w-24 rounded">
              <img src={booking.phoneImage} alt="" />
              </div>
             </div>
                </td>
                <td>{booking.productName}</td>
                <td>{booking.price}</td>
                <td>
                {
            !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn bg-blue-600 hover:bg-blue-700 btn-sm'>Pay</button></Link>
          }
          {
          booking?.paid && <span className='text-xl font-semibold text-green-500'>Paid</span>
          }
                </td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;