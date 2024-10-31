import React from 'react';
import { User, Mail, Lock, Phone, Calendar, Globe } from 'lucide-react';

export default function TouristForm({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="space-y-4">
      {!isLogin && (
        <>
          <div className="flex items-center space-x-2 p-2 border rounded">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 outline-none"
              required
            />
          </div>
          <div className="flex items-center space-x-2 p-2 border rounded">
            <Phone className="w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 outline-none"
              required
            />
          </div>
          <div className="flex items-center space-x-2 p-2 border rounded">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              placeholder="Date of Birth"
              className="flex-1 outline-none"
              required
            />
          </div>
          <div className="flex items-center space-x-2 p-2 border rounded">
            <Globe className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Nationality"
              className="flex-1 outline-none"
              required
            />
          </div>
        </>
      )}
      
      <div className="flex items-center space-x-2 p-2 border rounded">
        <Mail className="w-5 h-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="flex-1 outline-none"
          required
        />
      </div>
      <div className="flex items-center space-x-2 p-2 border rounded">
        <Lock className="w-5 h-5 text-gray-400" />
        <input
          type="password"
          placeholder="Password"
          className="flex-1 outline-none"
          required
        />
      </div>
      {!isLogin && (
        <div className="flex items-center space-x-2 p-2 border rounded">
          <Lock className="w-5 h-5 text-gray-400" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="flex-1 outline-none"
            required
          />
        </div>
      )}
    </div>
  );
}