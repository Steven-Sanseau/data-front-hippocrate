import React, { Component } from 'react'
import { Text, Box, Flex } from 'rebass'
import ButtonPrimary from '../Button'
import SupporterForm from '../SupporterForm'
import SupporterList from '../SupporterList'
import request from '../../utils/request'

class Supporter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      supporters: [],
    }

    this.addSupporter = this.addSupporter.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  componentDidMount = () => {
    this.updateSupporterList()
  }

  updateSupporterList = () => {
    const method = 'GET'
    const requestURL = `${process.env.API_URL}/supporter`

    return request(requestURL, { method })
      .catch(err => {
        //  TODO: Handle errors
      })
      .then(res => {
        this.setState({ supporters: res })
      })
  }

  addSupporter = newSupporter => {
    const { supporters } = this.state
    if (newSupporter === undefined) {
      return
    }
    supporters.push(newSupporter)
    this.setState({ supporters })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { showForm } = this.state
    return (
      <Box id="supporter" mt={5} mx={-2}>
        {!showForm && (
          <Flex justifyContent="center">
            <Box>
              <ButtonPrimary
                onClick={this.toggleForm}
                radius={3}
                color="white"
                bg="dark_blue"
                fontSize={50}
                p={10}
              >
                Je Signe
              </ButtonPrimary>
            </Box>
          </Flex>
        )}

        {showForm && (
          <SupporterForm
            showingForm={showForm}
            pushNewSupporter={this.addSupporter}
          />
        )}

        <SupporterList
          update={this.updateSupporterList}
          supporters={this.state.supporters}
        />
      </Box>
    )
  }
}

Supporter.propTypes = {}

export default Supporter
