import React, { useEffect, useState } from 'react';

const Review = () => {
const [reviews,setReviews]=useState([]);
useEffect(()=>{
  fetch('https://used-mobile-phone-resale-market-server.vercel.app/reviews')
  .then(res=>res.json())
  .then(data=>{
    setReviews(data)
  })
},[])
    return (
        <section className="bg-blue-100 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What our clients are saying
              </h1>
              <div className="flex mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 ">
            {
              reviews.map(review=>
              <div className="p-8 border rounded-lg dark:border-gray-700 border border-blue-300">
              <p className="leading-loose text-lg text-black-500 dark:text-gray-400">
                {review.review}
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={review.photoURL}  alt="" />
                <div className="mx-2 text-lg text-black-500">
                  <h1 className="font-bold text-lg text-black-500 dark:text-white">{review.name}</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{review.location}</span>
                </div>
              </div>
            </div>)
            }
          </section>
        </div>
      </section>
    );
};

export default Review;