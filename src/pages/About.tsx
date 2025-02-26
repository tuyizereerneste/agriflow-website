import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "With over 15 years of experience in agricultural development, Dr. Johnson leads our mission to transform farming communities."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Michael brings expertise in sustainable farming practices and operational excellence to our initiatives."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Leading our research efforts in agricultural innovation and sustainable practices."
    }
  ];

  return (
    <div className="bg-white">
      {/* Mission and Vision */}
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
            <p className="text-xl mb-12">
              To empower smallholder farmers by providing structured data collection, targeted training, and direct market connections—ensuring sustainable agricultural growth, improved livelihoods, and environmental resilience.
            </p>
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl">
              A future where every farmer has access to the knowledge, resources, and opportunities needed to thrive—creating a sustainable, food-secure, and economically empowered agricultural community.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="AgriFlow History"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">From Seeds to Success</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2018, AgriFlow began with a simple mission: to bridge the gap between traditional farming practices and modern agricultural innovation. What started as a small initiative working with just 50 farmers has grown into a comprehensive platform supporting thousands of agricultural communities across the region.
              </p>
              <p className="text-gray-600">
                Through partnerships with local organizations, government bodies, and international institutions, we've developed a holistic approach to agricultural development that combines data-driven insights with practical, on-the-ground support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated professionals working to transform agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;