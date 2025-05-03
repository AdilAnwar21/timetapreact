import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
import Ratings from '../components/Ratings';
import ServicesSection from '../components/Services';
import ShopCards from '../components/Shops';
import TopPicks from '../components/TopPicks';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchSection />
      <div className="lg:px-16"> {/* Apply padding on large screens only */}
        <Ratings />
        <ServicesSection />
        <ShopCards />
        <TopPicks />
      </div>
    </div>
  );
};

export default LandingPage;
