import { useEffect } from "react"
import Typed from "typed.js"
import { Container, Text } from "./TypedText.element"

const TypedText = () => {

  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['walter Gonzalez', 'front-end developer'],
      typeSpeed: 80,
      startDelay:400,
      backSpeed: 90,
      loop: true,
      showCursor: false,
      cursorChar:'|',

    })
  },[])

  return (
    <Container>
      <Text className="typed"/>
    </Container>
  )
}
export default TypedText