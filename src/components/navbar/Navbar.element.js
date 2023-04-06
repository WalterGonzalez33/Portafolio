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
    justify-content: center;
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

// container for nav

export const NavWrapper = styled.div`
    ${FlexContainer}
    justify-content: space-between;
    width: 100%;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        padding: 10px;
    }
`

// container for links and redes

export const BarContainer = styled.div`
    ${FlexContainer}
    transition: all 1s ease;
    @media screen and (max-width: 1000px) {
        position: absolute;
        left: ${({active}) => active ? '0' : '-400%'};
        top: ${({active}) => active ? '60px' : '-400%'};
        transition: all 1s ease;
        flex-flow: column;
        justify-content: space-around;
        width: 100%;
        height: 80vh;
        background-color: var(--color_black_primary);
        border-bottom-right-radius: 50%;
    }
`
// components for the table 

export const NavUl = styled.ul`
    margin: 0;
    margin-right: 50px;
    height: 30px;
    ${FlexContainer}
    justify-content: space-around;

    @media screen and (max-width: 1000px) {
        flex-flow: column;
        width: 100%;
        height: 60%;
    }
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

// container for icon mobile 

export const IconMobile = styled.div`
    display: none;
    ${SvgProps}

    @media screen and (max-width: 1000px) {
        display: flex;
    }
`