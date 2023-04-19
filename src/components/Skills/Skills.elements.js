import styled from "styled-components";
import { FlexContainer } from "../../style/elements/flexContainer.element";



export const SkillsContainer = styled.section`
    ${FlexContainer}
    width: 100%;
`


export const SkillsWrapper = styled.div`
    ${FlexContainer}
    justify-content: space-around;
    margin: auto;
    width: 100%;
    height: 500px;


`

export const IconSkill = styled.div`
    font-size: 180px;
    cursor: pointer;
    transition: all .5s ease;

    &.html{
        &:hover{
            color: #e5622a;
        }
    }
    &.css{
        &:hover{
            color:#0b6daf;
        }
    }
    &.js{
        &:hover{
            color: #fdd83c;
        }
    }
    &.react{
        &:hover{
            color: #5ccfee;
        }
    }
    &.git{
        &:hover{
            color:#e44d30;
        }
    }
`