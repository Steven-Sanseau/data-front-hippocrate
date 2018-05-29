import { Text } from 'rebass'
import { themeGet } from 'styled-system'

const Number = Text.extend`
  color: ${themeGet('colors.violet_text')};
  font-weight: 500;
  font-size: 80px;
`
export default Number
