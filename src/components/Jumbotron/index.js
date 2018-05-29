import React from 'react'
import { Image, Flex, Box, Text } from 'rebass'
const ImageGlasses = Image.extend``

const ImageHippocrate = Image.extend`
  opacity: 0.2;
`

const Jumbotron = () => (
  <div>
    <Flex mx={-2}>
      <Box width={1 / 2} px={2}>
        <Text
          color="dark_blue"
          textAlign="right"
          fontSize={14}
          fontWeight={500}
        >
          Data for Good propose un <br />
          <Text is="span" textAlign="right" fontSize={45} fontWeight={700}>
            Serment d'Hippocrate<br />pour Data Scientist
          </Text>
        </Text>
        <Text
          color="dark_blue"
          textAlign="right"
          fontSize="14"
          mt={9}
          lineHeight="45px"
        >
          …ou pour toute personne travaillant avec la donnée
        </Text>
      </Box>
      <Box width={1 / 2} px={2}>
        <ImageHippocrate
          ml="2em"
          opacity={0.2}
          width="25%"
          src="/static/hippocrate.png"
        />
        <ImageGlasses
          width="14.5%"
          mt="-17.5%"
          ml="8.1%"
          src="/static/glasses.png"
        />
      </Box>
    </Flex>
  </div>
)

export default Jumbotron
