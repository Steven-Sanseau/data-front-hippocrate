import React, { Component } from 'react'
import { Image, Flex, Box, Text } from 'rebass'
import anime from 'animejs'

export default class Jumbotron extends Component {
  constructor(props) {
    super(props)

    this.state = {
      glassesAnim: {},
    }

    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  componentDidMount = () => {
    const anim = anime({
      targets: '#glasses',
      translateY: 104,
      opacity: '1',
      easing: 'linear',
      duration: 500,
    })

    this.setState({
      glassesAnim: anim,
    })
  }

  mouseEnter = () => {
    this.state.glassesAnim.play()
    this.state.glassesAnim.reverse()
  }

  mouseLeave = () => {
    this.state.glassesAnim.play()
    this.state.glassesAnim.reverse()
  }

  render() {
    return (
      <Flex mx={-2} justifyContent="center">
        <Box width={['100%', '60%']}>
          <Flex justifyContent="center">
            <Box width={[1, 1, 1, 1 / 2]} px={2}>
              <Text
                color="dark_grey"
                textAlign="left"
                fontSize={14}
                fontWeight={300}
                style={{ opacity: 0.3 }}
                ml={['0', '6%']}
              >
                Data for Good propose un
              </Text>
              <Text
                textAlign={['center', 'center', 'center', 'right']}
                fontSize={45}
                fontWeight={700}
                color="dark_grey"
                lineHeight="1.5em"
              >
                Serment d'Hippocrate<br />pour Data Scientist
              </Text>
              <Text
                color="dark_grey"
                textAlign="right"
                fontSize="14"
                mt={9}
                lineHeight="45px"
                fontWeight={300}
                style={{ opacity: 0.3 }}
              >
                …ou pour toute personne travaillant avec la donnée
              </Text>
            </Box>
            <Box width={[0, 0, 1 / 2, 1 / 3]} px={2}>
              <Box
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
              >
                <Image
                  ml="2em"
                  style={{ opacity: 0.2 }}
                  width={['100%', '200px']}
                  src="/static/hippocrate.png"
                />
                <Image
                  width={['100%', '35%']}
                  style={{ opacity: 0 }}
                  mt={[0, '-30%', '-76%']}
                  ml="21%"
                  src="/static/glasses.png"
                  id="glasses"
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    )
  }
}
