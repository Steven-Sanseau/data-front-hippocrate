import React from 'react'
import { Text, Box, Link, Image, Flex } from 'rebass'

const LinkInline = Link.extend`
  display: inline-block;
`

const SupporterList = ({ supporters }) => (
  <Flex flexWrap="wrap" alignItems="center">
    {supporters &&
      supporters.map(supporter => (
        <Box key={supporter._id} width={[1, 1 / 2, 1 / 3]}>
          <Flex>
            <Box width={2 / 3}>
              <Text color="grey" fontSize={14}>
                {supporter.first_name} {supporter.last_name}
              </Text>
            </Box>
            <Box width={1 / 3}>
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
)

export default SupporterList
