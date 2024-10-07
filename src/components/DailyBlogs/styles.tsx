import styled from "styled-components";

export const DailyBlogsSection = styled("section")`
  text-align: left;
  padding: 50px 40px;
  background-color: #ebebeb;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 320px) {
    padding: 10px 5px;
  }
`;

export const DailyBlogsTitle = styled("h2")`
  font-size: 40px;
  margin-bottom: 50px;
  color: #333;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 320px) {
    margin-bottom: 20px;
  }
`;
