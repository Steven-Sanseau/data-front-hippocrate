import { Box } from 'rebass'
import { themeGet } from 'styled-system'

const Underline = Box.extend`
  background-color: ${themeGet('colors.grey_background')};
  height: 0.75em;
  top: -0.58em;
  width: 113%;
  position: relative;
  left: -5%;
  z-index: -1;
`
export default Underline
