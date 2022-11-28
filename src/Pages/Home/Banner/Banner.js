import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-blue-100 py-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I5wHFeboXlNLPtpjUPYZ3TBBwXcI67fLH4qBJjY6kzRQ25NJ00A9R6_CPIQToOJw34g&usqp=CAU" className="sm:w-1/2 rounded-lg shadow-2xl" alt=""/>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold text-red-400">
                SELL YOUR PHONE
                <br/>
                AT BEST OFFER
                </h1>
            <p className="py-6">By using this platform ,You can buy or sale any used mobile phones and the quality of phone is very good.</p>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;