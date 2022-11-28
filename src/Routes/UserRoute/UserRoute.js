import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../hooks/useUser/useUser';

const UserRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  const [isUser,isUserLoading]=useUser(user?.email);
  const location=useLocation();
 if(user || isUser){
  return children
 }
 if(loading  || isUserLoading){
  return children
 }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default UserRoute;