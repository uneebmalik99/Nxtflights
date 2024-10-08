import { lazy } from "react";
import TrendingDestinations from "../../components/TrendingDestinations";
import AboutUs from "../../components/AboutUs";
import SpecialOffers from "../../components/SpecialOffers";
import BookingSimple from "../../components/BookingSimple";
import DailyBlogs from "../../components/DailyBlogs";
import PopularThings from "../../components/PopularThings/PopularThings";
import FlightBookingForm from "../../components/Filters";
import "./Home.css";
import HappeningCities from "../../components/HappeningCities";
import HowItWorks from "../../components/HowItWorks";
import PhotoGallery from "../../components/PhotoGallery";
import ClientsReview from "../../components/ClientsReview";
import CertificateBanner from "../../components/CertificateBanner";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <>
      <div className="homePageBg">
        <h1 className="homePageHeading">
          Your Ticket To <br /> Explore The World
        </h1>
        <p className="pagePara">Best Flights at cheap rates at your service</p>
      </div>
      <Container>
        <ScrollToTop />
        <FlightBookingForm direction="left" />
        <TrendingDestinations direction="right" />
        <AboutUs direction="left" />
      </Container>
      <SpecialOffers direction="right" />
      <Container>
        <BookingSimple direction="left" />
      </Container>
      <DailyBlogs direction="right" />
      <Container>
        <PopularThings direction="left" />
        <HappeningCities direction="right" />
        <HowItWorks direction="left" />
        <PhotoGallery direction="right" />
        <ClientsReview direction="left" />
      </Container>
      <CertificateBanner direction="right" />
    </>
  );
};

export default Home;
