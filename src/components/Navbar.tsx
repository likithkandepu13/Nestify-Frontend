import React from 'react';
import { UserCircle2, Menu, X } from 'lucide-react';

type NavbarProps = {
  onProfileClick: () => void;
  onPageChange: (page: string) => void;
};

export default function Navbar({ onProfileClick, onPageChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/components/images/logo.jpg"
              alt="Nestify"
              className="h-8 w-8 rounded-full"
            />
            <h1 className="text-2xl font-bold text-indigo-600 ml-2">Nestify</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onPageChange('home')}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => onPageChange('about')}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              About Us
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Contact
            </button>
            <button
              onClick={onProfileClick}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Profile"
            >
              <UserCircle2 className="w-6 h-6 text-indigo-600" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                onPageChange('home');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => {
                onPageChange('about');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </button>
            <button
              onClick={() => {
                onPageChange('contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </button>
            <button
              onClick={() => {
                onProfileClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Profile
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}