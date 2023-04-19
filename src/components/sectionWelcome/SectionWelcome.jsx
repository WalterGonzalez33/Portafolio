import { Container, DescriptionTextContainer, DescriptionText, SvgContainer } from "./SectionWelcome.element"
import SvgDeveloper from '../../assets/developer.svg'
import TypedText from "../TypedText/TypedText"

const SectionWelcome = () => {
  return (
    <Container>
        <DescriptionTextContainer>
            <TypedText/>
            <DescriptionText>
                me desarrollo en la maquetación de páginas web con los lenguajes html/css/javascript.
                por el momento estoy en transcurso de aprendizaje de mi carrera profesional como desarrollador web, con muchas ganas de aprender y ganar experiencia en el ámbito laboral.
            </DescriptionText>
        </DescriptionTextContainer>

        <SvgContainer>
            <img src={SvgDeveloper}/>
        </SvgContainer>
    </Container>
  )
}
export default SectionWelcome