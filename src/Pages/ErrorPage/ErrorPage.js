import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ErrorPage = () => {
const {logOut}=useContext(AuthContext);
const navigate=useNavigate();
    const handleLogOut=()=>{
    logOut()
    .then(()=>{
     navigate('/login')
    })
    .catch(err=>{
        console.log(err)
    })

    }
    return (
        <div className='text-center mt-60'>
            <div>
                <img className='mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdbYMPv3mY2vH6g3eMgKQWnNG5TYW9a6T1A&usqp=CAU' alt=""></img>
            </div>
        <div className='w-96 text-center mx-auto mt-4'>
            <h1 className='text-5xl text-red-600'>Something went wrong</h1>
            <h3 className='text-3xl mt-2'>Please <button onClick={handleLogOut}>Log Out</button></h3>
        </div>
        </div>
    );
};

export default ErrorPage;