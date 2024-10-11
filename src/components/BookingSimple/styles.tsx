import styled from "styled-components";

export const BookingSimpleSection = styled("section")`
  text-align: left;
  padding: 100px 40px;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }

  @media screen and (max-width: 320px) {
    padding: 20px 0;
  }
`;

export const BookingSimpleTitle = styled("h2")`
  font-size: 40px;
  margin-bottom: 50px;
  color: #333;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 320px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const BookingSimpleSubTitle = styled("h2")`
  font-size: 24px;
  margin-top: 50px;
  color: #000;
  font-weight: 600;
`;
