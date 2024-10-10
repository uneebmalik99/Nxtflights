import styled from "styled-components";

export const SpecialOffersSection = styled("section")`
  text-align: left;
  padding: 80px;
  height: 700px;
  background-color: #ebebeb;

  @media screen and (max-width: 768px) {
    padding: 30px;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
    height: auto;
  }

  @media screen and (max-width: 320px) {
    padding: 10px;
    height: auto;
  }
`;

export const SpecialOffersHeading = styled("h2")`
  color: #333;
  font-size: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
    
`;

export const SliderContainer = styled("div")`
  .slick-slider {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const SliderImage = styled("img")`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 15px;

  @media screen and (max-width: 1024px) {
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    height: 250px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;
