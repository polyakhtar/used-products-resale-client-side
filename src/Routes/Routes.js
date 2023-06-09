import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import AddMobile from "../Pages/Dashboard/AddMobile/AddMobile";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyMobiles from "../Pages/Dashboard/MyMobiles/MyMobiles";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Home/Products/Products";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from '../Routes/AdminRoute/AdminRoute';
import SellerRoute from '../Routes/SellerRoute/SellerRoute';
import UserRoute from "./UserRoute/UserRoute";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
            path:'/blog',
            element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/products/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
            path:'/dashboard/allsellers',
            element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/dashboard/addmobile',
                element:<SellerRoute><AddMobile></AddMobile></SellerRoute>
            },
            {
                path:'/dashboard/mymobiles',
                element:<SellerRoute><MyMobiles></MyMobiles></SellerRoute>
            },
            {
                path:'/dashboard/myorders',
                element:<UserRoute><MyOrders></MyOrders></UserRoute>
            },
            {
                path:'/dashboard/addreview',
                element:<AddReview></AddReview>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://used-mobile-phone-resale-market-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])
export default router;