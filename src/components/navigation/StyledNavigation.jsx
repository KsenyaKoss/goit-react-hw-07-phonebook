import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
   
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

`

export const StyledNavLink = styled(NavLink)`
    color: black;
    padding: 20px, 30px;
  font-size: 30px;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const StyledNav = styled.nav`
    padding: 20px, 30px;
`