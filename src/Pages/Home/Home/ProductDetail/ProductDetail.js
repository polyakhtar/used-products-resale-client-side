import React from 'react';

const ProductDetail = ({product,setBookings}) => {
  const {name,location,img,resalePrice,originalPrice,usedDuration,}=product;
  return (
      <div className='px-6'>
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
</div>
    <label htmlFor='booking-modal' className="btn btn-sm bg-blue-600 hover:bg-blue-700" onClick={()=>setBookings(product)}>Book Now</label>
  </div>
</div>
</div>


</div> 
  );
};

export default ProductDetail;