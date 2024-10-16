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

const { SubMenu } = AntMenu;

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const destinations: { [key: string]: string[] } = {
    Africa: [
      "Cape Town",
      "Durban",
      "Johannesburg",
      "Port Elizabeth",
      "Zanzibar",
    ],
    Asia: [
      "Bali",
      "Bangkok",
      "Beijing",
      "Delhi",
      "Hanoi",
      "Ho Chi Minh City",
      "Hong Kong",
      "Jakarta",
      "Koh Samui",
      "Krabi",
      "Kuala Lumpur",
      "Langkawi",
      "Manila",
      "Osaka",
      "Penang",
      "Phuket",
      "Seoul",
      "Shanghai",
      "Singapore",
      "Sri Lanka",
      "Taipei",
      "Thailand",
      "Tokyo",
    ],
    "Australasia & Pacific": [
      "Adelaide",
      "Alice Springs",
      "Auckland",
      "Australia",
      "Brisbane",
      "Cairns",
      "Christchurch",
      "Fiji ",
      "Melbourne",
      "New Zealand",
      "Perth ",
      "Sydney",
      "Wellington",
    ],
    "Caribbean & Mexico": [
      "Antigua",
      "Bahamas",
      "Barbados",
      "Cancun",
      "Cuba",
      "Dominican Republic",
      "Grenada",
      "Jamaica",
      "St Lucia",
      "The Caribbean",
      "Trinidad",
    ],
    "Indian Ocean": ["Maldives", "Mauritius", "Seychelles"],
    "Middle East": [
      "Abu Dhabi",
      "Bahrain",
      "Doha",
      "Jeddah",
      "Kuwait",
      "Muscat",
      "Riyadh",
    ],
    "North America": [
      "Atlanta",
      "Austin",
      "Baltimore",
      "Boston",
      "Calgary",
      "Canada",
      "Charlotte",
      "Chicago",
      "Dallas",
      "Denver",
      "Detroit",
      "Edmonton",
      "Hawaii",
      "Houston",
      "Las Vegas",
      "Los Angeles",
      "Memphis",
      "Miami",
      "Minneapolis",
      "Montreal",
      "Nashville",
      "New Orleans",
      "New York",
      "Orlando",
      "Ottawa",
      "Philadelphia",
      "Phoenix",
      "Portland",
      "Quebec",
      "Raleigh",
      "Salt Lake City",
      "San Diego",
      "San Francisco",
      "San Jose",
      "Seattle",
      "Tampa",
      "The USA",
      "Toronto",
      "Vancouver",
      "Washington, D.C.",
      "Winnipeg",
    ],
    "South & Central America": [
      "Buenos Aires",
      "Lima",
      "Rio de Janeiro",
      "Santiago",
      "Sao Paulo",
    ],
  };

  const history = useHistory();

  const handleNavigation = (destination: string) => {
    history.push(`/country/${destination.toLowerCase().replace(/\s+/g, "-")}`);
  };

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

  const DestinationsMenu = () => (
    <AntMenu mode="horizontal">
      {/* 
      <SubMenu title="Australasia & Pacific">

      </SubMenu>
      <SubMenu title="Caribbean & Mexico">
        <AntMenu.Item> Adelaide </AntMenu.Item>
        <AntMenu.Item> Alice Springs </AntMenu.Item>
        <AntMenu.Item> Auckland </AntMenu.Item>
        <AntMenu.Item> Australia </AntMenu.Item>
        <AntMenu.Item> Brisbane </AntMenu.Item>
        <AntMenu.Item> Cairns </AntMenu.Item>
        <AntMenu.Item> Christchurch </AntMenu.Item>
        <AntMenu.Item> Fiji </AntMenu.Item>
        <AntMenu.Item> Melbourne </AntMenu.Item>
        <AntMenu.Item> New Zealand </AntMenu.Item>
        <AntMenu.Item> Perth </AntMenu.Item>
        <AntMenu.Item> Sydney </AntMenu.Item>
        <AntMenu.Item> Wellington </AntMenu.Item>
      </SubMenu> */}

      {Object.entries(destinations).map(([region, cities]) => (
        <SubMenu key={region} title={region}>
          {cities.map((city) => (
            <AntMenu.Item key={city} onClick={() => handleNavigation(city)}>
              {city}
            </AntMenu.Item>
          ))}
        </SubMenu>
      ))}
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

  const MenuItem = () => {
    const Routes = [
      "/",
      "/holiday-offer",
      "/country/dubai",
      "/country/france",
      "/country/usa",
      "/country/greece",
      "/country/japan",
    ];
    const searchBtnVariant = Routes.includes(location.pathname)
      ? "home"
      : "other";
    return (
      <>
        <CustomNavLinkSmall
          as={Link}
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>

        <Dropdown overlay={<DestinationsMenu />} trigger={["click"]}>
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

        <CustomNavLinkSmall
          as={Link}
          to="/holiday-offer"
          className={location.pathname === "/holiday-offer" ? "active" : ""}
        >
          <Span>{t("Holiday Offers")}</Span>
        </CustomNavLinkSmall>

        <Dropdown overlay={ourAirlinesPartnersMenu} trigger={["click"]}>
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

        <CustomNavLinkSmall as={Link} to="/">
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
