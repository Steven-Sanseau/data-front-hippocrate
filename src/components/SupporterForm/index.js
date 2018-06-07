import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, Flex, Box, Text, Image } from 'rebass'
import InputText from './InputText'
import request from '../../utils/request'
import ButtonPrimary from '../Button'

class SupporterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      linkedInHandle: '',
      twitterHandle: '',
      githubHandle: '',
      errorMessage: null,
      show_error: false,
      error: false,
      errorInput: {},
      isSubmited: false,
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
      github_handle: this.state.githubHandle || '',
    }

    return request(requestURL, { method, body: body })
      .then(newSupporter => {
        this.props.pushNewSupporter(newSupporter)
        this.setState({ isSubmited: true })
        return this.clearForm()
      })
      .catch(err => {
        return this.setState({
          errorMessage: `Impossible d'enregistrer cette signature, le signataire ${
            body.first_name
          } ${body.last_name} semble déjà exister !`,
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
      githubHandle: '',
    })
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      linkedInHandle,
      twitterHandle,
      githubHandle,
      errorMessage,
      show_error,
      isSubmited,
    } = this.state
    return (
      <Box bg="grey_background">
        <Flex justifyContent="center">
          <Box width={['100%', '100%', '100%', '50%']} p={4}>
            {!isSubmited && (
              <form onSubmit={this.newSupporter}>
                <Flex flexWrap="wrap" justifyContent="left">
                  <Box width={1}>
                    <Flex flexWrap="wrap">
                      <Box
                        width={['100%', '100%', '100%', '100%', '42%']}
                        mx={[0, 0, 0, 0, 3]}
                        my={3}
                      >
                        <Label color="violet_text">
                          Prénom*
                          <InputText
                            placeholder="John"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                          />
                        </Label>
                        {this.state.errorInput.firstName && (
                          <Text
                            color="red"
                            fontSize={12}
                            textAlign="right"
                            fontWeight={300}
                          >
                            {this.state.errorInput.firstName}
                          </Text>
                        )}
                      </Box>

                      <Box
                        width={['100%', '100%', '100%', '100%', '42%']}
                        mx={[0, 0, 0, 0, '28px']}
                        my={3}
                      >
                        <Label color="violet_text">
                          Nom*
                          <InputText
                            placeholder="Doe"
                            value={lastName}
                            name="lastName"
                            onChange={this.handleChange}
                          />
                        </Label>
                        {this.state.errorInput.lastName && (
                          <Text
                            color="red"
                            textAlign="right"
                            fontSize={12}
                            fontWeight={300}
                          >
                            {this.state.errorInput.lastName}
                          </Text>
                        )}
                      </Box>
                    </Flex>
                  </Box>
                  <Box width={['100%', '90%']} mx={[0, 3]} my={3}>
                    <Label color="violet_text">
                      Email*
                      <InputText
                        placeholder="john@protonmail.com"
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                      />
                    </Label>
                    {this.state.errorInput.email && (
                      <Text
                        color="red"
                        fontSize={12}
                        textAlign="right"
                        fontWeight={300}
                      >
                        {this.state.errorInput.email}
                      </Text>
                    )}
                  </Box>
                  <Box width={['100%', '90%']} mx={[0, 3]} my={3}>
                    <Label color="violet_text">
                      Linkedin
                      <InputText
                        placeholder="https://twitter.com/MichelHi"
                        name="linkedInHandle"
                        onChange={this.handleChange}
                        value={linkedInHandle}
                      />
                    </Label>
                  </Box>
                  <Box width={['100%', '90%']} mx={[0, 3]} my={3}>
                    <Label color="violet_text">
                      Twitter
                      <InputText
                        placeholder="handle"
                        name="twitterHandle"
                        onChange={this.handleChange}
                        value={twitterHandle}
                      />
                    </Label>
                  </Box>
                  <Box width={['100%', '90%']} mx={[0, 3]} my={3}>
                    <Label color="violet_text">
                      Github
                      <InputText
                        placeholder="handle"
                        name="githubHandle"
                        onChange={this.handleChange}
                        value={githubHandle}
                      />
                    </Label>
                  </Box>
                  <Box width={1}>
                    <Text
                      color="violet_text"
                      fontWeight="300"
                      fontSize={14}
                      mx={[0, 3]}
                    >
                      * champs obligatoires
                    </Text>
                  </Box>
                  {errorMessage &&
                    show_error && (
                      <Box mx="auto" my={2}>
                        <Text
                          color="red"
                          textAlign="center"
                          fontWeight={300}
                          mt={3}
                        >
                          {errorMessage}
                        </Text>
                      </Box>
                    )}
                  <Box mx="auto">
                    <ButtonPrimary
                      mt={[4, 3]}
                      px={['30px', '90px']}
                      py={'20px'}
                      type="submit"
                    >
                      Je signe
                    </ButtonPrimary>
                  </Box>
                </Flex>
                <Text fontSize={1} textAlign="center" fontWeight={300} my={3}>
                  Votre signature sera validée dans les plus brefs délais !
                </Text>
              </form>
            )}
            {isSubmited && (
              <Text textAlign="center" fontSize={4} p={4}>
                Merci de votre signature !
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    )
  }
}

SupporterForm.propTypes = {
  pushNewSupporter: PropTypes.func,
}

export default SupporterForm
