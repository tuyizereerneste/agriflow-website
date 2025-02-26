import React from 'react';
import { Users, TreePine, Store, TrendingUp, Award, Globe } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      number: "10,000+",
      label: "Farmers Trained",
    },
    {
      icon: <Store className="h-8 w-8 text-green-600" />,
      number: "50+",
      label: "Markets Connected",
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      number: "100,000+",
      label: "Trees Planted",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      number: "45%",
      label: "Average Yield Increase",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      number: "25+",
      label: "Awards Received",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      number: "15",
      label: "Countries Reached",
    }
  ];

  const testimonials = [
    {
      quote: "AgriFlow's training program completely transformed how I approach farming. My yields have increased by 60% since implementing their sustainable practices.",
      name: "Maria Rodriguez",
      role: "Small-scale Farmer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "The market access program helped us connect with buyers directly, increasing our profits and reducing waste significantly.",
      name: "John Mwangi",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "Working with AgriFlow has opened up new possibilities for our entire farming community. Their support has been invaluable.",
      name: "Sarah Chen",
      role: "Cooperative President",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Impact Overview */}
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
          <h1 className="text-4xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Through sustainable practices, innovative technology, and community engagement, we're creating lasting positive change in agricultural communities worldwide.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create sustainable change and empower more farming communities.
          </p>
          <a
            href="/get-involved"
            className="inline-block bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
};

export default Impact;