import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-blue-300 py-16 mb-6 font-Space">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='sm:w-1/2'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I5wHFeboXlNLPtpjUPYZ3TBBwXcI67fLH4qBJjY6kzRQ25NJ00A9R6_CPIQToOJw34g&usqp=CAU" className=" rounded-lg shadow-2xl" style={{width:'400px'}} alt=""/>
          </div>
          <div className='w-1/2  mr-16'>
            <h1 className="text-5xl font-bold text-blue-600">
                SELL YOUR PHONE
                <br/>
                AT BEST OFFER
                </h1>
            <p className="py-4 text-lg font-semibold font-Space">By using this platform ,You can buy or sale any used mobile phones and the quality of phone is very good.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;