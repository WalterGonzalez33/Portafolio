import { FaGithub, FaInstagram, FaLinkedinIn,FaBars, FaTimes } from "react-icons/fa";
import { BarContainer, IconMobile, LogoContainer, NavContainer, NavLi, NavLink, NavUl, NavWrapper, Redes, RedesContainer } from "./Navbar.element";
import { useState } from "react";

export const Navbar = () => {

  const [menuMobilShow, setMenuMobilShow] = useState(false)
  return (
    <NavContainer>

      <NavWrapper>

        <LogoContainer>        
          <Redes href="https://github.com/walter-doctype" target="_blank">
            <FaGithub/>
          </Redes>
        </LogoContainer>

        <IconMobile onClick={() => setMenuMobilShow(!menuMobilShow)}>
          {
            menuMobilShow
              ? <FaTimes/>
              : <FaBars/>
          }
        </IconMobile>

        <BarContainer active={menuMobilShow}>
          <NavUl>
            <NavLi onClick={() => setMenuMobilShow(!menuMobilShow)}><NavLink href="#">Home</NavLink></NavLi>
            <NavLi onClick={() => setMenuMobilShow(!menuMobilShow)}><NavLink href="#">About me</NavLink></NavLi>
            <NavLi onClick={() => setMenuMobilShow(!menuMobilShow)}><NavLink href="#">Skills</NavLink></NavLi>
            <NavLi onClick={() => setMenuMobilShow(!menuMobilShow)}><NavLink href="#">Contact me</NavLink></NavLi>
          </NavUl>

          <RedesContainer>
            <Redes className="redes"><FaInstagram/></Redes>
            <Redes className="redes"><FaGithub/></Redes>
            <Redes className="redes"><FaLinkedinIn/></Redes>
          </RedesContainer>
        </BarContainer>
      </NavWrapper>

    </NavContainer>

    
  )
}