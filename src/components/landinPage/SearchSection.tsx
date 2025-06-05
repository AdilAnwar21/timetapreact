import { useState, useEffect } from 'react';
import { MapPin, Search, Mic, ChevronDown } from 'lucide-react';
import { appService } from '../../services/api';

interface SearchSectionProps {
  onLocationChange: (location: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onLocationChange }) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Please select a Location');
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const locationsCall = await appService.getlocations();
        const fetchedLocations = locationsCall.data?.locations || [];
        setLocations(fetchedLocations);
        if (fetchedLocations.length > 0) {
          setSelectedLocation(fetchedLocations[0]);
          onLocationChange(fetchedLocations[0]);
        }
      } catch (error) {
        setError('Failed to fetch locations');
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [onLocationChange]);

  return (
    <div className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-6 md:space-y-0">
          {/* Location Selector */}
          <div className="relative md:w-1/3">
            <p className="text-gray-500 text-sm mb-2">LOCATION</p>
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="w-full flex items-center space-x-2 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 p-2"
              >
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-xl font-semibold flex-grow text-left truncate">
                  {selectedLocation}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    isLocationOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {isLocationOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 z-50 max-h-64 overflow-y-auto">
                  {loading ? (
                    <div className="px-4 py-3 text-gray-500">Loading...</div>
                  ) : error ? (
                    <div className="px-4 py-3 text-red-500">{error}</div>
                  ) : locations.length === 0 ? (
                    <div className="px-4 py-3 text-gray-500">No locations available</div>
                  ) : (
                    locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsLocationOpen(false);
                          onLocationChange(location);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2 ${
                          selectedLocation === location ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                        }`}
                      >
                        <MapPin
                          className={`w-5 h-5 ${
                            selectedLocation === location ? 'text-purple-600' : 'text-gray-400'
                          }`}
                        />
                        <span>{location}</span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative md:w-2/3">
            <div className="flex items-center bg-gray-100 rounded-full p-3 shadow-sm">
              <Search className="w-6 h-6 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search Salon, Doctor..."
                className="flex-1 bg-transparent border-none focus:outline-none px-4 text-gray-700"
              />
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <Mic className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
