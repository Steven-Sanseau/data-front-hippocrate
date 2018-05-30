import React from 'react'
import { Text, Box } from 'rebass'
import Principle from '../Principle'
import Title from './Title'
import Underline from './Underline'

const Step = ({ step }) => (
  <Box key={step._id}>
    <Title>
      {step.title}
      <Underline />
    </Title>
    <Text color="dark_blue" fontSize={16} fontWeight="300">
      Je m'engage à …
    </Text>

    {step.principle.map(principle => (
      <Principle key={principle._id} principle={principle} />
    ))}
  </Box>
)

export default Step
