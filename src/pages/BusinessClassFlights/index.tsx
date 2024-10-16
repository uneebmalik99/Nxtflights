import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import contentData from "../../content/BusinessClassFlights.json";
import { Col, Row, Table } from "antd";
import Container from "../../common/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Filters from "../../components/Filters/index";
import styles from "../BusinessClassFlights/BusinessClassFlights.module.css";

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
  cheap_flights: string;
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

function BusinessClassFlights() {
  const location = useLocation();

  // Get the pathname and remove the leading slash
  const path = location.pathname.substring(1);

  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const data = (contentData as ContentData)[path];
    if (data) {
      setContent(data);
    } else {
      setContent({
        title: "Airline Not Found",
        description:
          "Sorry, the requested Airline does not have content available.",
        cheap_flights: "Club Class Not Found",
        images: {},
      });
    }
  }, [path]);

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
          backgroundImage: `url(/../../assets/Airlines/business_class_bg_img.png)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <h1 className={styles.FlightName}>
          Business Class <br /> Flights
        </h1>
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
              {content.cheap_flights}
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
              Sit, Recline, and Lie in Comfort
            </h6>
            <p style={{ fontSize: 15, color: "#333", marginBottom: 20 }}>
              More often than not, business class seats are the peak of luxury
              and well on par with First Class. After a high-powered meeting, or
              a week in the sun, nothing beats the extra space and a seat that
              recline at the push of a button.
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              Fine Dining at 30,000 ft
            </h6>
            <p style={{ fontSize: 15, color: "#333", marginBottom: 20 }}>
              Unlike on a economy class flight, business class passengers have
              access to complimentary champagne, world-class foods, and recipes
              from award-winning chefs.
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              In-flight Privacy
            </h6>
            <p style={{ fontSize: 15, color: "#333" }}>
              As one market closes, another opens, and if deadlines are looming,
              the privacy of business class allows a quiet, comfortable, and
              tranquil space to get things done. Equally, it’s simply a quiet
              spot to kick back, relax, and take the weight off your shoulders.
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              Pre-flight entertainment
            </h6>
            <p style={{ fontSize: 15, color: "#333" }}>
              With our cheap business class flights, customers will often also
              have the benefit of enjoying exclusive lounges before take-off.
              They’ll have an array of wines, spirits, and nicely chilled
              champagne, and in some airports you can even take advantage of a
              spa.
            </p>
            <h6 style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>
              Priority boarding & Chauffeur Service
            </h6>
            <p style={{ fontSize: 15, color: "#333" }}>
              Boarding can be one of the most frustrating aspects of travel;
              when flying business class, you board before premium and economy
              passengers.
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

export default BusinessClassFlights;
