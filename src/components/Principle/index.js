import React from 'react'
import { Text, Box } from 'rebass'

const Principle = ({ principle }) => (
  <div>
    <Box key={principle.id}>
      <Text mb={20} ml="10%" fontSize={14} color="grey">
        ... {principle.title}
      </Text>
    </Box>
  </div>
)

export default Principle
