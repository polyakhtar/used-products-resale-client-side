import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMobile = () => {
    const [mobiles,setMobiles]=useState({});
    const navigate=useNavigate();
    const handleAddUser=event=>{
        event.preventDefault();
        fetch('http://localhost:5000/addmobiles',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(mobiles)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Mobile added successfully');
                event.target.reset();
                navigate('/dashboard/mymobiles')
            }
        })
        console.log(mobiles);
    }
    const handleInputBlur=event=>{
        const value=event.target.value;
        const field=event.target.name;
        const newMobiles={...mobiles};
        newMobiles[field]=value;
        setMobiles(newMobiles);
        
    }
    return (
        <div className='w-3/5 mx-auto text-center'>
        <h2 className='text-3xl font-bold text-blue-700 my-4'>Please add a new Mobile</h2>
        <form onSubmit={handleAddUser}>
        
            <input onBlur={handleInputBlur} name='name' type="text" placeholder="Mobile Name" className="input w-full input-bordered m-4" requird/>
            <br/>
            <input onBlur={handleInputBlur} name='price' type="text" placeholder="Mobile Price" className="input w-full input-bordered m-4" requird/>
            <br/>
            <input onBlur={handleInputBlur} name='condition' type="text" placeholder="Condition" className="input w-full input-bordered m-4" requird/>
            <br/>
            <input onBlur={handleInputBlur} name='mobileNumber' type="text" placeholder="Mobile Number" className="input w-full input-bordered m-4" />

            <input onBlur={handleInputBlur} name='location' type="text" placeholder="Location" className="input w-full input-bordered m-4" requird/>
            <input onBlur={handleInputBlur} name='CategoryName' type="text" placeholder="Category Name" className="input w-full input-bordered m-4" requird/>
             
             <input onBlur={handleInputBlur} name='PurchaseYear' type="text" placeholder="Year of Purchase" className="input w-full input-bordered m-4" />
             
            <br/>
            <input onBlur={handleInputBlur} name='img' type="text" placeholder="Image Url" className="input w-full input-bordered m-4" requird/>
            <br/>

            <button className='btn btn-primary mb-4'>Add Mobile</button>
        </form>
    </div>
    );
};

export default AddMobile;