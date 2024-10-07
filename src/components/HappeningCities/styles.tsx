import styled from "styled-components";

export const GlobeImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: -180px;
`;

export const SubHeading = styled.h2`
  font-size: 15px;
  margin-bottom: 10px;
  color: #94a1ac;
  text-transform: uppercase;
`;

export const Heading = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const BenefitItem = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 5px 0;
  color: #333;
`;

export const Description = styled.p`
  color: #848484;
  font-size: 14px;
  color: #666;
`;
