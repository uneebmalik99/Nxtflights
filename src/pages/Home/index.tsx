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
import { Card, Carousel } from "antd";
import styled from "styled-components";
import { Col, Row, Table } from "antd";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const StyledCarousel = styled(Carousel)`
  .slick-dots {
    bottom: -30px;
    li {
      button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #D9D9D9;
      }
      &.slick-active button {
        background: #666666;
      }
    }
  }
`;
const dataSource1 = [
  {
    key: "1",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "2",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "3",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "4",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "5",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "6",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "7",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "8",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "9",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
  {
    key: "10",
    city: "Abu Dhabi",
    price: "from $1000",
    detail: (
      <>
        More <ArrowForwardIosIcon style={{ fontSize: "small" }} />
      </>
    ),
  },
];

const Home = () => {

  const columns = [
    { title: "City", dataIndex: "city", key: "city" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Detail", dataIndex: "detail", key: "detail" },
  ];
  const airlines = [
    {
      name: "British Airways",
      logo: "../../assets/Airlines/british.webp",
      url: "/airline/british-airways",
    },
    {
      name: "Virgin Atlantic",
      logo: "../../assets/Airlines/virgin.webp",
      url: "/airline/virgin-atlantic",
    },
    {
      name: "Etihad Airways",
      logo: "../../assets/Airlines/etihad.webp",
      url: "/airline/etihad-airways",
    },
    {
      name: "Emirates",
      logo: "../../assets/Airlines/emirates.webp",
      url: "/airline/emirates",
    },
    {
      name: "Malaysia Airlines",
      logo: "../../assets/Airlines/malaysia.webp",
      url: "/airline/malaysia-airlines",
    },
    {
      name: "Air New Zealand",
      logo: "../../assets/Airlines/new_zealand.webp",
      url: "/airline/air-new-zealand",
    },
    {
      name: "Singapore Airlines",
      logo: "../../assets/Airlines/singapore.webp",
      url: "/airline/singapore-airlines",
    },
  ];

  const handleAirlineClick = (url: string) => {
    window.location.href = url;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="homePageBg">
        {/* <h1 className="homePageHeading">
          Your Ticket To <br /> Explore The World
        </h1> */}
        {/* <p className="pagePara">Best Flights at cheap rates at your service</p> */}
      </div>
      <Container>
        <ScrollToTop />


        <FlightBookingForm direction="left" />
        <HowItWorks direction="left" />

        <Row style={{ display: 'flex', marginTop: 30, justifyContent: 'space-evenly' }}  >

          <Col span={9}>
            <h6 style={{ fontSize: "24px", display: 'flex', marginBlock: 25, justifyContent: 'center', color: "#4062BB" }}>
              Economy Class Deals
            </h6>
            <div
              style={{
                border: "0.5px solid #BABABA",
                padding: "10px",
                width: window.innerWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table
                dataSource={dataSource1}
                columns={columns}
                pagination={false}
              />
            </div>
          </Col>

          <Col span={9}>
            <h6 style={{ fontSize: "24px", display: 'flex', marginBlock: 25, justifyContent: 'center', color: "#4062BB" }}>
              Business Class Deals
            </h6>
            <div
              style={{
                border: "0.5px solid #BABABA",
                padding: "10px",
                width: window.innerWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table
                dataSource={dataSource1}
                columns={columns}
                pagination={false}
              />
            </div>
          </Col>

        </Row>


        <section className="partner-airlines">
          <h2>Partner Airlines</h2>
          <StyledCarousel {...settings}>
            {airlines.map((airline, index) => (
              <div key={index} className="airline-slide">
                <Card
                  className="airline-card"
                  onClick={() => handleAirlineClick(airline.url)}
                  bordered={false}
                >
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="airline-logo"
                  />
                </Card>
              </div>
            ))}
          </StyledCarousel>
        </section>
        {/* <TrendingDestinations direction="right" />
        <AboutUs direction="left" /> */}
      </Container>
      {/* <SpecialOffers direction="right" />
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
      <CertificateBanner direction="right" /> */}
    </>
  );
};

export default Home;
