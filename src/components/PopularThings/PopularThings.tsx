import React from "react";
import "../PopularThings/PopularThings.css";
import { Row, Col } from "antd";
import { PopularThingsProps } from "./types";

function PopularThings({ direction }: PopularThingsProps) {
  return (
    <>
      <div className="PopularThingSection">
        <h2 id="popular_h1">Popular things to do</h2>
        <Row>
          <Col className="imgCol">
            <img
              src="../../assets/cruise.png"
              alt="Cruising"
              className="popularThingsImgs"
            />
          </Col>
          <Col className="imgCol">
            <img
              src="../../assets/beach.png"
              alt="Beach"
              className="popularThingsImgs"
            />
          </Col>
          <Col className="imgCol">
            <img
              src="../../assets/citytour.png"
              alt="City Tour"
              className="popularThingsImgs"
            />
          </Col>
        </Row>
        <Row>
          <Col className="imgCol">
            <img
              src="../../assets/museum.png"
              alt="Museum"
              className="popularThingsImgs"
            />
          </Col>
          <Col className="imgCol">
            <img
              src="../../assets/hiking.png"
              alt="Hiking"
              className="popularThingsImgs"
            />
          </Col>
          <Col className="imgCol">
            <img
              src="../../assets/food.png"
              alt="Food"
              className="popularThingsImgs"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PopularThings;
