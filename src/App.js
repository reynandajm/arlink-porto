import React from 'react';
import profileImage from './aboutme.png';

const Portfolio = () => {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "Git"
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img 
                src={profileImage}
                alt="Profile"
                className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
              />
              <h1 className="text-2xl font-bold text-center mt-4 text-gray-800">0xreynn</h1>
              <p className="text-center text-gray-600">Network and Application Tester</p>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">About Me</h2>
              <p className="text-gray-600 mb-6">
              I am a passionate blockchain testnet explorer with expertise in testing networks, smart contracts, and decentralized applications (dApps). I contribute to improving blockchain reliability by identifying bugs, ensuring performance, and providing feedback on testnets like Ethereum, Solana, and Layer-2 solutions. With a keen eye for detail and a commitment to innovation, I aim to support the growth of secure and efficient blockchain ecosystems.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact</h2>
                <div className="text-gray-600">
                  <p>Email: ucoxrey@gmail.com</p>
                  <p>Location: Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;