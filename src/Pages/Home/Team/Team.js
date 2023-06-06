import React from 'react';

const Team = () => {
    return (
        <section className="bg-blue-50 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto ">
          <div className="xl:flex xl:items-center xL:-mx-4 my-20">
            <div className="xl:w-1/2 xl:mx-4">
              <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white">Our Team</h1>
              <p className="max-w-2xl text-xl font-semibold mt-4 text-black-500 dark:text-gray-300">
              We, the member try to give service to every customer and seller. We are very dedicated to provide all necessary service.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img className="object-cover rounded-xl aspect-square" src="https://img.freepik.com/free-photo/waist-up-shot-attractive-young-girlfriend-with-dark-straight-hair-soft-healthy-skin_273609-18318.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=sph" alt="" />
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Poly</h1>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Manager</p>
              </div>
              <div>
                <img className="object-cover rounded-xl aspect-square" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=sph" alt="" />
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Munni</h1>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Team;