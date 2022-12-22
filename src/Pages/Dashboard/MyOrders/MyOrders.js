
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
const MyOrders = () => {
const {user}=useContext(AuthContext);
const url=`https://used-mobile-phone-resale-market-server.vercel.app/bookings?email=${user.email}`;
const {data:bookings=[],isLoading}=useQuery({
    queryKey:['bookings',user?.email],
    queryFn:async()=>{
        const res=await fetch(url,{
          headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
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
        <div className='py-6'>
           <h2 className='text-3xl my-8'>My Orders:{bookings.length}</h2> 
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
            bookings.map((booking,i)=>
                <tr key={booking._id}>
                <th>{i+1}</th>
                <td>
                <div className="avatar">
               <div className="w-24 rounded">
              <img src={booking.productUrl} alt="" />
              </div>
             </div>
                </td>
                <td>{booking.productName}</td>
                <td>{booking.productPrice}</td>
                <td>
                {
            !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
          }
          {
          booking?.paid && <span className='text-xl text-green-500'>Paid</span>
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