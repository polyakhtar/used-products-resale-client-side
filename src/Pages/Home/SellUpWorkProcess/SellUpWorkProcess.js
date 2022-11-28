import React from 'react';
import step1 from '../../../assets/step-1.jpg';
import step2 from '../../../assets/step-2.jpg';
import step3 from '../../../assets/step-3.jpg';
import step4 from '../../../assets/step-4.jpg';
const SellUpWorkProcess = () => {
    return (
        <div className='py-16'>
            <h1 className='text-5xl text-center text-blue-400 py-12'>HOW SELLUP WORKS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>    

            <div className="card bg-blue-50 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={step1} alt="Shoes" className="" />
  </figure>
  <div className="card-body items-center text-center">
  GET AN INSTANT QUOTE
    </div>
  </div>
  <div className="card bg-blue-50 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={step2} alt="Shoes" className="" />
  </figure>
  <div className="card-body items-center text-center">
  GET BEST OFFER
    </div>
  </div>


<div className="card bg-blue-50 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={step3} alt="Shoes" className="" />
  </figure>
  <div className="card-body items-center text-center">
  WALK-IN OR COLLECTION
    </div>
  </div>
  <div className="card bg-blue-50 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={step4} alt="Shoes" className="" />
  </figure>
  <div className="card-body items-center text-center">
  GET PAID INSTANTLY
    </div>
  </div>
</div>
</div>
        
    );
};

export default SellUpWorkProcess;