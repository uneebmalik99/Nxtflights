import { useState } from "react";
import { Row, Col, Drawer, Dropdown, Menu as AntMenu } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import SearchIcon from "@mui/icons-material/Search";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  Menu,
  SearchBtn,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };

  const history = useHistory();

  const handleNavigate = (path: string) => {
    history.push(path);
  };

  const destinationsMenu = (
    <AntMenu>
      <AntMenu.Item onClick={() => scrollTo("destination1")}>
        {t("Destination 1")}
      </AntMenu.Item>
      <AntMenu.SubMenu title={t("Destination 2")}>
        <AntMenu.Item onClick={() => scrollTo("destination2-1")}>
          {t("Destination 2-1")}
        </AntMenu.Item>
        <AntMenu.Item onClick={() => scrollTo("destination2-2")}>
          {t("Destination 2-2")}
        </AntMenu.Item>
      </AntMenu.SubMenu>
      <AntMenu.SubMenu title={t("Destination 3")}>
        <AntMenu.Item onClick={() => scrollTo("destination3-1")}>
          {t("Destination 3-1")}
        </AntMenu.Item>
        <AntMenu.Item onClick={() => scrollTo("destination3-2")}>
          {t("Destination 3-2")}
        </AntMenu.Item>
      </AntMenu.SubMenu>
    </AntMenu>
  );

  const holidayOffersMenu = (
    <AntMenu>
      <AntMenu.Item onClick={() => handleNavigate("/holiday-offer")}>
        {t("Holiday Offer")}
      </AntMenu.Item>
      <AntMenu.SubMenu title={t("Holiday Offer 2")}>
        <AntMenu.Item onClick={() => handleNavigate("offer2-1")}>
          {t("Holiday Offer 2-1")}
        </AntMenu.Item>
        <AntMenu.Item onClick={() => handleNavigate("offer2-2")}>
          {t("Holiday Offer 2-2")}
        </AntMenu.Item>
      </AntMenu.SubMenu>
      <AntMenu.SubMenu title={t("Holiday Offer 3")}>
        <AntMenu.Item onClick={() => handleNavigate("offer3-1")}>
          {t("Holiday Offer 3-1")}
        </AntMenu.Item>
        <AntMenu.Item onClick={() => handleNavigate("offer3-2")}>
          {t("Holiday Offer 3-2")}
        </AntMenu.Item>
      </AntMenu.SubMenu>
    </AntMenu>
  );

  const ourAirlinesPartnersMenu = (
    <AntMenu>
      <AntMenu.Item onClick={() => scrollTo("offer1")}>
        {t("Airline 1")}
      </AntMenu.Item>
      <AntMenu.SubMenu title={t("Airline 2")}>
        <AntMenu.Item onClick={() => scrollTo("offer2-1")}>
          {t("Airline 2-1")}
        </AntMenu.Item>
        <AntMenu.Item onClick={() => scrollTo("offer2-2")}>
          {t("Airline 2-2")}
        </AntMenu.Item>
      </AntMenu.SubMenu>
      <AntMenu.SubMenu title={t("Airline 3")}>
        <AntMenu.Item onClick={() => scrollTo("offer3-1")}>
          {t("Airline 3-1")}
        </AntMenu.Item>
        <AntMenu.Item onClick={() => scrollTo("offer3-2")}>
          {t("Airline 3-2")}
        </AntMenu.Item>
      </AntMenu.SubMenu>
    </AntMenu>
  );

  const handleDropdownVisibleChange = (key: string, visible: boolean) => {
    setOpenDropdown(visible ? key : null);
  };

  const MenuItem = () => {
    const Routes = ["/", "/holiday-offer"];
    const searchBtnVariant = Routes.includes(location.pathname)
      ? "home"
      : "other";
    return (
      <>
        <CustomNavLinkSmall as={Link} to="/">
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>

        <Dropdown
          overlay={destinationsMenu}
          trigger={["hover"]}
          placement="bottom"
          onVisibleChange={(visible) =>
            handleDropdownVisibleChange("destinations", visible)
          }
        >
          <CustomNavLinkSmall>
            <Span>
              {t("Destinations")}{" "}
              {openDropdown === "destinations" ? (
                <CaretUpFilled />
              ) : (
                <CaretDownFilled />
              )}
            </Span>
          </CustomNavLinkSmall>
        </Dropdown>

        <CustomNavLinkSmall as={Link} to="/">
          <Span>{t("Business Class Flights")}</Span>
        </CustomNavLinkSmall>

        <Dropdown
          overlay={holidayOffersMenu}
          trigger={["hover"]}
          placement="bottom"
          onVisibleChange={(visible) =>
            handleDropdownVisibleChange("holidayOffers", visible)
          }
        >
          <CustomNavLinkSmall>
            <Span>
              {t("Holiday Offers")}{" "}
              {openDropdown === "holidayOffers" ? (
                <CaretUpFilled />
              ) : (
                <CaretDownFilled />
              )}
            </Span>
          </CustomNavLinkSmall>
        </Dropdown>

        <Dropdown
          overlay={ourAirlinesPartnersMenu}
          trigger={["hover"]}
          placement="bottomLeft"
          onVisibleChange={(visible) =>
            handleDropdownVisibleChange("ourAirlinePartners", visible)
          }
        >
          <CustomNavLinkSmall>
            <Span>
              {t("Our Airline Partners")}{" "}
              {openDropdown === "ourAirlinePartners" ? (
                <CaretUpFilled />
              ) : (
                <CaretDownFilled />
              )}
            </Span>
          </CustomNavLinkSmall>
        </Dropdown>

        <CustomNavLinkSmall style={{ width: "180px" }} as={Link} to="/">
          <Span>
            <SearchBtn variant={searchBtnVariant}>
              <span style={{ marginRight: "10px" }}>{t("Search")}</span>{" "}
              <SearchIcon fontSize="small" />
            </SearchBtn>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection id="header">
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width="110px" height="50px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
