import { Fade } from "react-awesome-reveal";
import SpecialOffersContent from "./SpecialOffers.json";
import {
  SpecialOffersHeading,
  SpecialOffersSection,
  SliderContainer,
  SliderImage,
} from "../SpecialOffers/styles";
import { SpecialOffersProps } from "./types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpecialOffers = ({ direction }: SpecialOffersProps) => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Fade direction={direction} triggerOnce>
      <SpecialOffersSection>
        <SpecialOffersHeading>
          {SpecialOffersContent.title}
        </SpecialOffersHeading>

        <SliderContainer>
          <Slider {...settings}>
            {SpecialOffersContent.slides.map((slide, index) => (
              <div>
                <SliderImage src={slide.imageUrl} />
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </SpecialOffersSection>
    </Fade>
  );
};

export default SpecialOffers;
