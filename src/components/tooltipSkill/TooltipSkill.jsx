import { TextHeader, TooltipContainer } from "./Tooltip.elements"
import './Graphic';

const TooltipSkill = ({ value, color, textHeader, x, y }) => {
  return (
    <TooltipContainer x={x} y={y}>
      <TextHeader color={color}>{textHeader}</TextHeader>
        <circle-graphic value={value} color={color}></circle-graphic>
    </TooltipContainer>
  )
}
export default TooltipSkill