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
            <Col lg={6} md={6} sm={24} xs={24}>
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="110px"
                  height="50px"
                />
              </LogoContainer>
              <Para>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              </Para>
            </Col>
            <Col lg={4} md={4} sm={24} xs={24}>
              <Title>{t("Service")}</Title>
              <Large to="/">{t("Business Flights")}</Large>
              <Large to="/">{t("Holiday Offers")}</Large>
              <Large to="/">{t("Airline Partners")}</Large>
              <Large to="/">{t("Travel Blog")}</Large>
            </Col>
            <Col lg={4} md={4} sm={24} xs={24}>
              <Title>{t("Quick Links")}</Title>
              <Large to="/">{t("Home")}</Large>
              <Large to="/contact">{t("Contact")}</Large>
              <Large to="/about">{t("About Us")}</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <Title>Copyright NXTFlights</Title>
            <FooterContainer>
              <FmdGoodOutlined style={{ color: "#1E515F" }} />
              <p style={{ fontSize: 10, color: "#fff", marginTop: "8px" }}>
                8819 Ohio St. South Gate, CA 90280
              </p>
              <EmailOutlinedIcon style={{ color: "#1E515F" }} />
              <p style={{ fontSize: 10, color: "#fff", marginTop: "8px" }}>
                Nxtflights@hello.com
              </p>
              <LocalPhoneOutlinedIcon style={{ color: "#1E515F" }} />
              <p style={{ fontSize: 10, color: "#fff", marginTop: "8px" }}>+1 222-333-444</p>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
