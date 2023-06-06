import React from 'react';

const Feature = () => {
    return (
        <section className=" dark:bg-gray-900 my-8 bg-blue-50">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
            <div className='text-center'>
              <img className='mx-auto' src="https://www.recommerce.ch/File/icon_sicherheit_85x85" alt="" />
              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">SAFETY & QUALITY</h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">We handle your data carefully. Our certified technicians and the use of original parts ensure the highest quality.</p>
            </div>
            <div className='text-center'>
              <img className='mx-auto' src="https://www.recommerce.ch/File/icon_service_85x85" alt="" />
              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">PROFESSIONAL SERVICE</h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">We're always available for phone, email, and on-site advice. You can reach us not only online but also personally in Steinhausen.</p>
            </div>
            <div className='text-center'>
             <img className='mx-auto' src="https://www.recommerce.ch/File/icon_nachhaltig_85x85" alt="" />
              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">SUSTAINABLE</h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">The reuse of used mobile devices saves valuable resources and thus protects the environment.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Feature;