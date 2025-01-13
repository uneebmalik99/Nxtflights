import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FooterSection,
  Title,
  Extra,
  LogoContainer,
  Para,
  Large,
  FooterContainer,
} from "./styles";
import { FmdGoodOutlined } from "@mui/icons-material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="start">
            <Col lg={10} md={6} sm={24} xs={24}>
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="110px"
                  height="50px"
                />
              </LogoContainer>
              <Para>
                NXT Flights offering comprehensive travel solutions with competitive pricing across 80+ airlines and 500+ suppliers worldwide. Providing 24/7 customer support, personalized itineraries, and seamless booking experiences for flights to over 5000 cities in 200+ countries
              </Para>
            </Col>
            <Col lg={7} md={4} sm={24} xs={24}>
              {/* <Title>{t("Service")}</Title>
              <Large to="/">{t("Business Flights")}</Large>
              <Large to="/">{t("Holiday Offers")}</Large>
              <Large to="/">{t("Airline Partners")}</Large>
              <Large to="/">{t("Travel Blog")}</Large> */}
            </Col>
            <Col lg={7} md={4} sm={24} xs={24}>
              <Title>{t("Quick Links")}</Title>
              <Large to="/">{t("Home")}</Large>
              <Large to="/contact">{t("Contact")}</Large>
              <Large to="/about">{t("About Us")}</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={false}>
          <Row
            justify="space-between"
            align="middle"
            style={{
              paddingTop: "3rem",
              borderTop: "1px solid #76AEFF",
              marginInline: 40,
            }}
          >
            <Title>Copyright NXTFlights</Title>
            <FooterContainer>
              <FmdGoodOutlined style={{ color: "#1E515F" }} />
              <p style={{ fontSize: 10, color: "#fff", marginTop: "8px" }}>
                8819 Ohio St. South Gate, CA 90280
              </p>
              <EmailOutlinedIcon style={{ color: "#1E515F" }} />
              <p style={{ fontSize: 10, color: "#fff", marginTop: "8px" }}>
                <a href="mailto:Nxtflights@hello.com" style={{ color: "#FFF" }}>
                  Nxtflights@hello.com
                </a>
              </p>
              <LocalPhoneOutlinedIcon style={{ color: "#1E515F" }} />
              <p style={{ fontSize: 10, color: "#fff", marginTop: "8px" }}>
                <a href="tel:+1 222-333-444" style={{ color: "#FFF" }}>
                  +1 222-333-444
                </a>
              </p>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
