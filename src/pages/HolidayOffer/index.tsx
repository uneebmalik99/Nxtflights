import { Button, Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import "./HolidayOffers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

const HolidayOffers = () => {
  const history = useHistory();

  const destinationsData = [
    { title: "Dubai", duration: "0-7", price: "2000" },
    { title: "Singapore", duration: "8-14", price: "2500" },
    { title: "Switzerland", duration: "0-7", price: "3000" },
    { title: "Paris", duration: "8-14", price: "2800" },
    { title: "New York", duration: "8-14", price: "4000" },
    { title: "Tokyo", duration: "0-7", price: "3500" },
    { title: "Sydney", duration: "8-14", price: "3200" },
    { title: "Rome", duration: "0-7", price: "2700" },
    { title: "Bangkok", duration: "0-7", price: "1800" },
  ];

  const slides = [
    {
      image: "../../../assets/HolidayOffer.webp",
      title: "Dubai",
      description: "Amazing holiday offers for Dubai.",
      buttonText: "View Offer",
    },
    {
      image: "../../../assets/HolidayOffer.webp",
      title: "Singapore",
      description: "Enjoy luxurious holidays in Singapore.",
      buttonText: "View Offer",
    },
    {
      image: "../../../assets/HolidayOffer.webp",
      title: "Switzerland",
      description: "Explore Switzerland's scenic beauty.",
      buttonText: "View Offer",
    },
  ];

  // State management
  const [visibleDestinations, setVisibleDestinations] = useState(6); // Initially show 6 destinations
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinationsData);

  // Function to filter the destinations
  const filterDestinations = () => {
    let filtered = destinationsData;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((destination) =>
        destination.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by destination
    if (selectedDestination) {
      filtered = filtered.filter(
        (destination) => destination.title === selectedDestination
      );
    }

    // Filter by duration
    if (selectedDuration) {
      filtered = filtered.filter(
        (destination) => destination.duration === selectedDuration
      );
    }

    // Filter by price
    if (selectedPrice) {
      filtered = filtered.filter(
        (destination) => parseInt(destination.price) <= parseInt(selectedPrice)
      );
    }

    setFilteredDestinations(filtered); // Update the filtered destinations
  };

  // Function to reset filters
  const handleReset = () => {
    setSelectedDestination("");
    setSelectedDuration("");
    setSelectedPrice("");
    setFilteredDestinations(destinationsData); // Reset to original list
  };

  // Load more posts functionality
  const loadMorePosts = () => {
    setVisibleDestinations(
      (prevVisibleDestinations) => prevVisibleDestinations + 6
    );
  };

  // UseEffect to filter destinations whenever a filter state changes
  useEffect(() => {
    filterDestinations();
  }, [selectedDestination, selectedDuration, selectedPrice, searchTerm]);

  return (
    <>
      {/* Swiper Slider */}
      <div className="holidayOfferContainer">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slideContent">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slideImage"
                />
                <div className="textOverlay">
                  <h1 className="headingHoliday">Holiday Offers</h1>
                  <h1 className="title">{slide.title}</h1>
                  <p className="description">{slide.description}</p>
                  <button className="offerBtn">{slide.buttonText}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Filter and Search Section */}
      <div className="filter-wrapper">
        <div className="filter-container">
          {/* Destination Filter */}
          <div className="filter-item">
            <label>Where to?</label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
            >
              <option value="">All</option>
              <option value="Dubai">Dubai</option>
              <option value="Singapore">Singapore</option>
              <option value="Switzerland">Switzerland</option>
            </select>
          </div>

          {/* Duration Filter */}
          <div className="filter-item">
            <label>Duration</label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              <option value="">All</option>
              <option value="0-7">0-7 Nights</option>
              <option value="8-14">8-14 Nights</option>
            </select>
          </div>

          {/* Price Filter */}
          <div className="filter-item">
            <label>Price</label>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="">All</option>
              <option value="2000">Up to $2000</option>
              <option value="3000">Up to $3000</option>
            </select>
          </div>

          <button className="filter-button reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      {/* Display Filtered Destinations */}
      <main className="offers">
        <Row gutter={[16, 16]} className="customRow">
          {filteredDestinations
            .slice(0, visibleDestinations)
            .map((destination, index) => (
              <Col className="customCol" key={index} span={8}>
                <div
                  className="offer-card"
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                >
                  <img
                    src={`https://picsum.photos/1600/900?random=${encodeURIComponent(
                      destination.title
                    )}`}
                    alt={destination.title}
                    style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
                  />
                  <div style={{ padding: "10px" }}>
                    <h3>{destination.title}</h3>
                    <p>
                      {destination.duration === "0-7"
                        ? "5 nights stay (including return ticket)"
                        : "7 nights 6 days trip to destination"}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <Button
                        type="default"
                        shape="round"
                        className="viewBtn"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          history.push(`/offer-detail/${destination.title}`);
                        }}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </main>

      {/* Load More Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 0px 100px 0px",
        }}
      >
        {visibleDestinations < filteredDestinations.length && (
          <Button
            type="default"
            style={{
              color: "#696A75",
              borderColor: "rgb(216 215 223)",
              height: "45px",
              width: "150px",
              borderRadius: "8px",
            }}
            onClick={loadMorePosts}
          >
            View More
          </Button>
        )}
      </div>
    </>
  );
};

export default HolidayOffers;
