import { Card, Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import styles from "../Airlines/Airlines.module.css";

function Airlines() {
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

  const history = useHistory();

  const handleImageClick = (url: string) => {
    history.push(url);
  };

  return (
    <>
      <div className={styles.airlinesContainer}>
        <h1 className={styles.airlinesPageName}>
          Our Airline <br />
          Partners
        </h1>
      </div>

      <div className={styles.customAirlinesContainer}>
        <div className={styles.textContainer}>
          <h1 id={styles.customHeading}>Discover Your Favorite Airline</h1>
          <p style={{ fontSize: "15px" }}>
            Here are a selection of our most frequently booked airlines. Our
            prices are highly competitive and we are specialists at last minute
            business and first class travel, often up-to 50% off the published
            fare.
          </p>

          <p style={{ fontSize: "15px", marginTop: 50 }}>
            Click any airline to discover a taste of your business class
            experience!
          </p>
        </div>

        <Row gutter={[16, 16]} justify="center">
          {airlines.map((airline, index) => (
            <Col xs={24} sm={12} md={8} lg={8} key={index}>
              <div className={styles.customAirlineCardWrapper}>
                <Card className={styles.customAirlineCard}>
                  {/* Airline Logo */}
                  <img
                    alt={airline.name}
                    src={airline.logo}
                    className={styles.customAirlineLogo}
                    onClick={() => handleImageClick(airline.url)}
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Airlines;
