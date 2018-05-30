import React from 'react'
import { Text, Box, Link, Image, Flex } from 'rebass'

const LinkInline = Link.extend`
  display: inline-block;
`

const SupporterList = ({ supporters }) => (
  <Flex justifyContent="center" mt={5}>
    <Box width={['90%', '60%']}>
      <Text color="dark_blue" fontSize={30} fontWeight={400}>
        Ils ont signé:{' '}
      </Text>
      <Flex flexWrap="wrap" justifyContent="center" mt={4}>
        {supporters &&
          supporters.map(supporter => (
            <Box key={supporter._id} width={[1, 1 / 3]}>
              <Flex>
                <Box width="90%" mt={[3, 1]}>
                  <Text
                    textAlign="center"
                    color="supporter_grey"
                    fontWeight={300}
                    fontSize={14}
                  >
                    {supporter.first_name} {supporter.last_name}
                  </Text>
                </Box>
                <Box width="10%" mt={[3, 1]}>
                  {supporter.linkedin_handle && (
                    <LinkInline
                      href={`https://www.linkedin.com/in/${
                        supporter.linkedin_handle
                      }`}
                    >
                      <Image
                        src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Linkedin-icon.png"
                        width={16}
                      />
                    </LinkInline>
                  )}
                  {supporter.twitter_handle && (
                    <LinkInline
                      href={`https://twitter.com/${supporter.twitter_handle}`}
                    >
                      <Image
                        src="http://icons.iconarchive.com/icons/tinylab/android-lollipop-apps/128/Twitter-icon.png"
                        width={16}
                      />
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
