import { useParams } from "react-router-dom";
import "./OfferDetail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destinationsData = {
  dubai: {
    description: "5 nights stay (including return ticket)",
    imageUrl: "../../assets/offer_1.png",
    para_1:
      "From boutique hotels to all inclusive resorts, the team at Just Fly Business have the perfect escape for you… and all at fantastic prices! Our relationship with these properties means that we can offer excellent value, whether it’s room upgrades, in-resort credit, free nights, or simply a great deal.",
    para_2:
      "No detail is too small so if it’s a restaurant recommendation, help booking a spa treatment, or celebrating a special occasion, we are here to turn your holiday into the experience of a lifetime.",
  },
  singapore: {
    description: "7 night 6 days trip to Singapore",
    imageUrl: "../../assets/offer_1.png",
    para_1:
      "From boutique hotels to all inclusive resorts, the team at Just Fly Business have the perfect escape for you… and all at fantastic prices! Our relationship with these properties means that we can offer excellent value, whether it’s room upgrades, in-resort credit, free nights, or simply a great deal.",
    para_2:
      "No detail is too small so if it’s a restaurant recommendation, help booking a spa treatment, or celebrating a special occasion, we are here to turn your holiday into the experience of a lifetime.",
  },
  switzerland: {
    description: "5 nights stay (including return ticket)",
    imageUrl: "../../assets/offer_1.png",
    para_1:
      "From boutique hotels to all inclusive resorts, the team at Just Fly Business have the perfect escape for you… and all at fantastic prices! Our relationship with these properties means that we can offer excellent value, whether it’s room upgrades, in-resort credit, free nights, or simply a great deal.",
    para_2:
      "No detail is too small so if it’s a restaurant recommendation, help booking a spa treatment, or celebrating a special occasion, we are here to turn your holiday into the experience of a lifetime.",
  },
};

const OfferDetail = () => {
  const { destination } = useParams();
  const offer = destinationsData[destination.toLowerCase()];

  if (!offer) {
    return <div>Offer not found!</div>;
  }

  function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  console.log(destination);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: "30px",
    className: "center",
    centerMode: true,
  };

  return (
    <>
      <div className="OfferDetailBg"></div>
      <div style={{ padding: 50 }}>
        <h2>{toSentenceCase(destination)}</h2>
        <p>{offer.para_1}</p>
        <br />
        <p>{offer.para_2}</p>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src={offer.imageUrl}
                alt={destination}
                width={350}
                height={200}
              />
            </div>
            <div>
              <img
                src={offer.imageUrl}
                alt={destination}
                width={350}
                height={200}
              />
            </div>
            <div>
              <img
                src={offer.imageUrl}
                alt={destination}
                width={350}
                height={200}
              />
            </div>
            <div>
              <img
                src={offer.imageUrl}
                alt={destination}
                width={350}
                height={200}
              />
            </div>
          </Slider>
        </div>
        <div className="container">
          <div className="card special-offer">
            <div className="header">Special Offer</div>
            <div className="content">
              <p>
                Upgrade to Fountain View <br />
                Suite from extra <strong>$2000</strong>
              </p>
              <p>
                4 Nights from <strong>$200 pp</strong>
                <br />
                (inc. flights)
              </p>
              <h3>Room Only</h3>
              <p>
                Available
                <br />
                6th Jan 2025 – 31st Mar 2025
              </p>
              <button className="get-price">Get Price</button>
            </div>
          </div>
          <div className="card special-offer">
            <div className="header">Other Offers</div>
            <div className="content">
              <p>
                Call us for alternative dates, duration <br /> or board basis.
              </p>
              <div className="phone-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#4062BB"
                  width="50px"
                  height="50px"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <p className="phone-number">+91 111 222 333</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferDetail;
