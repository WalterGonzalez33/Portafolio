import styled from "styled-components";
import { FlexContainer } from "../../style/elements/flexContainer.element";


export const TooltipContainer = styled.div`
    position: absolute;
    padding: 10px;
    left: ${({x}) => x}px;
    top:${({y}) => y}px;
    width: 100%;
    max-width: 300px;
    background-color: rgba(0,0,0,.5);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    border: solid 5px black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media screen and (max-width: 600px) {
        max-width: 90%;
        margin: auto;
    }


    &::after{
        content: '';
        display: inline-block;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid rgba(0,0,0);
        position: absolute;
        bottom: -20px;
        left: calc(50% - 20px);
    }
`
// text header

export const TextHeader = styled.h3`
    font-size: 1.5rem;
    color: ${({color}) => color};
    width: 100%;
    text-align: center;
`


