import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Farmers for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Providing structured data collection, targeted training, and direct market connections, ensuring sustainable agricultural growth, improved livelihoods, and environmental resilience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-involved"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              Get Involved
            </a>
            <a
              href="/about"
              className="inline-block bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;