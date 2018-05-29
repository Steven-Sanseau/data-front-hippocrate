import React from 'react'
import { Flex, Box, Text, Link } from 'rebass'
const Footer = () => (
  <Flex justifyContent="center" mt={5}>
    <Text
      color="dark_blue"
      textAlign="center"
      fontSize={14}
      style={{ opacity: 0.7, fontFamily: 'Roboto' }}
    >
      Ce projet est porté dans le cadre de la saison d’accélération de
      l’association{' '}
      <Link color="dark_blue" href="http://www.dataforgood.fr/" target="_blank">
        Data For Good
      </Link>
      <br />
      Des mises à jour régulières sont prévues. Pour toute suggestion, merci de
      contacter{' '}
      <Link color="dark_blue" href="mailto:hippocrate.tech@gmail.com">
        hippocrate.tech@gmail.com
      </Link>.
    </Text>
  </Flex>
)

export default Footer
