import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Flex, Box } from 'rebass'

const TeamPage = ({ data }) => (
  <main>
    <Header siteTitle={data.site.siteMetadata.title} />

    <Flex flexWrap="wrap" justifyContent="center">
      <Box p={3} width={[1, 2 / 3]}>
        Teammmmm
      </Box>
    </Flex>

    <Footer />
  </main>
)

export default TeamPage

export const IndexQuery = graphql`
  query TeamQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
