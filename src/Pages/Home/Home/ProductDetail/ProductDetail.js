import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import BookingModal1 from '../../BookingModal1/BookingModal1';

const ProductDetail = ({product}) => {
    const {user}=useContext(AuthContext);
    const {name,location,img,resalePrice,originalPrice,usedDuration,}=product;
    return (
        <div>
        <div className="card lg:card-side w-full bg-blue-50 shadow-xl p-4">
  <figure><img src={img} alt="Album" className='lg:w-1/2'/></figure>
  <div className="card-body w-1/2">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold'>Location:{location}</p>
    <p className='font-bold'>Resale Price: {resalePrice}</p>
    <p className='font-bold'>Original Price : {originalPrice}</p>
    <p className='font-bold'>Used Duration : {usedDuration}</p>
    <div className="card-actions flex items-center">
      <div className='flex justify-center items-center'>
        <div className='mr-2'>
      <label className='font-bold text-xl'>
        <p>Seller:{user?.type==="Seller".displayName}</p>
      </label>
      </div>
      <div className="form-control">
        {
          user?.verification==="verified" &&<>
          <label className="label cursor-pointer">
    <span className="label-text font-bold text-blue-600 mr-2">Verified</span> 
    <input type="checkbox" checked className="checkbox checkbox-primary" />
  </label>
          </>
        }
        <label className="label cursor-pointer">
    <span className="label-text font-bold text-blue-600 mr-2">Verified</span> 
    <input type="checkbox" className="checkbox checkbox-primary" />
  </label>
  
  </div>
</div>
      <label htmlFor='booking-modal' className="btn btn-primary">Book Now</label>
    </div>
  </div>
</div>
<BookingModal1
product={product}
></BookingModal1>
</div> 
    );
};

export default ProductDetail;