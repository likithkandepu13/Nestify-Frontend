import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

type FooterProps = {
  onPageChange: (page: string) => void;
};

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nestify</h3>
            <p className="text-gray-400">
              Connecting travelers with authentic local experiences around the
              world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onPageChange('home')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('about')}
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('contact')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-400">support@nestify.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nestify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
