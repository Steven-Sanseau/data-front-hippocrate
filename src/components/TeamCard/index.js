import React from 'react'
import { Flex, Box, Text, Image } from 'rebass'
const Avatar = Image.extend`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`
const TeamCard = ({ teamMember }) => (
  <Box key={teamMember.id} width={[1, 1, 1 / 2, 1 / 4]} mt={5}>
    <Avatar mx="auto" src={teamMember.node.avatar} />
    <Text fontSize={16} color="dark_grey" textAlign="center" mt={2}>
      {teamMember.node.name}
    </Text>
    <Text
      color="dark_grey"
      style={{ opacity: 0.7 }}
      textAlign="center"
      fontSize={14}
      fontWeight={300}
    >
      {teamMember.node.position}
    </Text>
  </Box>
)

export default TeamCard
