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
      show_error: false,
      error: false,
      errorInput: {},
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

    if (!this.validateForm()) {
      return false
    }

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
      .then(newSupporter => {
        this.props.pushNewSupporter(newSupporter)
        return this.clearForm()
      })
      .catch(err => {
        return this.setState({
          errorMessage: `Impossible d'enregistrer cette signature, le signataire ${
            body.first_name
          } ${body.last_name} semble déjà existé !`,
          show_error: true,
        })
      })
  }

  validateForm = () => {
    const { firstName, lastName, email } = this.state
    let error = {}
    let isValid = true

    if (firstName === '') {
      error.firstName = 'Veuillez entrer votre Prénom'
      isValid = false
    }

    if (lastName === '') {
      error.lastName = 'Veuillez entrer votre Nom'
      isValid = false
    }

    if (email === '') {
      error.email = 'Veuillez entrer votre Email'
      isValid = false
    }
    this.setState({ errorInput: error })
    return isValid
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
      show_error,
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
            {this.state.errorInput.firstName && (
              <Text color="red" fontSize={12}>
                {this.state.errorInput.firstName}
              </Text>
            )}
          </Label>

          <Label>
            <Box>Nom</Box>
            <Box>
              <Input
                placeholder="Doe"
                value={lastName}
                name="lastName"
                onChange={this.handleChange}
              />
            </Box>
            {this.state.errorInput.lastName && (
              <Text color="red" fontSize={12}>
                {this.state.errorInput.lastName}
              </Text>
            )}
          </Label>

          <Label>
            Email
            <Input
              placeholder="john@protonmail.com"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
            {this.state.errorInput.email && (
              <Text color="red" fontSize={12}>
                {this.state.errorInput.email}
              </Text>
            )}
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
            p="20em"
            radius={3}
            color="white"
            bg="dark_blue"
            type="submit"
            height={90}
            fontSize={50}
          >
            Signer le serment
          </Button>
          {errorMessage &&
            show_error && <Text color="red">{errorMessage}</Text>}
        </form>
      </Box>
    )
  }
}

SupporterForm.propTypes = {
  pushNewSupporter: PropTypes.func,
}

export default SupporterForm
