import Navbar from '../components/landinPage/Navbar';
import SearchSection from '../components/landinPage/SearchSection';
import Ratings from '../components/landinPage/Ratings';
import ServicesSection from '../components/landinPage/Services';
import ShopCards from '../components/landinPage/Shops';
import TopPicks from '../components/landinPage/TopPicks';

const LandingPage = () => {

  const handleLocationChange = (location: string) => {
    console.log('Selected Location:', location);
    
  };

  

  return (

    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchSection onLocationChange={handleLocationChange}/>
      <div className="lg:px-16">
        <Ratings />
        <ServicesSection />
        <ShopCards />
        <TopPicks />
      </div>
    </div>
  );
};

export default LandingPage;
