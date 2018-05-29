import { Box } from 'rebass'
import { themeGet } from 'styled-system'

const Underline = Box.extend`
  background-color: ${themeGet('colors.grey')};
  height: 0.75em;
  width: 7.5em;
  top: 5.1em;
`
export default Underline
