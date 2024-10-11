import React from "react";
import "../PopularThings/PopularThings.css";
import { Row, Col } from "antd";
import { PopularThingsProps } from "./types";

function PopularThings({ direction }: PopularThingsProps) {
  return (
    <>
      <div className="PopularThingSection">
        <h2 id="popular_h1">Popular things to do</h2>
        {/* <Row>
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
        </Row> */}

        <Row>
          <Col span={7} style={{ padding: 10 }}>
            <Row>
              <div
                style={{
                  height: "215px",
                  width: "90%",
                  marginBottom: 10,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="../../assets/cruise.png"
                  alt="Cruising"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    margin: 0,
                    padding: "5px 10px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Crusing
                </p>
              </div>
            </Row>
            <Row>
              <div
                style={{
                  height: "215px",
                  width: "90%",
                  marginTop: 10,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="../../assets/museum.png"
                  alt="Museum"
                  style={{ objectFit: "fill" }}
                  width={"100%"}
                  height={"100%"}
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    margin: 0,
                    padding: "5px 10px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Museum Tour
                </p>
              </div>
            </Row>
          </Col>
          <Col span={8} style={{ padding: 10 }}>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  height: "215px",
                  width: "100%",
                  marginBottom: 10,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="../../assets/beach.png"
                  alt="Beach"
                  style={{ objectFit: "fill" }}
                  width={"100%"}
                  height={"100%"}
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    margin: 0,
                    padding: "5px 10px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Beach
                </p>
              </div>
            </Row>
            <Row
              style={{
                height: "215px",
                width: "100%",
                paddingBlock: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ width: "40%" }}>
                <div
                  style={{
                    height: "215px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="../../assets/hiking.png"
                    alt="Hiking"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    width={"100%"}
                    height={"100%"}
                  />
                  <p
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      margin: 0,
                      padding: "5px 10px",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Hiking
                  </p>
                </div>
              </Col>
              <Col style={{ width: "50%" }}>
                <div
                  style={{
                    height: "215px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="../../assets/food.png"
                    alt="Food"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    width={"100%"}
                    height={"100%"}
                  />
                  <p
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      margin: 0,
                      padding: "5px 10px",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Food
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            span={9}
            style={{
              padding: 10,
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "450px",
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="../../assets/citytour.png"
                alt="City Tour"
                style={{
                  objectFit: "cover",
                  alignSelf: "center",
                  borderRadius: "10px",
                }}
                width={"100%"}
                height={"100%"}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  margin: 0,
                  padding: "5px 10px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                City Tour
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PopularThings;
