import { Card, Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import styles from "../Airlines/Airlines.module.css";

function Airlines() {
  const airlines = [
    {
      name: "British Airways",
      logo: "../../assets/Airlines/british.png",
      url: "/airline/british-airways",
    },
    {
      name: "Virgin Atlantic",
      logo: "../../assets/Airlines/virgin.png",
      url: "/airline/virgin-atlantic",
    },
    {
      name: "Etihad Airways",
      logo: "../../assets/Airlines/etihad.png",
      url: "/airline/etihad-airways",
    },
    {
      name: "Emirates",
      logo: "../../assets/Airlines/emirates.png",
      url: "/airline/emirates",
    },
    {
      name: "Malaysia Airlines",
      logo: "../../assets/Airlines/malaysia.png",
      url: "/airline/malaysia-airlines",
    },
    {
      name: "Air New Zealand",
      logo: "../../assets/Airlines/new_zealand.png",
      url: "/airline/air-new-zealand",
    },
    {
      name: "Singapore Airlines",
      logo: "../../assets/Airlines/singapore.png",
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
