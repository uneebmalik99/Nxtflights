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
`;
