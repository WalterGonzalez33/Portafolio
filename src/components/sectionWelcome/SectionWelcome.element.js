import styled from "styled-components";
import { FlexContainer } from "../../style/elements/flexContainer.element";


export const Container = styled.div`
    width: 100%;
    padding: 10px;
    background-color: var(--bg_color_primary);
    ${FlexContainer}
    clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 88%, 74% 88%, 48% 100%, 19% 91%, 0 100%, 0% 35%, 0 0);

    @media screen and (max-width: 1000px){
        clip-path: none;
    }
`

export const DescriptionTextContainer = styled.div`
    ${FlexContainer}
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    padding: 10px;
    margin-bottom:30px ;
`
export const DescriptionText = styled.p`
    padding: 0.5rem;
    font-size: 1.9rem;
    color: white;
    margin:0;
`

// svg container

export const SvgContainer = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 10px;
    margin-bottom:30px ;

    img{
        width: 100%;
        height: 100%;
    }
`

// media query

