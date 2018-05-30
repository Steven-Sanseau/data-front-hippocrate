import React, { Component } from 'react'
import { Text, Box, Flex } from 'rebass'

import client from '../utils/client'
import { GET_STEP } from '../query'
import 'regenerator-runtime/runtime'

import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Preamble from '../components/Preamble'
import Step from '../components/Step'
import Footer from '../components/Footer'
import Supporter from '../components/Supporter'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        steps: [],
      },
    }
  }

  async componentDidMount() {
    const { data } = await client.query({
      query: GET_STEP,
    })

    this.setState({ data })
  }

  render() {
    const { data } = this.state
    return (
      <main>
        <Header />
        <Jumbotron />
        <Preamble />

        <Flex flexWrap="wrap" justifyContent="center">
          <Box p={3} width={[1, '60%']}>
            {!data.loading &&
              data.steps &&
              data.steps.map(step => <Step key={step._id} step={step} />)}
          </Box>
          <Box width={1}>
            <Supporter />
          </Box>
        </Flex>

        <Footer />
      </main>
    )
  }
}
