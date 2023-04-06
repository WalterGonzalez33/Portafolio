import styled from "styled-components";
import { FlexContainer } from "../../style/elements/flexContainer.element";
import { RedLink } from "../../style/elements/RedLink.element";
import { SvgProps } from "../../style/elements/svg.element";


// component for the nab
export const NavContainer = styled.nav`
    ${FlexContainer}
    width: 100%;
    height: 60px;
    position: sticky;
    z-index:99;
    background-color: var(--color_black_primary);
    justify-content: space-between;
`;

// component for Logo page
export const LogoContainer = styled.div`
    width: 100px;
    height: 100%;
    ${FlexContainer}
    cursor: pointer;
`

// component for links

export const Redes = styled(RedLink)`
    display: inline-block;
    
    svg{
        ${SvgProps}
    }
`
// components for the table 

export const NavUl = styled.ul`
    margin: 0;
    height: 30px;
    ${FlexContainer}
    justify-content: space-around;
` 

export const NavLi = styled.li`
    list-style: none;
    margin-right: 2rem;
    height: 100%;
` 


// link nav

export const NavLink = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    cursor:pointer;
    transition: all .4s ease;

    &:hover{
        color: rgba(255,255,255, .7);
        transition: all .4s ease;
    }
`

// container for redes

export const RedesContainer = styled.div`
    padding: 10px;

    .redes{
        margin-right: 1.2rem;
    }
`