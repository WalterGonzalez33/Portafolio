import { useEffect, useState } from "react";
import { IconSkill,SkillsContainer, SkillsWrapper } from "./Skills.elements"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import TooltipSkill from "../tooltipSkill/TooltipSkill";
import { useRef } from "react";


const Skills = () => {

  // states check tooltip
    const [ tooltipHtml, setTooltipHtml ] = useState(false)
    const [ tooltipCss, setTooltipCss ] = useState(false)
    const [ tooltipJs, setTooltipJs ] = useState(false)
    const [ tooltipReact, setTooltipReact ] = useState(false)
    const [ tooltipGit, setTooltipGit ] = useState(false)

  // states for coordinates the icons
    const [ coordinateX, setCoordinateX ] = useState()
    const [ coordinateY, setCoordinateY ] = useState()

  // refs for icons
    const refIcon1 = useRef()
    const refIcon2 = useRef()
    const refIcon3 = useRef()
    const refIcon4 = useRef()
    const refIcon5 = useRef()

  // function get coordinate the icons
    const IconCoordinate = (e) => {
      const iconWidth = e.clientWidth;
      const iconHeight = e.clientHeight; 
      setCoordinateX(e.offsetLeft - (iconWidth / 2) + 15)
      setCoordinateY(e.offsetTop - iconHeight -25)
    }

    useEffect(() => {
      
    },[coordinateX])
  return (
  <SkillsContainer>
        <SkillsWrapper>
            {
                tooltipHtml && <TooltipSkill value={100} color={'#e5622a'} 
                textHeader={'html'}
                x={coordinateX}
                y={coordinateY}/>
            }
            <IconSkill ref={refIcon1} className="html"
              onMouseOver={()=> {setTooltipHtml(true); IconCoordinate(refIcon1.current)}}
              onMouseOut={()=> setTooltipHtml(false)}>
            <FaHtml5/></IconSkill>

            {/* /-----------------/ */}

            {
                tooltipCss && <TooltipSkill value={95} color={'#0b6daf'} 
                textHeader={'css'}
                x={coordinateX}
                y={coordinateY}/>
            }
            <IconSkill ref={refIcon2} className="css"
              onMouseOver={()=> {setTooltipCss(true); IconCoordinate(refIcon2.current)}}
              onMouseOut={()=> setTooltipCss(false)}>
            <FaCss3Alt/></IconSkill>

            {/* /-----------------/ */}

            {
                tooltipJs && <TooltipSkill value={90} color={'#fdd83c'} 
                textHeader={'js'}
                x={coordinateX}
                y={coordinateY}/>
            }
            <IconSkill ref={refIcon3} className="js"
              onMouseOver={()=> {setTooltipJs(true); IconCoordinate(refIcon3.current)}}
              onMouseOut={()=> setTooltipJs(false)}>  
            <FaJs/></IconSkill>

            {/* /-----------------/ */}

            {
                tooltipReact && <TooltipSkill value={80} color={'#5ccfee'} 
                textHeader={'react'}
                x={coordinateX}
                y={coordinateY}/>
            }
            <IconSkill ref={refIcon4} className="react"
              onMouseOver={()=> {setTooltipReact(true); IconCoordinate(refIcon4.current)}}
              onMouseOut={()=> setTooltipReact(false)}>  
            <FaReact/></IconSkill>

            {/* /-----------------/ */}

            {
                tooltipGit && <TooltipSkill value={70} color={'#e44d30'} 
                textHeader={'git'}
                x={coordinateX}
                y={coordinateY}/>
            }
            <IconSkill ref={refIcon5} className="git"
              onMouseOver={()=> {setTooltipGit(true); IconCoordinate(refIcon5.current)}}
              onMouseOut={()=> setTooltipGit(false)}>  
            <FaGitAlt/></IconSkill>
        </SkillsWrapper>
    </SkillsContainer>
  )
}
export default Skills