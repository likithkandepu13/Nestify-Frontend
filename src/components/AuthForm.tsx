import React from 'react';
import { X } from 'lucide-react';
import TouristForm from './auth/TouristForm';
import HostForm from './auth/HostForm';
import AdminForm from './auth/AdminForm';

type AuthFormProps = {
  isVisible: boolean;
  onClose: () => void;
};

export default function AuthForm({ isVisible, onClose }: AuthFormProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [userRole, setUserRole] = React.useState('tourist');

  if (!isVisible) return null;

  const renderForm = (isLogin: boolean) => {
    switch (userRole) {
      case 'tourist':
        return <TouristForm isLogin={isLogin} />;
      case 'host':
        return <HostForm isLogin={isLogin} />;
      case 'admin':
        return <AdminForm isLogin={isLogin} />;
      default:
        return <TouristForm isLogin={isLogin} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative">
        <div
          className={`w-96 bg-white rounded-lg shadow-xl transform transition-all duration-500 ${
            isFlipped ? 'scale-y-0' : 'scale-y-100'
          }`}
        >
          {/* Sign In Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="tourist">Tourist</option>
              <option value="host">Homestay Host</option>
              <option value="admin">Admin</option>
            </select>
            {renderForm(true)}
            <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
              Sign In
            </button>
            <p className="text-center mt-4">
              Don't have an account?{' '}
              <button
                onClick={() => setIsFlipped(true)}
                className="text-indigo-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>

        <div
          className={`w-96 bg-white rounded-lg shadow-xl absolute top-0 transform transition-all duration-500 ${
            isFlipped ? 'scale-y-100' : 'scale-y-0'
          }`}
        >
          {/* Sign Up Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="tourist">Tourist</option>
              <option value="host">Homestay Host</option>
              <option value="admin">Admin</option>
            </select>
            {renderForm(false)}
            <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
              Sign Up
            </button>
            <p className="text-center mt-4">
              Already have an account?{' '}
              <button
                onClick={() => setIsFlipped(false)}
                className="text-indigo-600 hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-lg"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}