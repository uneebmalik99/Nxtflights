import { Fade } from "react-awesome-reveal";
import { FlightBookingFormProps } from "./types";
import "./FlightBookingForm.css";
import { Button, Card, Col, Row, Spin, notification, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { CheckCircleOutlined } from "@mui/icons-material";

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
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/flight-request`,
        formData
      );
      setLoading(false);
      setIsModalVisible(true);
      notification.success({
        message: "Success",
        description: "Email sent successfully.",
      });
      setFormData(initialFormData);
    } catch (error) {
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
                Cheap First and Business Class Flights to Dubai
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
            <Col span={8} id="rightCol">
              <div className="rightContent">
                {/* <p style={{ fontWeight: "600", color: "#4062BB" }}>
                  Why Work with Us?
                </p> */}
                <ul
                  style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    color: "#000",
                    marginTop: "3rem",
                    lineHeight: "25px",
                    letterSpacing: "0.5px",
                    paddingTop: "10px",
                  }}
                >
                  <li>
                    Call our Uk Office 7 days a week between 9:00 AM - 8:00 PM
                  </li>
                  <li>Experienced, friendly staff</li>
                  <li>Easy booking process</li>
                </ul>
                <div className="subscribeSection">
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "19.5px",
                      fontWeight: "400",
                      color: "rgba(0, 0, 1)",
                      textAlign: "left",
                      alignSelf: "center",
                      marginLeft: "15px",
                    }}
                  >
                    Subscribe here for our newsletter
                  </p>
                  <Button
                    style={{
                      backgroundColor: "#3F61BA",
                      width: "239px",
                      height: "43px",
                      marginLeft: "5rem",
                    }}
                    type="primary"
                    shape="round"
                    className="subscribeButton"
                  >
                    Subscribe
                  </Button>
                </div>
                <p
                  style={{
                    borderTop: "1px dotted black",
                    marginTop: 20,
                    paddingTop: 10,
                    paddingBottom: "10px",
                    fontSize: 14,
                    color: "#000000",
                    lineHeight: "17.07px",
                    letterSpacing: "3px",
                    fontWeight: "400",
                    gap: "10px",
                  }}
                >
                  Please see our privacy policy and terms & conditions here.
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Fade>
      <Modal
        className="custom-modal"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        closeIcon={<span className="close-icon">×</span>}
      >
        <div className="modal-content">
          <CheckCircleOutlined className="success-icon" />
          <p className="success-message">
            Your request has been submitted successfully.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default FlightBookingForm;
