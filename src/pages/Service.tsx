// import BookAppointmentButton from "../components/servicesPage/BookButton";
import CommentsSection from "../components/servicesPage/Comments";
import ServiceDetails from "../components/servicesPage/MainViewSection";
import SimilarServices from "../components/servicesPage/SimilarServices";

const ServiesPage = () => {
  return (
    <div >
        <ServiceDetails></ServiceDetails>
        <SimilarServices></SimilarServices>
        <CommentsSection></CommentsSection>
        {/* <BookAppointmentButton></BookAppointmentButton> */}
      
    </div>
  );
};

export default ServiesPage;
