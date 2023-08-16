import React from 'react';

const MyMobilesData = ({mobile,refetch}) => {
    const {_id,name,CategoryName,img,price,PurchaseYear,mobileNumber,location,condition}=mobile;
    const handleDeleteMobile=id=>{
        fetch(`https://used-products-resale-server-side-drab.vercel.app/addmobiles/${id}`,{
            method:'DELETE',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        refetch();
    }
    return (
        <div className="card w-96 bg-blue-50 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Mobile Name:{name}</h2>
    <p>Category Name: {CategoryName}</p>
    <p>Price: {price}</p>
    <p>Purchase Year : {PurchaseYear}</p>
    <p>Mobile Number :{mobileNumber}</p>
    <p>Location: {location}</p>
    <p>Condition: {condition}</p>

    <button onClick={()=>handleDeleteMobile(_id)} className='btn btn-sm btn-error'>Delete</button>
  </div>
</div>
    );
};

export default MyMobilesData;