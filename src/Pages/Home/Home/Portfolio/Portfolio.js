import React from 'react';


const Portfolio = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
            Portfolio</h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <a href='https://coruscating-otter-fb5457.netlify.app'>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-agenda-glasses-pencil_23-2148459513.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=ais")'}}>
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Munni's Portfolio</h2>
              </div>
            </div>
            </a>
            <a href='https://coruscating-otter-fb5457.netlify.app'>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: 'url("https://img.freepik.com/free-photo/workplace-with-smartphone-laptop-black-table-top-view-copyspace-background_144627-24860.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=ais")'}}>
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Poly's Portfolio</h2>
              </div>
            </div>
            </a>
          </div>
        </div>
       
      </section>
    );
};

export default Portfolio;