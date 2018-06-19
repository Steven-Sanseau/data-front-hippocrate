import React from 'react'
import { Text, Box, Link, Image, Flex } from 'rebass'
import TwitterSquare from '../Svg/TwitterSquare'
import GithubSquare from '../Svg/GithubSquare'
import LinkedinSquare from '../Svg/LinkedinSquare'

const LinkInline = Link.extend`
  display: inline-block;
`

const SupporterList = ({ supporters }) => (
  <Flex justifyContent="center" mt={5}>
    <Box width={['90%', '60%']}>
      <Text color="dark_blue" fontSize={30} fontWeight={400}>
        Ils ont signé :
      </Text>
      <Flex flexWrap="wrap" justifyContent="center" mt={4}>
        {supporters &&
          supporters.map(supporter => (
            <Box key={supporter._id} width={[1, 1 / 3]}>
              <Flex>
                <Box width="80%" mt={[3, 1]}>
                  <Text
                    textAlign="center"
                    color="supporter_grey"
                    fontWeight={300}
                    fontSize={14}
                  >
                    {supporter.first_name} {supporter.last_name}
                  </Text>
                </Box>
                <Box width="40%" mt={[3, 1]}>
                  {supporter.linkedin_handle && (
                    <LinkInline
                      href={`https://www.linkedin.com/in/${
                        supporter.linkedin_handle
                      }`}
                      color="supporter_grey"
                      target="_blank"
                    >
                      <LinkedinSquare width={16} height={16} />
                    </LinkInline>
                  )}
                  {supporter.twitter_handle && (
                    <LinkInline
                      href={`https://twitter.com/${supporter.twitter_handle}`}
                      color="supporter_grey"
                      target="_blank"
                    >
                      <TwitterSquare width={16} height={16} />
                    </LinkInline>
                  )}
                  {supporter.github_handle && (
                    <LinkInline
                      href={`https://github.com/${supporter.github_handle}`}
                      color="supporter_grey"
                      target="_blank"
                    >
                      <GithubSquare width={16} height={16} />
                    </LinkInline>
                  )}
                </Box>
              </Flex>
            </Box>
          ))}
      </Flex>
    </Box>
  </Flex>
)

export default SupporterList
