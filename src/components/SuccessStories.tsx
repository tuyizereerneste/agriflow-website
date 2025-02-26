import React from 'react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      image: "/sarah.jpg",
      title: "Sarah's Journey to Sustainable Farming",
      description: "From traditional methods to innovative practices, Sarah transformed her small farm into a model of sustainability.",
    },
    {
      image: "/community.jpg",
      title: "Community Success in Green Valley",
      description: "How a farming community doubled their yield while reducing environmental impact through AgriFlow's guidance.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real stories of transformation and growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <a
                  href="/impact"
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/impact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            View All Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;