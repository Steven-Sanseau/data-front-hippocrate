import React from 'react'
import { Flex, Box } from 'rebass'
import Header from '../components/Header'

const PressePage = ({ data }) => (
  <main>
    <Header siteTitle={data.site.siteMetadata.title} />
    Presse page
  </main>
)

export default PressePage

export const IndexQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
