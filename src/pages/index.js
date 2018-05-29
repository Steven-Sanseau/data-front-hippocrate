import React from 'react'
import { Text, Box, Flex } from 'rebass'

import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Preamble from '../components/Preamble'
import Step from '../components/Step'
import Footer from '../components/Footer'
import Supporter from '../components/Supporter'

const IndexPage = ({ data }) => (
  <main>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Jumbotron />
    <Preamble />

    <Flex flexWrap="wrap" justifyContent="center">
      <Box p={3} mt="14em" width={[1, 2 / 3]}>
        {data.allStrapiStep.edges.map(step => <Step step={step} />)}
      </Box>
      <Box p={3} width={[1, 2 / 3]}>
        <Supporter />
      </Box>
    </Flex>

    <Footer />
  </main>
)

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    allStrapiStep(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          order
          principle {
            id
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
