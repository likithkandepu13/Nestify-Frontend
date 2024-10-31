import React from 'react';
import { Users, Globe, Shield, Heart } from 'lucide-react';
import image1 from "../components/images/image1.jpg";


const features = [
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: 'Community-Driven',
    description: 'Join a global community of travelers and hosts sharing authentic experiences.',
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    title: 'Worldwide Reach',
    description: 'Connect with homestays across the globe, from urban apartments to rural retreats.',
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-600" />,
    title: 'Secure Platform',
    description: 'Advanced security measures to protect your data and transactions.',
  },
  {
    icon: <Heart className="w-8 h-8 text-indigo-600" />,
    title: 'Personalized Experience',
    description: 'Tailored recommendations based on your preferences and travel style.',
  },
];

const teamMembers = [
  {
    name: 'Lohith Reddy',
    role: 'CEO & Founder',
    image: image1,
  },
  {
    name: 'Likith Kandepu',
    role: 'Head of Operations',
    image: image1,
  },
  {
    name: 'Harshith Gupta',
    role: 'Customer Experience',
    image: image1,
  },
];

export { teamMembers };

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About Nestify</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transforming the way people experience travel through authentic local connections and unique homestays.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create meaningful connections between travelers and local communities, 
              fostering cultural exchange and authentic travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}