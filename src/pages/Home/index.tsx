import { lazy } from "react";
// import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import TrendingDestinations from "../../components/TrendingDestinations";
import AboutUs from "../../components/AboutUs";
import SpecialOffers from "../../components/SpecialOffers";
import BookingSimple from "../../components/BookingSimple";
import DailyBlogs from "../../components/DailyBlogs";
import PopularThings from "../../components/PopularThings/PopularThings";
import FlightBookingForm from "../../components/Filters";
import "./Home.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <PerfectScrollbar>
      <>
        <div className="homePageBg">
          <h1 className="pageName">
            Your Ticket To <br /> Explore The World
          </h1>
          <p className="pagePara">
            Best Flights at cheap rates at your service
          </p>
        </div>
        <Container>
          <ScrollToTop />
          {/* <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="developer.svg"
          id="intro"
        /> */}
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
          <PopularThings />
          <MiddleBlock
            title={MiddleBlockContent.title}
            content={MiddleBlockContent.text}
            button={MiddleBlockContent.button}
          />
          <ContentBlock
            direction="right"
            title={MissionContent.title}
            content={MissionContent.text}
            icon="product-launch.svg"
            id="mission"
          />
          <ContentBlock
            direction="left"
            title={ProductContent.title}
            content={ProductContent.text}
            icon="waving.svg"
            id="product"
          />
          <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id="contact"
          />
        </Container>
      </>
    </PerfectScrollbar>
  );
};

export default Home;
