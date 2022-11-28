import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal1 = ({product}) => {
    const {user}=useContext(AuthContext);
    // console.log(data)
    const handleBooking=event=>{
      event.preventDefault();
      const form=event.target;
      const name=form.userName.value;
    //   const email=form.email.value;
      const pname=form.productName.value;
      const price=form.productPrice.value;
      const photoUrl=form.photourl.value;
      const phone=form.phone.value;
      const location=form.meetingLocation.value;

     //  console.log(date,slot,pname,email,phone);
     const bookingDetail={
         productName:pname,
         productUrl:photoUrl,
         name:name,
         email:user?.email,
         phone:phone,
         productPrice:price,
         location:location
     }
    //  console.log(bookingDetail);
     fetch('https://used-mobile-phone-resale-market-server.vercel.app/bookings',{
         method:'POST',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(bookingDetail)
     })
     .then(res=>res.json())
     .then(data=>{
         // console.log(data)
         if(data.acknowledged){
         toast.success('Booking Confirmed');  
     }
     else{
         toast.error(data.message)
     }
     })
     
  }
    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{product.categoryName}</h3>
   <div>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>

<input type="text" name='userName' defaultValue={user?.displayName}  placeholder="Type here" className="input w-full input-bordered my-2" disabled/>
<input type="text" name='email' defaultValue={user?.email} placeholder="Type here" className="input w-full input-bordered my-2" disabled/>
{
    
    product.name && <input type="text" name='productName' defaultValue={product.name} placeholder="Product Name" className="input w-full input-bordered my-2"/>
}
<input type="text" name='productPrice' defaultValue={product.price} placeholder="Product Price" className="input w-full input-bordered my-2"/>
<input type="text" name='phone' placeholder="Phone Number" className="input w-full input-bordered my-2" />
<input type="text" name='photourl' defaultValue={product.img} placeholder="PhotoUrl" className="input w-full input-bordered my-2" />

<input type="text" name='meetingLocation' placeholder="Meeting Location" className="input w-full input-bordered my-2" />
<br/>
<div className="modal-action">
  <label htmlFor="booking-modal" className="btn btn-error input w-full">
    cancel
  </label>
  <input type="submit" htmlFor="booking-modal" value="Book Now" className="btn btn-primary input w-full"/>
  </div>
  
  
  </form>
</div>
</div>

        </div>
   
  </div>


    );
};

export default BookingModal1;