import  { useState } from 'react';
import { Menu, X, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TimeTap
            </span>
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TimeTap
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                
              </button>
            </div>
            <div className="space-y-4">
              <a href="#" className="block py-2.5 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition duration-200">
                Home
              </a>
              <a href="#" className="block py-2.5 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition duration-200">
                Services
              </a>
              <a href="#" className="block py-2.5 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition duration-200">
                About
              </a>
              <a href="#" className="block py-2.5 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;