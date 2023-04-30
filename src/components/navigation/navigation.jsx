import { Outlet } from "react-router-dom"
import { StyledList, StyledNavLink, StyledNav } from "./StyledNavigation"

export const Navigation = () => {
    return (
        <StyledNav>
            <StyledList>
                <li>
                    <StyledNavLink to="/">Home</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="add">Add Contact</StyledNavLink>
                </li>
            </StyledList>
            <Outlet/>
        </StyledNav> 
    )
}