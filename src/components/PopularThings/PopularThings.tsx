import React from "react";
import "../PopularThings/PopularThings.css";
import { Row, Col } from "antd";

const PopularThings: React.FC = () => {
  return (
    <>
      <h2>Popular things to do</h2>
      <Row>
        <Col>
          <img src="../../assets/cruise.png" alt="Cruising" />
        </Col>
        <Col>
          <img src="../../assets/beach.png" alt="Beach" />
        </Col>
        <Col>
          <img src="../../assets/citytour.png" alt="City Tour" />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="../../assets/museum.png" alt="Museum" />
        </Col>
        <Col>
          <img src="../../assets/hiking.png" alt="Hiking" />
        </Col>
        <Col>
          <img src="../../assets/food.png" alt="Food" />
        </Col>
      </Row>
    </>
  );
};

export default PopularThings;
