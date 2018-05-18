import React from 'react'
import { Image, Flex, Box, Text } from 'rebass'

const Jumbotron = () => (
  <div>
    <Flex mx={-2}>
      <Box width={1 / 2} px={2}>
        <Text
          color="dark_blue"
          textAlign="right"
          fontSize={20}
          fontWeight={500}
        >
          On a fait un{' '}
          <Text is="span" fontSize={25} fontWeight={900}>
            Serment d'Hippocrate<br />pour Data Scientist
          </Text>
        </Text>
        <Text color="dark_blue" textAlign="right" fontSize="14" mt="3em">
          …ou pour toute personne travaillant avec la donnée
        </Text>
      </Box>
      <Box width={1 / 2} px={2}>
        <Image ml="2em" width="25%" src="/static/hippocrate.png" />
      </Box>
    </Flex>
  </div>
)

export default Jumbotron
