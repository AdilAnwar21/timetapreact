import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();

  // Default person image URL
  const defaultPersonImage = new URL('../assets/user_avatar.png', import.meta.url).href;

  // Updated notifications list, one without an image
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New message received', read: false, image: '', timestamp: '2025-05-03 10:00 AM' },
    { id: 2, message: 'Your service request has been approved', read: true, timestamp: '2025-05-03 09:30 AM' }, // No image
    { id: 3, message: 'Reminder: Meeting at 3 PM today', read: false, image: '', timestamp: '2025-05-03 08:45 AM' },
  ]);

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const linkClass = (path: string) =>
    location.pathname === path
      ? 'text-purple-600 font-semibold'
      : 'text-gray-700 hover:text-purple-600';

  const mobileLinkClass = (path: string) =>
    location.pathname === path
      ? 'block py-2.5 px-4 rounded-lg text-purple-600 font-semibold bg-purple-50'
      : 'block py-2.5 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600';

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TimeTap
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClass('/')}>Home</NavLink>
            <NavLink to="/services" className={linkClass('/services')}>Services</NavLink>
            <NavLink to="/about" className={linkClass('/about')}>About</NavLink>
            <NavLink to="/contact" className={linkClass('/contact')}>Contact</NavLink>

            {/* Notification Icon */}
            <button
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <Bell className="w-6 h-6 text-gray-600" />
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-lg text-gray-800">Notifications</h3>
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-purple-600 hover:text-purple-800 transition duration-150"
                    >
                      Mark all as read
                    </button>
                  </div>
                  {/* Scrollable notifications list */}
                  <ul className="max-h-64 overflow-y-auto space-y-3">
                    {notifications.map((notification) => (
                      <li
                        key={notification.id}
                        className={`p-3 rounded-lg transition duration-150 flex items-start space-x-3 ${
                          notification.read
                            ? 'bg-gray-100 text-gray-500'
                            : 'bg-purple-50 text-gray-800 font-semibold'
                        } hover:bg-purple-100`}
                      >
                        <img
                          src={notification.image || defaultPersonImage}
                          alt="Notification icon"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p>{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>

            {/* Styled Login button (last) */}
            <NavLink
              to="/login"
              className="px-4 py-1.5 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition duration-200"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full justify-between">
            {/* Top section */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  TimeTap
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-4">
                <NavLink to="/" className={mobileLinkClass('/')}>Home</NavLink>
                <NavLink to="/services" className={mobileLinkClass('/services')}>Services</NavLink>
                <NavLink to="/about" className={mobileLinkClass('/about')}>About</NavLink>
                <NavLink to="/contact" className={mobileLinkClass('/contact')}>Contact</NavLink>
              </div>
            </div>

            {/* Bottom section with Contact icon and Login */}
            <div className="p-6 border-t border-gray-200 space-y-4">
              <NavLink
                to="/login"
                className="block w-full text-center py-2 px-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;