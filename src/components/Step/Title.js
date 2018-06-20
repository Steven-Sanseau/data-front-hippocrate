import { Text } from 'rebass'
import { themeGet } from 'styled-system'

const Title = Text.extend`
  color: ${themeGet('colors.dark_grey')};
  font-weight: 700;
  font-size: 30px;
  padding-top: 3.4em;
  z-index: 100;
  display: inline-block;
`
export default Title
