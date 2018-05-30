import React from 'react'
import { Text, Box } from 'rebass'
import Principle from '../Principle'
import Title from './Title'
import Underline from './Underline'

const Step = ({ step }) => (
  <Box key={step.node.id}>
    <Title>
      {step.node.title}
      <Underline />
    </Title>
    <Text color="dark_blue" fontSize={16} fontWeight="300">
      Je m'engage à …
    </Text>

    {step.node.principle.map(principle => <Principle principle={principle} />)}
  </Box>
)

export default Step
