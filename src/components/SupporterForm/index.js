import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Box, Text, Button } from 'rebass'
import request from '../../utils/request'

class SupporterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      linkedInHandle: '',
      twitterHandle: '',
      errorMessage: null,
    }
    this.newSupporter = this.newSupporter.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value, errorMessage: null })
  }

  newSupporter = e => {
    e.preventDefault()

    const method = 'POST'
    const requestURL = `${process.env.API_URL}/supporter`
    const body = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      linkedin_handle: this.state.linkedInHandle || '',
      twitter_handle: this.state.twitterHandle || '',
    }

    return request(requestURL, { method, body: body })
      .catch(err => {
        console.log('err', err.response)
        this.setState({ errorMessage: err.response.payload.message })
      })
      .then(newSupporter => {
        this.props.pushNewSupporter(newSupporter)
        this.clearForm()
      })
  }

  validateForm = () => {}

  validateInput = input => {
    if (input.name === 'email') {
      input.value
    }
    switch (input.name) {
      case 'email': {
        if (input.value === '') {
        }
      }
    }
  }

  clearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      linkedInHandle: '',
      twitterHandle: '',
    })
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      linkedInHandle,
      twitterHandle,
      errorMessage,
    } = this.state
    return (
      <Box>
        <form onSubmit={this.newSupporter}>
          <Label>
            Prénom
            <Input
              placeholder="John"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </Label>

          <Label>
            Nom
            <Input
              placeholder="Doe"
              value={lastName}
              name="lastName"
              onChange={this.handleChange}
            />
          </Label>

          <Label>
            Email
            <Input
              placeholder="john@protonmail.com"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
          </Label>

          <Label>
            LinkedIn Profile
            <Input
              placeholder="https://www.linkedin.com/in/hippocrate/"
              name="linkedInHandle"
              onChange={this.handleChange}
              value={linkedInHandle}
            />
          </Label>

          <Label>
            Twitter Profile
            <Input
              placeholder="https://twitter.com/Hippocrate"
              name="twitterHandle"
              onChange={this.handleChange}
              value={twitterHandle}
            />
          </Label>
          <Button
            radius={3}
            cursor="pointer"
            color="white"
            bg="grey"
            type="submit"
          >
            Signer le sermont
          </Button>
          {errorMessage && <Text color="red">{errorMessage}</Text>}
        </form>
      </Box>
    )
  }
}

SupporterForm.propTypes = {
  pushNewSupporter: PropTypes.func,
}

export default SupporterForm
