import { useRef, useEffect, useState } from "react";
import { Row, Col, Drawer, Dropdown } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { CaretDownFilled } from "@ant-design/icons";
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
import { Input } from "antd";
import type { InputRef } from "antd";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const location = useLocation();

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Ref for the antd Input element (note: InputRef is used here)
  const searchInputRef = useRef<InputRef | null>(null);

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
      "Japan"
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
      "Dubai",
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
      "USA",
      "Toronto",
      "Vancouver",
      "Washington, D.C.",
      "Winnipeg",
    ],
  };

  const history = useHistory();

  const handleNavigation = (destination: string) => {
    setSearchVisible(false); // close the search bar after clicking
    history.push(`/country/${destination.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const DestinationsMenu = () => (
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

  const allCities = Object.values(destinations).flat();
  const filteredCities = allCities.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close the dropdown when clicking outside the input/suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current?.input &&
        !searchInputRef.current.input.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".autocomplete-suggestions") // ignore clicks inside suggestions
      ) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle input change properly
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Make sure this updates with every keystroke
  };

  // Open the search bar when clicking the search button and focus on input
  const toggleSearch = () => {
    setSearchVisible(true);
    setSearchQuery(""); // Clear the query when search is toggled

    // Focus on the input field after making it visible
    setTimeout(() => {
      searchInputRef.current?.focus(); // Ensure the input gains focus
    }, 0);
  };

  console.log(searchQuery, filteredCities);

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


        {/* <h1 style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignSelf: 'center' }} className="homePageHeading">
          Coming Soon
        </h1> */}
        <div style={{ height: 60 }}>
          <h1 style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            padding: 0
          }} className="homePageHeading">
            Coming Soon
          </h1>
        </div>

        {/* <CustomNavLinkSmall
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
              {t("Destinations")} <CaretDownFilled />
            </Span>
          </CustomNavLinkSmall>
        </Dropdown> */}

        {/* <CustomNavLinkSmall as={Link} to="/business-class-flights">
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
        </CustomNavLinkSmall> */}

        {/* Search Button */}
        {/* <CustomNavLinkSmall onClick={toggleSearch}>
          <Span>
            <SearchBtn variant={searchBtnVariant}>
              <span style={{ marginRight: "10px" }}>{t("Search")}</span>
              <SearchIcon fontSize="small" />
            </SearchBtn>
          </Span>
        </CustomNavLinkSmall> */}

        {/* Full-length Search Input */}
        {searchVisible && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
            }}
          >
            <Input
              ref={searchInputRef} // Attach ref using antd's InputRef type
              value={searchQuery} // Ensure the input value is tied to searchQuery state
              onChange={handleSearchChange} // Properly handle changes to input
              placeholder="Search cities..."
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              allowClear
            />

            {/* Autocomplete Suggestions */}
            {filteredCities.length > 0 && (
              <div
                className="autocomplete-suggestions"
                style={{
                  background: "white",
                  maxHeight: "300px",
                  overflowY: "scroll",
                  position: "absolute",
                  width: "100%",
                  zIndex: 10000,
                  textAlign: "left",
                }}
              >
                {filteredCities.map((city) => (
                  <div
                    key={city}
                    className="autocomplete-suggestions"
                    onClick={() => handleNavigation(city)} // Ensure the click navigates first
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <HeaderSection id="header">
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            {/* <SvgIcon src="logo.png" width="110px" height="50px" /> */}
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
