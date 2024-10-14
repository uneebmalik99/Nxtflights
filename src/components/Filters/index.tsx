import { Fade } from "react-awesome-reveal";
import { FlightBookingFormProps } from "./types";
import "./FlightBookingForm.css";
import { Button, Card, Col, Row, Spin, notification, Modal } from "antd";
import axios from "axios";
import { useState } from "react";

function FlightBookingForm({ direction }: FlightBookingFormProps) {
  const initialFormData = {
    departFrom: "",
    arriveAt: "",
    leaveOn: "",
    returnOn: "",
    name: "",
    phone: "",
    email: "",
    comments: "",
    travelClass1: "",
    travelClass2: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Start loading
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/flight-request`,
        formData
      );
      // Stop loading
      setLoading(false);
      // Show the modal on success
      setIsModalVisible(true);

      // Show the notification on success
      notification.success({
        message: "Success",
        description: "Email sent successfully.",
      });

      // Clear the form data on success
      setFormData(initialFormData);
    } catch (error) {
      // Stop loading
      setLoading(false);
      console.error("Error sending email:", error);
      notification.error({
        message: "Error",
        description: "Failed to send email.",
      });
    }
  };

  return (
    <div className="formContainer">
      <Fade direction={direction} triggerOnce>
        <Card className="filtersCard">
          <Row className="filterParentRow">
            <Col className="responsive-col" span={16}>
              <div className="leftHeading">
                Get Amazing First and Business Class Flight Deals
              </div>
              <Row className="leftChildRow">
                <Col span={12} className="leftChildCol">
                  <div className="inputDiv">
                    <label>Depart from</label>
                    <input
                      type="text"
                      name="departFrom"
                      value={formData.departFrom}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="inputDiv"
                      style={{ width: "46%", marginRight: 10 }}
                    >
                      <label>Leave On</label>
                      <input
                        type="date"
                        name="leaveOn"
                        value={formData.leaveOn}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="inputDiv" style={{ width: "50%" }}>
                      <label>Return</label>
                      <input
                        type="date"
                        name="returnOn"
                        value={formData.returnOn}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="inputDiv">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputDiv">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col span={12} className="leftChildCol">
                  <div className="inputDiv">
                    <label>Arrive at</label>
                    <input
                      type="text"
                      name="arriveAt"
                      value={formData.arriveAt}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="inputDiv"
                      style={{ width: "46%", marginRight: 10 }}
                    >
                      <label>Class</label>
                      <select
                        name="travelClass1"
                        value={formData.travelClass1}
                        onChange={handleChange}
                      >
                        <option value="Business">Business</option>
                        <option value="Economy">Economy</option>
                        <option value="First Class">First Class</option>
                      </select>
                    </div>
                    <div className="inputDiv" style={{ width: "50%" }}>
                      <label>Class</label>
                      <select
                        name="travelClass2"
                        value={formData.travelClass2}
                        onChange={handleChange}
                      >
                        <option value="Business">Business</option>
                        <option value="Economy">Economy</option>
                        <option value="First Class">First Class</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputDiv">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                    />
                  </div>
                  <div className="inputDiv">
                    <input
                      type="text"
                      name="comments"
                      placeholder="Comments"
                      value={formData.comments}
                      onChange={handleChange}
                      id="comments"
                    />
                  </div>
                </Col>
                <Col span={24}>
                  <div className="getPriceDiv">
                    <Button
                      type="default"
                      shape="round"
                      id="get-price"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? <Spin /> : "Get Price"}
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
              <p style={{ fontWeight: "600", color: "#4062BB" }}>
                Why Work with Us?
              </p>
              <ul style={{ fontSize: 16, fontWeight: "normal" }}>
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
                  marginTop: "35%",
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
      <Modal
        title="Success"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>
          Your request is being submitted successfully. We will inform you
          shortly.
        </p>
      </Modal>
    </div>
  );
}

export default FlightBookingForm;
