import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
// pp:Sami123$%^
const Login = () => {
    const {logIn,googleSignIn}=useContext(AuthContext);
    const googleProvider=new GoogleAuthProvider();
const {register,formState: { errors },handleSubmit}=useForm();
const [logInError,setLogInError]=useState('');
const [loginUserEmail,setLoginUserEmail]=useState('');
    const [token]=useToken(loginUserEmail);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname||'/';
    if(token){
      navigate (from,{replace:true});
    }
const handleLogIn=data=>{
    // console.log(data)
    setLogInError('');
    logIn(data.email,data.password)
    .then(result=>{
      const user=result.user;
      // console.log(user);
      const currentUser={
        email:user.email
      };
      fetch('https://used-products-resale-server-side-drab.vercel.app/jwt',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
        localStorage.setItem('mobileToken',data.token);
         navigate(from,{replace:true})
      })
     
      setLoginUserEmail(data.email) 
    })
    .catch(error=>{
      console.log(error.message)
      setLogInError(error.message)
    }) 
}
const handleGoogleSignIn=()=>{
    googleSignIn(googleProvider)
    .then(result=>{
        const user=result.user;
        console.log(user);
        navigate(from,{replace:true})
        setLoginUserEmail(user.email)
    })
    .catch(error=>{
        console.log(error)
    })
}

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 text-center border-2 rounded-md bg-blue-50'>
           <h2 className='text-4xl'>Login</h2> 
           <form onSubmit={handleSubmit(handleLogIn)}>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="text" {...register("email",{required:"Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
  {errors.email && <p className='text-red-600 mb-2'>{errors.email?.message}</p>}
  
  <label className="label">
    <span className="label-text">Password</span> 
  </label>
  <input type="password" 
  {...register("password",
  {required:"Password is required",
  minLength:{value:6,message:'Password should be 6 character or longer'
  }})} className="input input-bordered w-full max-w-xs"/>
  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
  <label className="label">
    <span className="label-text">Forget Password?</span>
  </label>
</div>
      <input className='btn btn-primary w-full' type="submit" value='Login'/>
      {logInError && <p className='text-red-400'>{logInError}</p>}
    </form>
    <p className='mt-4'>New to doctors portal <Link className='text-secondary' to='/signup'>Create an account</Link></p>
    <div className="divider">OR</div>
    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With Google</button>
        </div>
        </div>
    );
};

export default Login;