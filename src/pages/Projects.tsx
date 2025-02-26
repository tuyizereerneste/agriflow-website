import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Smart Irrigation Systems",
      category: "technology",
      location: "Green Valley",
      image: "irrigation.jpg",
      description: "Implementation of IoT-based irrigation systems to optimize water usage and improve crop yields."
    },
    {
      title: "Organic Farming Initiative",
      category: "sustainable",
      location: "Highland Farms",
      image: "organic.jpg",
      description: "Training farmers in organic farming techniques and certification processes."
    },
    {
      title: "Market Access Program",
      category: "market",
      location: "Riverside Community",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Connecting local farmers with regional markets and establishing direct trade relationships."
    },
    {
      title: "Soil Health Management",
      category: "sustainable",
      location: "Valley Farms",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Implementing advanced soil testing and improvement techniques for better crop yields."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600">
            Discover how we're transforming agriculture through innovative projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full ${
              filter === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            } transition duration-200`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('technology')}
            className={`px-6 py-2 rounded-full ${
              filter === 'technology'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            } transition duration-200`}
          >
            Technology
          </button>
          <button
            onClick={() => setFilter('sustainable')}
            className={`px-6 py-2 rounded-full ${
              filter === 'sustainable'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            } transition duration-200`}
          >
            Sustainable Farming
          </button>
          <button
            onClick={() => setFilter('market')}
            className={`px-6 py-2 rounded-full ${
              filter === 'market'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-green-50'
            } transition duration-200`}
          >
            Market Access
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-green-600 mb-2">{project.location}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;