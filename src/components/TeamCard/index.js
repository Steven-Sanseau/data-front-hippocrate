import React from 'react'
import {Flex, Box, Text, Image} from 'rebass'

const TeamCard = ({teamMember}) => (
    <Flex>
        <Box>
            <Box><Image src={teamMember.node.avatar} /></Box>
            <Text>{teamMember.node.name}</Text>
            <Text>{teamMember.node.position}</Text>
        </Box>
    </Flex>
)

        export default TeamCard