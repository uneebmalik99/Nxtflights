import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import {  FmdGoodOutlined } from "@mui/icons-material";

interface SocialLinkProps {
  href: string;
  src: string;
}

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="start">
            <Col lg={6} md={6} sm={12} xs={12}>
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
            <Col lg={4} md={4} sm={12} xs={12}>
              <Title>{t("Service")}</Title>
              <Large to="/">{t("Business Flights")}</Large>
              <Large to="/">{t("Holiday Offers")}</Large>
              <Large to="/">{t("Airline Partners")}</Large>
              <Large to="/">{t("Travel Blog")}</Large>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
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
            <Title>CopyRight NXTFlights</Title>
            <FooterContainer>
              <FmdGoodOutlined />
              8819 Ohio St. South Gate, CA 90280
              <FmdGoodOutlined />
              8819 Ohio St. South Gate, CA 90280
              <FmdGoodOutlined />
              8819 Ohio St. South Gate, CA 90280
              <FmdGoodOutlined />
              8819 Ohio St. South Gate, CA 90280
              {/* <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              /> */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
