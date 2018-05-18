import React from 'react'
import { Text, Box } from 'rebass'
import Principle from '../Principle'

const Step = ({ step }) => (
  <Box key={step.node.id}>
    <Text color="dark_blue" fontSize={25} fontWeight={700} mb={25}>
      {step.node.title}
    </Text>
    <Text color="dark_blue" ml="1%" fontSize={14}>
      Je m'engage à …
    </Text>

    {step.node.principle.map(principle => <Principle principle={principle} />)}
  </Box>
)

export default Step
