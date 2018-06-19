import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Flex, Box, Text, Image, Link } from 'rebass'
import TeamCard from '../components/TeamCard'

const CookiePage = ({ location }) => (
  <main>
    <Header location={location} />
    <Flex justifyContent="center">
      <Box width={['100%', '60%']}>
        <Text>
          Nous utilisons des cookies dans le cadre d'outils de tracking de
          visites sur le site
        </Text>
      </Box>
    </Flex>
  </main>
)

export default CookiePage
