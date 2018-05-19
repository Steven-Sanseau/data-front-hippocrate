import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Flex, Box } from 'rebass'
import TeamCard from '../components/TeamCard'

const TeamPage = ({ data }) => (
  <main>
    <Header siteTitle={data.site.siteMetadata.title} />

    <Flex flexWrap="wrap" justifyContent="center">
      <Box p={3} width={[1, 2 / 3]}>
        {data.allStrapiTeam.edges.map(member => (
          <TeamCard teamMember={member} />
        ))}
      </Box>
    </Flex>

    <Footer />
  </main>
)

export default TeamPage

export const IndexQuery = graphql`
  query TeamQuery {
    allStrapiTeam {
      edges {
        node {
          name
          avatar
          position
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
