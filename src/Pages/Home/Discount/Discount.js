import React from 'react';

const Discount = () => {
    return (
        <div className="bg-blue-50 dark:bg-gray-900 mt-10">
        <div className="container px-6 py-16 mx-auto ">
          <div className="items-center lg:flex my-8">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-4xl">Buy The Used <span className="text-blue-500">Phone At 30% Discount</span></h1>
                <p className="mt-3 text-gray-600 text-2xl text-bold dark:text-gray-400">Be the first customer By This <span className="font-medium text-blue-500">Used iPhone</span></p>
                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <button className="mx-auto w-full lg:px-8 md:w-3/5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-700 focus:outline-none focus:bg-blue-500">
                  Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full max-w-md" src="https://diamu.com.bd/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max-Space-Black.jpg" alt="email illustration vector art" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Discount;