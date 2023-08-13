import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer/useBuyer';


const UserRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  const [isBuyer,isUserLoading]=useBuyer(user?.email)
  const location=useLocation();
 if(user || isBuyer){
  return children
 }
 if(loading  || isUserLoading){
  return children
 }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default UserRoute;