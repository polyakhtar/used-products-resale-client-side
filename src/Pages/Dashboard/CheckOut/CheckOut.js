import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
const CheckOut = ({booking}) => {
    const [clientSecret, setClientSecret] = useState("");
    const [success,setSuccess]=useState('');
    const [processing,setProcessing]=useState(false);
    const [transectionId,setTransectionId]=useState('');
const [cardError,setCardError]=useState('');
const stripe=useStripe();
const elements=useElements();
const {productPrice,name,email,_id}=booking;
useEffect(() => {
    fetch("https://used-mobile-phone-resale-market-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        authorization:`bearer ${localStorage.getItem('accessToken')}`
     },
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [productPrice]);
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if(error){
            // console.log(error)
            setCardError(error.message)
             }
             else{
                setCardError('')
             }
 const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
    clientSecret ,
         {
           payment_method: {
             card: card,
             billing_details: {
               name: name,
               email:email,
             },
           },
         },
              );
              if(confirmError){
                console.log(confirmError.message);
                return;
              }
              const payment={
                productPrice,
                transectionId:paymentIntent.id,
                email,
                bookingId:_id
              }
              if(paymentIntent.status=== "succeeded"){
                // console.log('card-info',card)
                // setSuccess('Your payment completed successfully')
                // setTransectionId(paymentIntent.id)
                // stor payment into the database
        
                fetch('https://used-mobile-phone-resale-market-server.vercel.app/payments',{
                  method:"POST",
                  headers:{
                    'content-type':'application/json',
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                  },
                  body:JSON.stringify(payment)
                })
                .then(res=>res.json())
                .then(data=>{
                  console.log(data)
                  if(data.insertedId){
                    setSuccess('Congrats ! Your payment completed')
                    setTransectionId(paymentIntent.id)
                  }
                })
              }
              setProcessing(false)
              // console.log('paymentIntent',paymentIntent)
    }
    return (
        <>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button 
      className='btn btn-sm btn-primary mt-6' 
      type="submit" 
      disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    <p className="text-red-500">{cardError}</p>
    {
        success && <div>
          <p className='text-green-500'>{success}</p>
          <p>Your transactionId:<span className='font-bold'>{transectionId}</span></p>
        </div>
      }
    </> 
    );
};

export default CheckOut;