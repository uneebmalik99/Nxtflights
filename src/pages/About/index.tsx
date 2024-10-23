import { lazy } from "react";
import styles from "../About/About.module.css";
import { Col, Row } from "antd";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Container = lazy(() => import("../../common/Container"));

const About = () => {
  return (
    <>
      <ScrollToTop />
      <div className={styles.aboutContainer}>
        <h1 className={styles.pageName}>About Us</h1>
      </div>
      <Container border={false}>
        <div className={styles.topRow}>
          <div>
            <h3>What is NxtFlights</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, ligula sed condimentum fermentum, turpis urna pulvinar
              massa, et commodo dolor neque vitae nunc. Nulla facilisi. Duis
              laoreet, arcu non vulputate tincidunt, dui nunc ultricies mauris,
              et tempor est velit vitae mi. Donec lobortis, turpis in
              sollicitudin sagittis, velit velit semper neque, et scelerisque
              nisi velit non erat. Nulla facilisi.
            </p>
            <div className={styles.border_bottom}></div>
          </div>
          <img src="../../../assets/about_1.webp" alt="" />
        </div>
        <div className={styles.middleRow}>
          <img src="../../../assets/about_2.webp" alt="" id={styles.img_2} />
          <img src="../../../assets/about_3.webp" alt="" />
        </div>
        <div className={styles.facts}>
          <div className={styles.facts_desc}>
            <p id={styles.facts_heading}>Facts & Figures</p>
            <p>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas
            </p>
          </div>
          <div className={styles.facts_numbers}>
            <Row>
              <Col span={12}>
                <p id={styles.clients}>
                  10K <span>Happy Clients</span>
                </p>
              </Col>
              <Col span={12}>
                <p id={styles.airline}>
                  100 <span>Airline Partners</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p id={styles.members}>
                  300 <span>Team members</span>
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <Row
          className={styles.lastRow}
          style={{ marginBottom: "12%", gap: "50px" }}
        >
          <Col span={10} className={styles.lastCol}>
            <img
              id={styles.img_shadow}
              src="../../../assets/about_1.webp"
              alt=""
              style={{
                width: "85%",
                height: "100%",
              }}
            />
          </Col>
          <Col span={12} className={styles.lastCol}>
            <p id={styles.more_about}>More About Us</p>
            <p id={styles.more_about_desc}>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellu
            </p>
            <div className={styles.border_bottom}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
