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
  MegaMenu,
  Menuitem,
} from "./styles";

const { SubMenu } = AntMenu;

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const destinations: { [key: string]: string[] } = {
    Africa: [
      "Cape Town",
      "Durban",
      "Johannesburg",
      "Port Elizabeth",
      "Zanzibar",
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
    "South & Central America": [
      "Buenos Aires",
      "Lima",
      "Rio de Janeiro",
      "Santiago",
      "Sao Paulo",
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
  };

  const history = useHistory();

  const handleNavigation = (destination: string) => {
    history.push(`/country/${destination.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const DestinationsMenu = () => (
    // <AntMenu mode="horizontal">
    //   {Object.entries(destinations).map(([region, cities]) => (
    //     <SubMenu key={region} title={region}>
    //       {cities.map((city) => (
    //         <AntMenu.Item key={city} onClick={() => handleNavigation(city)}>
    //           {city}
    //         </AntMenu.Item>
    //       ))}
    //     </SubMenu>
    //   ))}
    // </AntMenu>

    <MegaMenu>
      {Object.entries(destinations).map(([region, cities]) => (
        <div key={region}>
          <h3 style={{ fontSize: 14 }}>{region}</h3>
          {cities.map((city) => (
            <Menuitem key={city} onClick={() => handleNavigation(city)}>
              {city}
            </Menuitem>
          ))}
        </div>
      ))}
    </MegaMenu>
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

        <Dropdown
          overlay={<DestinationsMenu />}
          overlayStyle={{ top: "60px", left: "50px", width: "95%" }}
          trigger={["hover"]}
          placement="bottom"
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

        <CustomNavLinkSmall as={Link} to="/business-class-flights">
          <Span>{t("Business Class Flights")}</Span>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall
          as={Link}
          to="/holiday-offer"
          className={location.pathname === "/holiday-offer" ? "active" : ""}
        >
          <Span>{t("Holiday Offers")}</Span>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall as={Link} to="/airlines">
          <Span>{t("Our Airline Partners")}</Span>
        </CustomNavLinkSmall>

        {/* <CustomNavLinkSmall as={Link} to="/">
          <Span>
            <SearchBtn variant={searchBtnVariant}>
              <span style={{ marginRight: "10px" }}>{t("Search")}</span>{" "}
              <SearchIcon fontSize="small" />
            </SearchBtn>
          </Span>
        </CustomNavLinkSmall> */}
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
