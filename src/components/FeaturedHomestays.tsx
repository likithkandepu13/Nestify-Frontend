import React from 'react';
import { Star, Users, MapPin } from 'lucide-react';

const homestays = [
  {
    id: 1,
    name: 'Charming Parisian Apartment',
    location: 'Le Marais, Paris',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 120,
    rating: 4.9,
    guests: 4,
  },
  {
    id: 2,
    name: 'Traditional Japanese House',
    location: 'Gion, Kyoto',
    image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 150,
    rating: 4.8,
    guests: 3,
  },
  {
    id: 3,
    name: 'Santorini Cave House',
    location: 'Oia, Santorini',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 200,
    rating: 4.9,
    guests: 2,
  },
];

export default function FeaturedHomestays() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Homestays</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homestays.map((homestay) => (
            <div
              key={homestay.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={homestay.image}
                  alt={homestay.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow">
                  <span className="font-semibold">${homestay.price}</span>
                  <span className="text-gray-500">/night</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{homestay.location}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{homestay.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-gray-700">{homestay.rating}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{homestay.guests} guests</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}