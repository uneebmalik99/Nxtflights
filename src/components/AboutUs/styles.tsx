import styled from "styled-components";

export const AboutUsSection = styled("section")`
  text-align: left;
  padding: 80px 80px;

  @media screen and (max-width: 1024px) {
    padding: 30px 0;
  }
`;

export const AboutUsContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 47px;
`;
export const AboutTitle = styled("p")`
  margin: 10px 0 5px;
  font-size: 15px;
  color: #000;
`;

export const DestinationDescription = styled("p")`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;