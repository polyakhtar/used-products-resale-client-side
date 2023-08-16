import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const {createUser,updateUser,googleSignIn}=useContext(AuthContext);
    const googleProvider=new GoogleAuthProvider();
    const {register,formState: { errors },handleSubmit}=useForm();
    const [signUpError,setSignUpError]=useState('');
    const [createdUserEmail,setCreatedUserEmail]=useState('');
    const location=useLocation();
    const from=location.state?.from?.pathname||'/';
    const [token]=useToken(createdUserEmail);
    const navigate=useNavigate();
    if(token){
      navigate('/')
    }
    const handleSignUp=data=>{
          // console.log(data)
          createUser(data.email,data.password)
          .then(result=>{
            const user=result.user;
            console.log(user)
            toast('User created successfully');
            navigate(from,{replace:true})
            const userInfo={
              displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
              saveUser(data.name,data.email,data.type)
            })
            .catch(err=>console.log(err))
        })
        .catch(error=>{
            setSignUpError(error.message)
        })
        signUpError('')
    }
    const handleGoogleSignIn=()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true})
            saveUser(user.displayName,user.email,user.type);
            setCreatedUserEmail(user.email)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const saveUser=(name,email,type)=>{
      const user={name,email,type};
      fetch('https://used-products-resale-server-side-drab.vercel.app/users',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        setCreatedUserEmail(email);
      })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7 text-center border-2 rounded-md bg-blue-50'>
       <h2 className='text-4xl'>SignUp</h2> 
       <form onSubmit={handleSubmit(handleSignUp)}>
<div className="form-control w-full max-w-xs">
  <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" {...register("name",{required:"Name field is required"})} className="input input-bordered w-full max-w-xs"/>
{errors.name && <p className='text-red-600'>{errors.name.message}</p>}
</div>
  <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" {...register("email",{required:"Email is required",
})} className="input input-bordered w-full max-w-xs"/>
{errors.email && <p className='text-red-600'>{errors.email.message}</p>}
</div>
<label className="label">
<span className="label-text">Password</span> 
</label>
<input type="password" {...register("password",{required:"password field is required",minLength:{value:6,message:"password should be 6 character or longer"},
pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,message:"password must have uppercase,number and special character"}
})} 
className="input input-bordered w-full max-w-xs"/>
{errors.password && <p className='text-red-600'>{errors.password.message}</p>}
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Select an Option</span>
</label>
<select {...register("type")} className="select input-bordered w-full max-w-xs">
  <option selected>Buyer</option>
  <option>Seller</option>
</select>
</div>
  <input className='btn btn-primary w-full mt-4' type="submit" value='SignUp'/>
</form>
{signUpError && <p className='text-red-600'>{signUpError}</p>}
<p className='mt-4'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
<div className="divider">OR</div>
<button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With Google</button>
    </div>
    </div>
    );
};

export default Signup;