import { Button, Col, Row, Select } from "antd";
import "./HolidayOffers.css";
const { Option } = Select;

const HolidayOffers = () => {
  const destinations = [
    "Dubai",
    "Singapore",
    "Switzerland",
    "Dubai",
    "Singapore",
    "Switzerland",
  ];

  return (
    <>
      <div>
        <img src="../../assets/HolidayOffer.png" />
      </div>
      <div
        style={{
          backgroundColor: "#4062BB",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section className="filters">
          <div style={{ display: "flex", gap: "20px" }}>
            <div className="select-container">
              <Select
                defaultValue="Where to?"
                style={{
                  width: 200,
                }}
              >
                <Option value="Dubai">Dubai</Option>
                <Option value="Singapore">Singapore</Option>
                <Option value="Switzerland">Switzerland</Option>
              </Select>
            </div>
            <div className="select-container">
              <Select
                defaultValue="Duration"
                style={{
                  width: 200,
                }}
              >
                <Option value="0 Nights - 7 Nights">0 Nights - 7 Nights</Option>
              </Select>
            </div>
            <div className="select-container">
              <Select
                defaultValue="Price"
                style={{
                  width: 200,
                }}
              >
                <Option value="1000$ - 2000$">1000$ - 2000$</Option>
              </Select>
            </div>
            <div className="select-container">
              <Select
                defaultValue="Sort Price"
                style={{
                  width: 200,
                }}
              >
                <Option value="High to low">High to low</Option>
              </Select>
            </div>
            <Button
              type="default"
              variant="outlined"
              shape="round"
              style={{
                backgroundColor: "#4062BB",
                border: "1.5px solid white",
                color: "white",
                width: 100,
              }}
            >
              Filter
            </Button>
          </div>
        </section>
      </div>

      <div className="intro">
        <h2>
          Your next luxury holiday is not as far away as you <br />
          may think
        </h2>
        <br />
        <p>
          From boutique hotels to all inclusive resorts, the team at Just Fly
          Business have the perfect escape for you… and all at fantastic prices!
          Our relationship with these properties means that we can offer
          excellent value, whether it’s room upgrades, in-resort credit, free
          <br />
          nights, or simply a great deal.
        </p>
        <br />
        <p>
          No detail is too small so if it’s a restaurant recommendation, help
          booking a spa treatment, or celebrating a special occasion, we are
          here to turn your holiday into the experience of a lifetime.
        </p>
      </div>

      <main className="offers">
        <Row gutter={[16, 16]}>
          {destinations.map((destination) => (
            <Col key={destination} span={8}>
              <div
                className="offer-card"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={`../../assets/${destination.toLowerCase()}-image.png`}
                  alt={destination}
                  style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
                />
                <div style={{ padding: "10px" }}>
                  <h3>{destination}</h3>
                  <p>
                    {destination === "Singapore"
                      ? "7 night 6 days trip to Singapore"
                      : "5 nights stay (including return ticket)"}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button type="default" variant="outlined" shape="round">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </main>
    </>
  );
};

export default HolidayOffers;
