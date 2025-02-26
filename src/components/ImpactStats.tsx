import React from 'react';
import { Users, TreePine, Store } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      number: "10,000+",
      label: "Farmers Trained",
      description: "Empowering farmers with knowledge and skills"
    },
    {
      icon: <Store className="h-12 w-12 text-green-600" />,
      number: "50+",
      label: "Markets Connected",
      description: "Creating sustainable market linkages"
    },
    {
      icon: <TreePine className="h-12 w-12 text-green-600" />,
      number: "100,000+",
      label: "Trees Planted",
      description: "Contributing to environmental sustainability"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;