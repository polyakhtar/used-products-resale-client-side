import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }
const menu=<>
<li className=''><Link to='/'>Home</Link></li>
<li className=''><Link to='/blog'>Blog</Link></li>
{
  user?.email && 
  <li><Link to='/dashboard'>Dashbord</Link></li>
}


</>
    return (
       
      <div className="navbar bg-base-100 lg:px-28 py-3 font-Space">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menu}
           </ul>
        </div>
        <Link to='/' className=" text-3xl font-bold text-blue-600 font-Acme">SELL UP</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
         {menu}
        </ul>
      </div>
      <div className="navbar-end text-lg font-semibold">
      <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
      {
       user?.email?
       <>
      <button className='btn btn-sm bg-blue-300 text-black hover:bg-blue-400' onClick={handleLogOut}>LogOut</button>
      </>
      :
     <Link className='btn btn-sm bg-blue-300 text-black hover:bg-blue-400' to='/login'>Login</Link>
     }
  </div>
    </div>
  
    );
};

export default Navbar;


      
            




