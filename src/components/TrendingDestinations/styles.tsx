import styled from "styled-components";

export const TrendingDestinationsSection = styled("section")`
  text-align: left;
  padding: 40px 40px 0px 0px;

  @media screen and (max-width: 1024px) {
    padding: 30px 0;
  }
`;

export const DestinationsContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 47px;
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
  font-weight: bold;
  color: #000;
`;

export const DestinationDescription = styled("p")`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

export const BackgroundImage = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: -150px;
  margin-bottom: -100px;
`