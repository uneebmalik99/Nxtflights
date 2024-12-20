import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink).attrs({
  activeClassName: "active",
})`
  font-size: 12px;
  color: #333;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: #25addf;
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #25addf;
    /* text-underline-position: under; */
    /* text-decoration: rgb(255, 130, 92) wavy underline; */
  }
`;

export const SearchBtn = styled("button")<{ variant?: string }>`
  padding: 10px;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant === "home" &&
    `
    background-color: transparent;
    color: #fff;
  `}

  ${({ variant }) =>
    variant === "other" &&
    `
    border: 1px solid #4062BB;
    color: #4062BB;
  `}
`;

// Mega Menu Styles
export const MegaMenu = styled.div`
  display: flex;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.45) 7px 12px 7px;
`;

interface MenuItemProps {
  onClick: () => void;
  children: React.ReactNode; // This is necessary to accept children
}

export const Menuitem = styled.div<MenuItemProps>`
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Styled Link (if needed)
export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Styled Menu Icon
export const StyledMenuIcon = styled(MenuOutlined)`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #1890ff; /* You can adjust the hover color as needed */
  }
`;
