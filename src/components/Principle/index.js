import React from 'react'
import { Text, Box } from 'rebass'
import { themeGet } from 'styled-system'
import Markdown from 'react-remarkable'

const TextPrinciple = Text.extend`
  margin-bottom: 20px;
  margin-left: 10%;
  font-size: 14px;
  color: ${themeGet('colors.dark_grey')};
  font-family: Roboto;
`

const Principle = ({ principle }) => (
  <div>
    <Box key={principle.id}>
      <TextPrinciple>
        <Markdown source={`... ${principle.title}`} />
      </TextPrinciple>
    </Box>
  </div>
)

export default Principle
