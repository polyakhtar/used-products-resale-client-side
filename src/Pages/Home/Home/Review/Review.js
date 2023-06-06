import React from 'react';

const Review = () => {
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
            <div className="flex justify-between mt-8 md:mt-0">
              <button title="left arrow" className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-lg text-black-500 dark:text-gray-400">
                “Very recommendable service,transparent,fast and not overpriced and friendly customer service. I can only recommend it”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgotdcWj5aaC1-bFhtyMAJ9B9o_hgYraqIA&usqp=CAU" alt="" />
                <div className="mx-2 text-lg text-black-500">
                  <h1 className="font-bold text-lg text-black-500 dark:text-white">Mariya</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
              <p className="leading-loose text-white">
                “The mobile phone looks like new, although it should actually have signs of use. But you have to look for them with a magnifying glass, if at all. We are more than satisfied and will certainly buy a mobile phone here again. Very friendly and good service, thank you very much.”
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1ye7ES-yHUNRQzmu7uwUV4ruUqXfEmmMIg&usqp=CAU" alt="" />
                <div className="mx-2">
                  <h1 className="font-semibold text-white">Mahin</h1>
                  <span className="text-sm text-blue-200">Cumilla, Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="p-8 border rounded-lg dark:border-black-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Great service! Evaluate your phone quickly, send it conveniently and you will quickly be paid a fair price. So what more could you want?”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Niha </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Rangpur, Bangladesh</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
};

export default Review;