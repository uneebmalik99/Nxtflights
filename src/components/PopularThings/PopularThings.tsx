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
          <Col span={7} style={{ padding: 10 }}>
            <Row>
              <div
                style={{
                  height: "215px",
                  width: "90%",
                  marginBottom: 10,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src="../../assets/cruise.webp"
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
                    fontWeight: 600,
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
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src="../../assets/museum.webp"
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
                    fontWeight: 600,
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
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src="../../assets/beach.webp"
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
                    fontWeight: 600,
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
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src="../../assets/hiking.webp"
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
                      fontWeight: 600,
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
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src="../../assets/food.webp"
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
                      fontWeight: 600,
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
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="../../assets/citytour.webp"
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
                  fontWeight: 600,
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
