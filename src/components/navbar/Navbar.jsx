import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LogoContainer, NavContainer, NavLi, NavLink, NavUl, Redes, RedesContainer } from "./Navbar.element";

export const Navbar = () => {
  return (
    <NavContainer>
        <LogoContainer>
          
          <Redes href="https://github.com/walter-doctype" target="_blank">
            <FaGithub/>
          </Redes>

        </LogoContainer>


        <NavUl>
          <NavLi><NavLink href="#">Home</NavLink></NavLi>
          <NavLi><NavLink href="#">About me</NavLink></NavLi>
          <NavLi><NavLink href="#">Skills</NavLink></NavLi>
          <NavLi><NavLink href="#">Contact me</NavLink></NavLi>
        </NavUl>

        <RedesContainer>
          <Redes className="redes"><FaInstagram/></Redes>
          <Redes className="redes"><FaGithub/></Redes>
          <Redes className="redes"><FaLinkedinIn/></Redes>
        </RedesContainer>
    </NavContainer>

    
  )
}