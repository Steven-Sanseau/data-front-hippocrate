import { Text } from 'rebass'
import { themeGet } from 'styled-system'

const Title = Text.extend`
  color: ${themeGet('colors.dark_grey')};
  font-weight: 700;
  font-size: 20px;
  z-index: 100;
  padding-top: 3.4em;
`
export default Title
