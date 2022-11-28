import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller/useSeller';
import useUser from '../../../hooks/useUser/useUser';
import Navbar from '../../Shared/Navbar/Navbar';
// admin:poly322@gmail.com
// pp:Pm1234%^&


const DashboardLayout = () => {
    const {user}=useContext(AuthContext);
    console.log(user)
    const [isAdmin]=useAdmin(user?.email);
    const [isSeller]=useSeller(user?.email);
    const [isUser]=useUser(user?.email)
    return (
        <div>
            <Navbar></Navbar>
      <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {
        isAdmin && <>
              <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
              <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
              <li><Link to='/dashboard/addmobile'>Add Mobile</Link></li>
             <li><Link to='/dashboard/mymobiles'>My Mobiles</Link></li>
             <li><Link to='/dashboard/myorders'>My Orders</Link></li>
        </>
      }
      {
        isSeller && <>
             <li><Link to='/dashboard/addmobile'>Add Mobile</Link></li>
             <li><Link to='/dashboard/mymobiles'>My Mobiles</Link></li>
        </>
      }
            {
             isUser && <>
              <li><Link to='/dashboard/myorders'>My Orders</Link></li>
              </>
            } 
                    
    </ul>
  
  </div>
</div> 
        </div>
    );
};

export default DashboardLayout;