import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
const booking=useLoaderData();
// console.log(booking);                                
    return (
        <div className='mx-10'>
            <h2 className='text-3xl my-4'>{booking.productName}</h2>
            <p>Please pay <strong>{booking.price}</strong> for your Product</p>
            <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
           <CheckOut
           booking={booking}
           />
           </Elements>
            </div>
        </div>
    );
};

export default Payment;