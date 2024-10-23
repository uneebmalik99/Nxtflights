import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import contentData from "../../content/CountriesContent.json";
import { Col, Row } from "antd";
import Container from "../../common/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Filters from "../../components/Filters/index";

import "./CountryPage.css";
import { Table } from "antd";

const dataSource = [
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

const columns = [
  { title: "City", dataIndex: "city", key: "city" },
  { title: "Price", dataIndex: "price", key: "price" },
  { title: "Detail", dataIndex: "detail", key: "detail" },
];

interface Content {
  title: string;
  description: string;
  things_to_do: string;
  images: { [key: string]: string };
}

type ContentData = {
  [key: string]: Content;
};

function CountryPage() {
  const { location } = useParams<{ location: string }>();
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const data = (contentData as ContentData)[location];
    if (data) {
      setContent(data);
    } else {
      setContent({
        title: "Location Not Found",
        description:
          "Sorry, the requested location does not have content available.",
        things_to_do: "Things to do Not Found",
        images: {},
      });
    }
  }, [location]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        style={{
          zIndex: -1,
          height: "100vh",
          marginTop: -111,
          position: "relative",
          backgroundSize: "cover",
          backgroundImage: `url(/../../assets/CountryImages/${location}_country_img.webp)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <h1 className="countryName">{location.toUpperCase()}</h1>
      </div>
      <Filters direction="left" />
      <Container>
        <Row gutter={16} style={{ padding: 30 }}>
          <Col span={15} style={{ paddingRight: 70 }}>
            <h4 style={{ fontSize: "40px", color: "#333" }}>{content.title}</h4>
            <p style={{ fontSize: "15px", color: "#333" }}>
              {content.description}
            </p>
            <h4 style={{ fontSize: "40px", color: "#333" }}>
              {content.things_to_do}
            </h4>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {Object.values(content.images).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${index + 1}`}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </Col>
          <Col span={9}>
            <h6 style={{ fontSize: "24px", color: "#4062BB" }}>
              Business Class Deals
            </h6>
            <div
              style={{
                border: "1px solid #BABABA",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </div>
          </Col>
        </Row>
        <Row gutter={16} style={{ padding: 30 }}>
          <Col span={15} style={{ paddingRight: 70 }}>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              Burj Khalifa
            </h6>
            <p style={{ fontSize: 15, color: "#333", marginBottom: 20 }}>
              As the tallest artificial structure in the world, you literally
              cannot miss it. There are two viewing platforms on the Burj
              Khalifa at 452 metres and 555 metres, so take the opportunity to
              take a walk through the clouds and see for miles whether it’s day
              or night. Ensure to pre book tickets for this magnificent landmark
              up to 30 days in advance to guarantee your spot. Dine at the
              sky-high restaurant, Atmosphere, on the 122nd floor and experience
              sophisticated dining at one of the world’s finest and extravagant
              restaurants.
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              Dubai Fountain
            </h6>
            <p style={{ fontSize: 15, color: "#333", marginBottom: 20 }}>
              The world’s largest choreographed fountain system, it has 6,600
              illuminating lights and 25 coloured projectors, shooting water up
              500 ft in the air. The fountains dance along to varied background
              music, you will hear everything from traditional Arab music to
              contemporary world music. The fountain can be seen from close by
              restaurants, so take a break from a long day of shopping, grab a
              bite to eat and enjoy the unique waterfront show.
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              Burj Al Arab
            </h6>
            <p style={{ fontSize: 15, color: "#333" }}>
              Often described as the only seven star hotel on the globe, there
              is no doubt that the Burj Al Arab oozes luxury and magnificence.
              It is the third tallest hotel in the world, but not only is the
              exterior an architect’s dream to look at with the towering
              structure ascending from the ocean, but the inside is beyond a
              dream. Luxury holidays to Dubai become holidays to paradise if a
              stay at the Burj Al Arab is on the cards. Expect to receive a
              personal butler, a personal chauffeur driving a Rolls Royce, 17
              different options of pillows, a 4 carat gold iPad in every room
              and more luxuries than the mind could imagine. Despite it being
              classed as a 7 star hotel, you’re likely to pay more for your
              flights to Dubai than a night in this hotel, so make the most of
              the modest price for this level of prestige.
            </p>
          </Col>
          <Col span={9}>
            <h6 style={{ fontSize: "24px", color: "#4062BB" }}>
              Business Class Deals
            </h6>
            <div
              style={{
                border: "1px solid #BABABA",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CountryPage;
