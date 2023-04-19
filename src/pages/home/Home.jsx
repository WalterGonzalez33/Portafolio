import Skills from "../../components/Skills/Skills"
import { Navbar } from "../../components/navbar/Navbar"
import SectionWelcome from "../../components/sectionWelcome/SectionWelcome"

const Home = () => {
  return (
    <>
      <Navbar/>
      <SectionWelcome/>
      <Skills/>
    </>
  )
}
export default Home