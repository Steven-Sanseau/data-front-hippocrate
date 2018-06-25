import { Input } from 'rebass'
import { themeGet } from 'styled-system'

const InputText = Input.extend`
  background: #ffff;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 300;
  margin-left: 12px;
  box-shadow: 0px none;
  color: ${themeGet('colors.dark_grey')};
  ::placeholder {
    color: ${themeGet('colors.grey')};
  }
`

export default InputText
