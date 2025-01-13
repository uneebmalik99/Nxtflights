import { Card, Col, Row } from "antd";
import { HowItWorksProps } from "./types";
import "./styles.css";

function HowItWorks({ direction }: HowItWorksProps) {
  const cardData = [
    {
      title: "Book & Relax",
      description:
        "Fill in the Inquiry Form or give us a call",
      image: "../../assets/SaveMore.webp",
    },
    {
      title: "Smart Checklist",
      description:
        "Our travel consultants will cater to your requirements",
      image: "../../assets/CheckList.webp",
    },
    {
      title: "Save More",
      description:
        "Instant booking once you happy to go ahead",
      image: "../../assets/Books.webp",
    },
  ];
  return (
    <>
      <div style={{ marginTop: 30, }} className="heading">
        <h1 id="how_h1">How It Works</h1>
      </div>
      <div className="container">
        <Row gutter={[50, 50]}>
          {/* Adjust spacing between cards */}
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              {/* Responsive grid */}
              <Card className="custom-card" hoverable>
                <div className="card-content">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                  />
                  <div className="card-text">
                    {/* <h3>{card.title}</h3> */}
                    <p>{card.description}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default HowItWorks;
