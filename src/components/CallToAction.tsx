import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-green-700">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-green-700 opacity-90 rounded-lg"></div>
        
        <div className="relative py-16 px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Transforming Agriculture
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can help us empower more farmers and create sustainable agricultural communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-involved#donate"
              className="inline-block bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              Donate Now
            </a>
            <a
              href="/get-involved#partner"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;