import React from 'react';
import { Star } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Experience the magic of the City of Light',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Immerse yourself in traditional Japanese culture',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Discover the beauty of the Aegean Sea',
    rating: 4.9,
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-700">{destination.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}