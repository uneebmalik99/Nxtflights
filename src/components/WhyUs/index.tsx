import { Card, Col, Row } from "antd";
import { WhyUsProps } from "./type";
import "./whyus.css";

function WhyUs({ direction }: WhyUsProps) {
  const cardData = [
    {
      title: "Competitive pricing",
      description: "Preferred parameter with 80+ airlines and 500+ suppliers",
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/da9b/fd19/e7cdbc9f6090d6c326826a98985cb389?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHAJzl1Fb5wpl3xY6LAUpam8lg~~Sh71S7ui17w4sAbVu9BIv3QAvaFS14Ph7Xjfkc9H3cqGpxFuXOoMdQ~eyj~g1y8BUvUTzgWOplJsQegx1cGJ9jl~s0bgnm-clEAzevhRjyI4hLIF1cZnPXLh5okwmbXKGQD1xWRCmpprZ8T7RJCHhWORhxf7LAJSdQY0hg1-qrvnN5mbM2NYEnC~AtFn26rwJB-vkI3KWDk68CtYW2BhG8ddltQFYje7XnjzktlcVCMcsB8Bagh4QNv6C6BZghVUty0MO66wO2dOzlCp8448bq-C05cHcdpafZXRJ-qkLcpSVHSRE-hapvRNJg__",
    },
    {
      title: "24/7 services",
      description:
        "Home and away, we can support you 24 hours a day, 7 days a week.",
      backgroundColor: "#4062BB",
      textColor: "#FFFFFF",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/b2d7/4407/773837326aa93ce9d7cdfd1acc0fc636?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=opfkNIXW0fvUnqmGx3KWVkSwS07dvXLB7lrrpyj7wO~fKO5Txv5U6eW08cSUMYHebGqkqyKmgHyAWSuZspl9R~Twn4CGfuZ7onN8axRNlmTtPqBkgZhZElTebHkf~CdHC08gFG-Ic3cP9Nnd~25MkGExher7vw5uolQouhhhNn-B2KBaUBSVWfL8V0Te4~YFE36Ci6U2tHNJ1VgUsl5dTALbIku8Fj0E2Y-UEWUYXE4HQYkk1z-xnKayP7Oy7z~1NOkZjrCl97K57rdduTxB4N1NCnl8qFbCdfPTdAHN-mV5cDXv3CUvY0ah69WoKERqw7~VzS5Nmo6aG340je-7OQ__",
    },
    {
      title: "Global Network",
      description:
        "Flights to over 5000 cities in 200+ countries and over one million hotels",
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/3374/3c57/c357144860696a998b938f520b1b104e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-H3tY6vsW8-e528thvNarmwgqTT39bixnIOHEezyLNxciL9ofL1-0sQTzW8pC1SLZOFeWVLohdw3WRhVJVEbzPC109q~u6as60TvLGYY9RhgxwYuQ-zfcrYJ4VimZS27m4ujpPTzVO2DFyV7L5WKQyTaZ0MUbyGNH6rnc-CvyUADIYrnFIJO9bGdJdEx6GvDBz-XGQMFXj~m13j8qWSrJcodIRHKvau08Vr~JNnpInV2TacxLdiiM0H1VZY6rVb4w75~AoCPNw8JiZ1s5ymzCD0zyjGeG4bC-GtwhWcbKtyChASr8qabe1MunCs3pHWNL1XbPcV8rT2rosCLIplcw__",
    },
  ];

  return (
    <div
      style={{
        padding: "30px 0",
        textAlign: direction === "left" ? "left" : "right", // Apply the direction
      }}
      className="why-us-container"
    >
      <div style={{ marginTop: 30, justifyContent: 'center' }} className="heading">
        <h1 style={{ alignSelf: 'center' }} id="how_h1">Why Choose Us</h1>
      </div>
      <div className="containers">
        <Row gutter={[30, 30]} justify="center">
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card className="custom-cards" hoverable>
                <div>
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="card-images"
                  />
                  <div className="card-texts">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default WhyUs;
