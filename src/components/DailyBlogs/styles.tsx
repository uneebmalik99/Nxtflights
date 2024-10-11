import styled from "styled-components";
import { Button } from "antd";

export const DailyBlogsSection = styled("section")`
  text-align: left;
  padding: 50px 90px;
  background-color: #ebebeb;

  @media screen and (max-width: 768px) {
    padding: 30px 30px;
  }
  @media screen and (max-width: 480px) {
    padding: 20px 30px;
  }
  @media screen and (max-width: 320px) {
    padding: 10px 10px;
  }
`;

export const DailyBlogsTitle = styled("h2")`
  font-size: 40px;
  margin-bottom: 50px;
  color: #333;
  font-weight: 600;

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

export const CustomButton = styled(Button)`
  &.customBtnClass {
    color: #696a75;
    border: 1px solid #696a75;
    padding: 7px 20px;
    border-radius: 7px;
    width: 150px;
    height: 50px;
  }
`;

export const StyledMetaTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #181a2a;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
`;

export const StyledMetaDescription = styled.span`
  font-size: 14px;
  color: #97989f;
`;