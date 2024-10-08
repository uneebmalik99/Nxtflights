import { Button, Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import "./HolidayOffers.css";

const HolidayOffers = () => {
  const destinations = [
    "Dubai",
    "Singapore",
    "Switzerland",
    "Dubai",
    "Singapore",
    "Switzerland",
  ];

  const history = useHistory();

  return (
    <>
      <div className="holidayOfferContainer">
        <h1 className="pageName">Holiday Offers</h1>
      </div>
      <div className="filter-wrapper">
        <div className="filter-container">
          <div className="filter-item">
            <label>Where to?</label>
            <select>
              <option value="Dubai">Dubai</option>
              <option value="Singapore">Singapore</option>
              <option value="Switzerland">Switzerland</option>
            </select>
          </div>

          <div className="filter-item duration">
            <label>Duration</label>
            <select>
              <option value="0-7">0 Nights - 7 Nights</option>
              <option value="8-14">8 Nights - 14 Nights</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Price</label>
            <select>
              <option value="1000-2000">1000$ - 2000$</option>
              <option value="2001-3000">2001$ - 3000$</option>
            </select>
          </div>

          <div className="filter-item sort">
            <label>Sort</label>
            <select>
              <option value="high-low">Price High to Low</option>
              <option value="low-high">Price Low to High</option>
            </select>
          </div>

          <button className="filter-button">Filter</button>
        </div>
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
        <Row gutter={[16, 16]} className="customRow">
          {destinations.map((destination, index) => (
            <Col className="customCol" key={index} span={8}>
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
                      padding: "20px",
                    }}
                  >
                    <Button
                      type="default"
                      variant="outlined"
                      shape="round"
                      className="viewBtn"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        history.push(`/offer-detail/${destination}`);
                      }}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </main>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 0px 100px 0px",
        }}
      >
        <Button
          type="default"
          style={{
            color: "#696A75",
            borderColor: "rgb(216 215 223)",
            height: "45px",
            width: "150px",
            borderRadius: "8px",
          }}
        >
          View All Posts
        </Button>
      </div>
    </>
  );
};

export default HolidayOffers;
