import React from 'react';
import { Heart, HandHeart, Users, Mail } from 'lucide-react';

const GetInvolved = () => {
  const ways = [
    {
      icon: <Heart className="h-12 w-12 text-green-600" />,
      title: "Donate",
      description: "Support our mission with a one-time or recurring donation. Every contribution helps us reach more farmers and communities.",
      action: "Donate Now",
      link: "#donate"
    },
    {
      icon: <HandHeart className="h-12 w-12 text-green-600" />,
      title: "Partner With Us",
      description: "Join forces with AgriFlow to create lasting impact. We welcome partnerships with organizations sharing our vision.",
      action: "Become a Partner",
      link: "#partner"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Volunteer",
      description: "Share your skills and time to support our initiatives. We have various volunteer opportunities available.",
      action: "Join Us",
      link: "#volunteer"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-700">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-green-700 opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us in our mission to transform agriculture and empower farming communities. There are many ways to contribute and make a difference.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ways.map((way, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  {way.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{way.title}</h3>
                <p className="text-gray-600 mb-6">{way.description}</p>
                <a
                  href={way.link}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
                >
                  {way.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support helps us continue our work in empowering farmers and creating sustainable agricultural communities.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <button className="bg-green-50 hover:bg-green-100 text-green-700 py-4 rounded-lg font-semibold">$25</button>
                <button className="bg-green-50 hover:bg-green-100 text-green-700 py-4 rounded-lg font-semibold">$50</button>
                <button className="bg-green-50 hover:bg-green-100 text-green-700 py-4 rounded-lg font-semibold">$100</button>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition duration-200">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partner" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in creating lasting impact through meaningful partnerships.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Organization Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Contact Person</label>
                  <input type="text" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500" rows={4}></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share your skills and time to support our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Field Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Work directly with farming communities, providing training and support in sustainable agricultural practices.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                Apply Now
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-6">
                Help with data analysis, technology implementation, and system optimization for our agricultural programs.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                Apply Now
              </button> </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;