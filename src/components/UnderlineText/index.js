import React from 'react'
import Title from './Title'
import Underline from './Underline'

const UnderlineText = ({ text }) => (
  <Title mt={[2, 2, 2, 0]}>
    {text}
    <Underline />
  </Title>
)
export default UnderlineText
