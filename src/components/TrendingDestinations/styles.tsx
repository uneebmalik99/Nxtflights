import styled from "styled-components";

export const TrendingDestinationsSection = styled("section")`
  text-align: left;
  padding: 40px 40px 0px 0px;

  @media screen and (max-width: 1024px) {
    padding: 30px 0;
  }
`;

export const TrendingDestinationsHeading = styled("h2")`
  color: #333;
  font-size: 40px;
  padding-left: 70px;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    padding-left: 0px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
    padding-left: 0px;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
    padding-left: 0px;
  }
`;

export const DestinationsContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: 20px;
`;

export const DestinationItem = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

export const DestinationImage = styled("img")`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DestinationTitle = styled("p")`
  margin: 10px 0 5px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

export const DestinationDescription = styled("p")`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;

export const BackgroundImage = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: -150px;
  margin-bottom: -100px;
`;
