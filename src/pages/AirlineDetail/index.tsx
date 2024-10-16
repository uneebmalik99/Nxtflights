import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import contentData from "../../content/AirlinesContent.json";
import { Col, Row, Table } from "antd";
import Container from "../../common/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Filters from "../../components/Filters/index";
import styles from "../AirlineDetail/AirlineDetail.module.css";

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
  club_class: string;
  images: { [key: string]: string };
}

type ContentData = {
  [key: string]: Content;
};

function toSentenceCase(str: string) {
  return str
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function AirlineDetail() {
  const { detail } = useParams<{ detail: string }>();
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const data = (contentData as ContentData)[detail];
    if (data) {
      setContent(data);
    } else {
      setContent({
        title: "Airline Not Found",
        description:
          "Sorry, the requested Airline does not have content available.",
        club_class: "Club Class Not Found",
        images: {},
      });
    }
  }, [detail]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        style={{
          height: "80vh",
          position: "relative",
          backgroundSize: "cover",
          //   backgroundImage: `url(/../../assets/Airlines/${detail}_bg_img.png)`,
          backgroundImage: `url(/../../assets/Airlines/british-airways_bg_img.png)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <h1 className={styles.AirlineName}>{toSentenceCase(detail)}</h1>
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
              {content.club_class}
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
              Pre Flight Experience
            </h6>
            <p style={{ fontSize: 15, color: "#333", marginBottom: 20 }}>
              Receive exclusive access to BA club lounges with complimentary
              drinks and meals, access to luxury spa treatments, dedicated
              check-in desks, priority boarding and a larger luggage allowance
              than standard seating, the Club Class experience begins before
              even boarding your flight. Are you looking for the best deals on
              the world’s most luxurious flights? You’ll find everything you
              require here at Just Fly Business. It only takes a few mouse
              clicks to find flights to all the world’s top destinations, from
              Singapore to San Diego, so get searching now to book the trip of a
              lifetime. Don’t hesitate to contact our luxury travel specialists
              if you have any questions concerning BA club world flights.
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              In Flight Experience
            </h6>
            <p style={{ fontSize: 15, color: "#333", marginBottom: 20 }}>
              When travelling long haul (Club World), you can also receive the
              benefits of a spacious armchair that converts into a fully flat
              bed, a luxury Elemis amenity kit, in-seat power for laptops or
              other electronics and exclusive entertainment including a flat
              screen TV with hundreds of the latest films, documentaries,
              television, music, audiobooks and games available, as well as an
              on-demand service. Every menu you will find on your flight is
              designed by some of the world’s top chefs, thoughtfully prepared
              using locally sourced, seasonal produce and elegantly presented.
              Where ever you want to fly, British Airways will take you there in
              comfort and style!
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              Check Out Our Fantastic Holiday Offers
            </h6>
            <p style={{ fontSize: 15, color: "#333" }}>
              We all need a break from the stresses of daily life from time to
              time, but finding the perfect holiday, whether you’re travelling
              alone or with the family, can be challenging. The world has more
              than anybody could ever see in a lifetime, but when you want to
              inject a touch of luxury into your trip, you needn’t look any
              further than Just Fly Business. In addition to BA club world and
              first class flights, we can also help you track down the perfect
              hotel. Plus, we have a broad range of special offers so that you
              can enjoy an unforgettable holiday while keeping in line with your
              budget. We can help you save hundreds of pounds on getaways to Las
              Vegas, Jamaica, Dubai and more. If you need help finding the right
              trip for you, don’t hesitate to get in touch.
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

export default AirlineDetail;
