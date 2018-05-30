import React from 'react'
import { Flex, Box, Text, Image } from 'rebass'
const Avatar = Image.extend`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`
const TeamCard = ({ teamMember }) => (
  <Box key={teamMember.id}>
    <Avatar mx="auto" src={teamMember.node.avatar} />
    <Text fontSize={16} color="dark_grey" textAlign="center">
      {teamMember.node.name}
    </Text>
    <Text color="dark_grey" textAlign="center">
      {teamMember.node.position}
    </Text>
  </Box>
)

export default TeamCard
