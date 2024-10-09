import { Fade } from "react-awesome-reveal";
import SpecialOffersContent from "../../content/SpecialOffers.json";
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
    dots: true,
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
            <div>
              <SliderImage
                src="https://picsum.photos/id/237/1448/400"
                alt="1"
              />
            </div>
            <div>
              <SliderImage
                src="https://picsum.photos/id/238/1448/400"
                alt="2"
              />
            </div>
            <div>
              <SliderImage
                src="https://picsum.photos/id/239/1448/400"
                alt="3"
              />
            </div>
            <div>
              <SliderImage
                src="https://picsum.photos/id/240/1448/400"
                alt="4"
              />
            </div>
            <div>
              <SliderImage
                src="https://picsum.photos/id/241/1448/400"
                alt="5"
              />
            </div>
            <div>
              <SliderImage
                src="https://picsum.photos/id/242/1448/400"
                alt="6"
              />
            </div>
          </Slider>
        </SliderContainer>
      </SpecialOffersSection>
    </Fade>
  );
};

export default SpecialOffers;
