import { Fade } from "react-awesome-reveal";
import { FlightBookingFormProps } from "./types";
import "./FlightBookingForm.css";
import { Button, Card, Col, Row } from "antd";

function FlightBookingForm({ direction }: FlightBookingFormProps) {
  return (
    <div className="formContainer">
      <Fade direction={direction} triggerOnce>
        <Card className="filtersCard" style={{}}>
          <Row className="filterParentRow">
            <Col className="responsive-col" span={16}>
              <div className="leftHeading">
                Get Amazing First and Business Class Flight Deals
              </div>
              <Row className="leftChildRow">
                <Col span={12} className="leftChildCol">
                  <div className="inputDiv">
                    <label>Depart from</label>
                    <input type="text" value="John Doe" />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="inputDiv"
                      style={{ width: "46%", marginRight: 10 }}
                    >
                      <label>Leave On</label>
                      <input type="date" />
                    </div>
                    <div className="inputDiv" style={{ width: "50%" }}>
                      <label>Return</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="inputDiv">
                    <input type="text" placeholder="Name" id="name" />
                  </div>
                  <div className="inputDiv">
                    <input type="text" placeholder="Phone" id="phone" />
                  </div>
                </Col>
                <Col span={12} className="leftChildCol">
                  <div className="inputDiv">
                    <label>Arrive at</label>
                    <input type="text" value="John Doe" />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="inputDiv"
                      style={{ width: "46%", marginRight: 10 }}
                    >
                      <label>Class</label>
                      <select>
                        <option value="Business">Business</option>
                      </select>
                    </div>
                    <div className="inputDiv" style={{ width: "50%" }}>
                      <label>Class</label>
                      <select>
                        <option value="Business">Business</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputDiv">
                    <input type="text" placeholder="Email" id="email" />
                  </div>
                  <div className="inputDiv">
                    <input type="text" placeholder="Comments" id="comments" />
                  </div>
                </Col>
                <Col span={24}>
                  <div className="getPriceDiv">
                    <Button type="default" shape="round" id="get-price">
                      Get Price
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              span={8}
              style={{
                paddingBlock: 20,
                paddingInline: 35,
              }}
              id="rightCol"
            >
              <p style={{ fontWeight: "bold" }}>Why Work with Us?</p>
              <ul style={{ fontSize: 20 }}>
                <li>
                  Best prices for flights,
                  <br /> hotels & car
                </li>
                <li>Experienced, friendly staff</li>
                <li>Easy booking process</li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50%",
                }}
              >
                <img
                  src="../../../assets/certificate.png"
                  width={300}
                  alt="certificate"
                />
              </div>
              <p
                style={{
                  borderTop: "1px dotted black",
                  marginTop: 10,
                  paddingTop: 10,
                  fontSize: 15,
                  color: "black",
                }}
              >
                Just Fly Business takes your privacy very seriously. Please see
                our privacy policy and terms & conditions here
              </p>
            </Col>
          </Row>
        </Card>
      </Fade>
    </div>
  );
}

export default FlightBookingForm;
