import React from 'react'
import { Flex, Box, Text, Image, Link } from 'rebass'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PressePage = ({ data, location }) => (
  <main>
    <Header location={location} />

    <Flex mx={-2} justifyContent="center">
      <Box width={['100%', '60%']}>
        <Flex justifyContent="center">
          <Box width={[1, 1, 1, 1 / 2]} px={2}>
            <Text
              color="dark_grey"
              textAlign="right"
              fontSize={25}
              fontWeight={300}
              mt={6}
            >
              Communiqué de presse
            </Text>
          </Box>
          <Box width={[0, 0, 1 / 2, 1 / 3]} px={2}>
            <Box>
              <Image
                ml="2em"
                style={{ opacity: 0.2 }}
                width={['100%', '200px']}
                src="/static/hippocrate.png"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>

    <Flex justifyContent="center" mt={6}>
      <Box width={[1, '60%']}>
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit (titre)<br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.<br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.<br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.<br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Flex>
    <Footer />
  </main>
)

export default PressePage
