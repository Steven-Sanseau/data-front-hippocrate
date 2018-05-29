import React from 'react'
import { Image, Flex, Box, Text } from 'rebass'
const ImageGlasses = Image.extend``

const ImageHippocrate = Image.extend`
  opacity: 0.2;
`

const Jumbotron = () => (
  <Flex mx={-2} justifyContent="center" wrap>
    <Box width={[1, 1 / 2]} px={2}>
      <Text
        color="dark_grey"
        textAlign="left"
        fontSize={14}
        fontWeight={300}
        style={{ opacity: 0.3 }}
        ml={['0', '10%', '40%']}
      >
        Data for Good propose un
      </Text>
      <Text
        textAlign="right"
        fontSize={45}
        fontWeight={700}
        color="dark_grey"
        lineHeight="1.5em"
      >
        Serment d'Hippocrate<br />pour Data Scientist
      </Text>
      <Text
        color="dark_grey"
        textAlign="right"
        fontSize="14"
        mt={9}
        lineHeight="45px"
        fontWeight={300}
        style={{ opacity: 0.3 }}
      >
        …ou pour toute personne travaillant avec la donnée
      </Text>
    </Box>
    <Box width={[1, 1 / 2]} px={2}>
      <ImageHippocrate
        ml="2em"
        opacity={0.2}
        width={['100%', '25%']}
        src="/static/hippocrate.png"
      />
      <ImageGlasses
        width={['100%', '14.5%']}
        mt="-17.5%"
        ml="8.1%"
        src="/static/glasses.png"
      />
    </Box>
  </Flex>
)

export default Jumbotron
