import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Flex, Box, Text, Image, Link } from 'rebass'
import TeamCard from '../components/TeamCard'

const TeamPage = ({ data, location }) => (
  <main>
    <Header location={location} />
    <Flex mx={-2} justifyContent="center">
      <Box width={['100%', '60%']}>
        <Flex justifyContent="center">
          <Box width={[1, 1, 1, 1 / 2]} px={2}>
            <Text
              color="dark_grey"
              textAlign="left"
              fontSize={16}
              fontWeight={300}
            >
              Nous sommes une équipe de <strong>bénévoles</strong> rassemblés
              dans le cadre de l’association Data for Good.
            </Text>

            <Text
              color="dark_grey"
              textAlign="left"
              fontSize={16}
              fontWeight={300}
              mt={3}
            >
              L’idée d’écrire un <i>Serment d’Hippocrate pour Data Scientist</i>{' '}
              avec l’aide de la communauté de Data for Good a été portée lors de
              la seconde saison d’accélération de l’association.
            </Text>

            <Text
              color="dark_grey"
              textAlign="left"
              fontSize={16}
              fontWeight={300}
              mt={3}
            >
              Après un questionnaire en ligne et lors de plusieurs sessions
              d’écriture collaborative, nous avons rédigé ce Serment qui est
              voué à évoluer.
            </Text>

            <Text
              color="dark_grey"
              textAlign="left"
              fontSize={16}
              fontWeight={300}
              mt={3}
            >
              N’hésitez à nous rejoindre si vous souhaitez collaborer ! Pour
              cela, vous pouvez nous écrire à{' '}
              <Link href="mailto:hippocrate.tech@gmail.com" color="dark_grey">
                hippocrate.tech@gmail.com
              </Link>.
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

    <Flex flexWrap="wrap" justifyContent="center" mt={6}>
      <Box width={[1, '60%']}>
        <Flex flexWrap="wrap">
          {data.allStrapiTeam.edges.map(member => (
            <TeamCard key={member.id} teamMember={member} />
          ))}
        </Flex>
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
  }
`
