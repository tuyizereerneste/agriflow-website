import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "EcoGrow Solutions",
      logo: "https://via.placeholder.com/150x80?text=EcoGrow",
      testimonial: "AgriFlow has revolutionized how we approach sustainable farming education."
    },
    {
      name: "FarmTech Innovation",
      logo: "https://via.placeholder.com/150x80?text=FarmTech",
      testimonial: "A game-changer in connecting farmers with modern agricultural practices."
    },
    {
      name: "Green Earth Foundation",
      logo: "https://via.placeholder.com/150x80?text=GreenEarth",
    },
    {
      name: "AgriSmart Systems",
      logo: "https://via.placeholder.com/150x80?text=AgriSmart",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">Working together for agricultural excellence</p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Partner Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partners.slice(0, 2).map((partner, index) => (
            partner.testimonial && (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 italic mb-4">"{partner.testimonial}"</p>
                <p className="font-semibold text-gray-900">{partner.name}</p>
              </div>
            )
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/get-involved"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;