import React, { Component } from 'react'
import { Input, Label, Box } from 'rebass'
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
    }
    this.newSupporter = this.newSupporter.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
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
        //  TODO: Handle errors
      })
      .finally(() => {
        console.log('coucou')
      })
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      linkedInHandle,
      twitterHandle,
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
          <button type="submit">GOGOGOGO</button>
        </form>
      </Box>
    )
  }
}

SupporterForm.propTypes = {}

export default SupporterForm
