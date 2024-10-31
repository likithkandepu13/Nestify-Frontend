import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Find Your Perfect Homestay</h1>
        <p className="text-xl mb-8">Experience authentic local living around the world</p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2">
          <div className="flex items-center">
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full py-3 text-gray-900 outline-none"
              />
            </div>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}