import { Button } from 'rebass'
import { themeGet } from 'styled-system'

const ButtonPrimary = Button.extend`
  font-size: 50px;
  padding: 10px 90px;
  text-align: center;
  color: white;
  background-color: ${themeGet('colors.dark_blue')};
  border-radius: 4px;
  height: 90px;
  cursor: pointer;
`
export default ButtonPrimary
