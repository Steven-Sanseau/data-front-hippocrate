import { Text } from 'rebass'
import { themeGet } from 'styled-system'

const Description = Text.extend`
  color: ${themeGet('colors.violet_text')};
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  opacity: 0.54;
`
export default Description
