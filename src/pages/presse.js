import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text, Image, Link, Blockquote } from 'rebass'
import { themeGet } from 'styled-system'

import Markdown from 'react-remarkable'

import client from '../utils/client'
import { GET_PAGE } from '../query'
import 'regenerator-runtime/runtime'

import LoaderPresse from '../components/Loader/LoaderPresse'
import Footer from '../components/Footer'
import Header from '../components/Header'

const TextPresse = Text.extend`
  font-weight: 300;

  img {
    width: 75%;
    height: auto;
  }

  a {
    color: ${themeGet('colors.violet_text')};
    cursor: pointer;
  }
`
export default class PressePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      isLoading: true,
    }
  }
  static propTypes = {
    location: PropTypes.object,
  }

  async componentDidMount() {
    const { data } = await client.query({
      query: GET_PAGE,
      variables: { slug: 'presse' },
    })

    this.setState({ data: data.pages[0], isLoading: false })
  }

  render() {
    const { location } = this.props
    const { data, isLoading } = this.state

    return (
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

        <Flex justifyContent="center" mt={4} mx={[3, 0]}>
          <Box width={[1, '45%']}>
            {isLoading && (
              <Box mt={4}>
                <LoaderPresse />
              </Box>
            )}
            {!isLoading && (
              <TextPresse textAlign={['left', 'justify']}>
                <Markdown source={data.content} />
              </TextPresse>
            )}
          </Box>
        </Flex>
        <Footer />
      </main>
    )
  }
}
