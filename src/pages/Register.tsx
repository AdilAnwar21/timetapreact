import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ArrowRight,Users, Briefcase } from 'lucide-react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue with Leaflet in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// function LocationSelector({ setCoordinates }: { setCoordinates: (coords: { lat: number; lng: number }) => void }) {
//   useMapEvents({
//     click(e) {
//       setCoordinates(e.latlng);
//     },
//   });
//   return null;
// }

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'user',
    // coordinates: { lat: 0, lng: 0 },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (userType: string) => {
    setForm(prev => ({ ...prev, userType }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', form);
    // Handle API call here
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-purple-50 to-red-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-purple-600 px-6 py-8 text-center">
          <h2 className="text-3xl font-bold text-white">TimeTap</h2>
          <p className="mt-2 text-white opacity-90">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

        
            {/* User Type Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Account Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleUserTypeChange('user')}
                className={`flex items-center justify-center p-3 rounded-lg border-2 transition-all ${
                  form.userType === 'user'
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                }`}
              >
                <Users size={20} className="mr-2" />
                <span className="font-medium">User</span>
              </button>
              <button
                type="button"
                onClick={() => handleUserTypeChange('provider')}
                className={`flex items-center justify-center p-3 rounded-lg border-2 transition-all ${
                  form.userType === 'provider'
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                }`}
              >
                <Briefcase size={20} className="mr-2" />
                <span className="font-medium">Provider</span>
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-500">
              {form.userType === 'user' 
                ? 'Book services and appointments' 
                : 'Offer services and manage bookings'
              }
            </p>
          </div>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="relative mt-1">
              <div className="absolute left-3 top-3 text-gray-400">
                <User size={18} />
              </div>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <div className="absolute left-3 top-3 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <div className="absolute left-3 top-3 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
                placeholder="••••••••"
              />
              <div className="absolute right-3 top-3 text-gray-400">
                <button type="button" onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative mt-1">
              <div className="absolute left-3 top-3 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Map Location Picker */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Choose Location</label>
            <div className="h-64 rounded-md overflow-hidden border mt-2">
              <MapContainer
                center={[10.0, 76.0]}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationSelector
                  setCoordinates={(coords) =>
                    setForm((prev) => ({ ...prev, coordinates: coords }))
                  }
                />
                <Marker position={[form.coordinates.lat, form.coordinates.lng]} />
              </MapContainer>
            </div>
            <p className="text-xs mt-2 text-gray-600">
              Selected: {form.coordinates.lat.toFixed(4)}, {form.coordinates.lng.toFixed(4)}
            </p>
          </div> */}

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
            >
              Create {form.userType === 'provider' ? 'Provider' : 'User'} Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="h-2 w-full bg-gradient-to-r from-red-500 via-red-400 to-purple-600"></div>
      </div>
    </div>
  );
}
