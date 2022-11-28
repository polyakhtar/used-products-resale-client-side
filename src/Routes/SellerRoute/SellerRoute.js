import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller/useSeller';
import Loading from '../../Pages/Shared/Loading/Loading';

const SellerRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  const [isSeller,isSellerLoading]=useSeller(user?.email);
  const location=useLocation();
  if(user || isSeller){
    return children
  }
  if(loading || isSellerLoading){
    return <Loading></Loading>
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default SellerRoute;