import { Card, Col, Row } from "antd";
import { HowItWorksProps } from "./types";
import "./styles.css";

function HowItWorks({ direction }: HowItWorksProps) {
  const cardData = [
    {
      title: "Book & Relax",
      description: "Fill in the Inquiry Form or give us a call",
      image:
        "https://s3-alpha-sig.figma.com/img/7231/94dc/0759dd3f2a4bf9e1af5cff99b14be70a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZ0Vh8FppVzan2Cmk3wFPRs1PiD8gc37V-DZXQ2ZGsHWQCJuy57HkwHnYYyrEgbzrpvD5bibSxRlVwvVPQoH8lAO6pDvR0LipFqN8pPsYgNTTTN5G9P-yRQ7VAaI21uhXf09z~Q3xypsWhRXuNVBbWVIIIabZmTAnsg2GKDjtREte2fdKpA6K5YH2vP8jJzwrKhU0EbEcTv4n~TFTvdz5SrjpRZ19Qr0GjLehODWNsIUwRA2evGaIbMTkm25FBVpL1CkNYOj51jNuXh1HbYDDHirZH6Hv36XT7CkmkldJXRvwmQk9DWVQyJRl8OYDTI6XWT7AJh-hdSdiAkJm4MFow__",
    },
    {
      title: "Smart Checklist",
      description: "Our travel consultants will cater to your requirements",
      image:
        "https://s3-alpha-sig.figma.com/img/ef92/892b/828147b3647ce6af2503f9fb2d83edcd?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KheTFpk38z2RiprOBnQ10QKNPXUAJNQtZmszAJc4ED2TrHeWD70tkk2F-g45LIQ-Nn~GQ9L2cNWKIDeXr0Ao3zTtpf92fHP15X7xsgNoqC-FyrM3kLi5tnsuegzwVGkOw0gZmVA-Z0vEWdcQLNIFganQW5SRTz2H92zVK4If4kFbWH~CzazZfy2XEBTO5Sdf2m2VgTwTjybK4YV594zXoA6lBWff1jVQ58RCx0Yr1sWtHucI8G-9zu-pV-xowCvmV-l4WBTbRszHavlag2MNE1BMW-KBQ3lGavG7FlP64a-7Qz-TeMSC0WtpR484iMz8XfH2E8CCf9g0KbA~g6QZiA__",
    },
    {
      title: "Save More",
      description: "Instant booking once you happy to go ahead",
      image: "../../assets/Books.webp",
    },
  ];
  return (
    <>
      <div style={{ marginTop: 30, justifyContent: 'center' }} className="heading">
        <h1 style={{ justifyContent: 'center', alignSelf: 'center', textAlign: 'center' }} id="how_h1">How It Works</h1>
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
