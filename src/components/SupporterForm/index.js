import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, Flex, Box, Text } from 'rebass'

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

  getHandleTwitterFromUrl = value => {
    const handleTwitterRegex = new RegExp(
      '((https?://)?(www.)?twitter.com/)?(@|#!/)?([A-Za-zÀ-ÿ0-9_]{1,15})(/([-a-z]{1,20}))?'
    )

    const val = handleTwitterRegex.exec(value)

    return val ? val[5] : ''
  }

  getHandleGithubFromUrl = value => {
    const handleGithubRegex = new RegExp(
      '((https?://)?(www.)?github.com/)?(@|#!/)?([A-Za-zÀ-ÿ0-9_-]{1,15})(/([-a-z_-]{1,20}))?'
    )

    const val = handleGithubRegex.exec(value)

    return val ? val[5] : ''
  }

  getHandleLinkedInFromUrl = value => {
    const handleLinkedInRegex = new RegExp(
      '((https?://)?(www.)?linkedin.com/)?(@|#!/)?([A-Za-z0-9À-ÿ_-]{1,15})(/([-a-z]{1,20}))?'
    )

    const val = handleLinkedInRegex.exec(value)

    return val ? val[7] : ''
  }

  handleChange = e => {
    e.preventDefault()

    const value = e.target.value

    this.setState({ [e.target.name]: value, errorMessage: null })
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
      linkedin_handle:
        this.getHandleLinkedInFromUrl(this.state.linkedInHandle) || '',
      twitter_handle:
        this.getHandleTwitterFromUrl(this.state.twitterHandle) || '',
      github_handle: this.getHandleGithubFromUrl(this.state.githubHandle) || '',
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
      error.firstName = 'Veuillez entrer votre prénom'
      isValid = false
    }

    if (lastName === '') {
      error.lastName = 'Veuillez entrer votre nom'
      isValid = false
    }

    if (email === '') {
      error.email = 'Veuillez entrer votre email'
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
                        placeholder="https://www.linkedin.com/in/MichelHi"
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
                        placeholder="https://www.twitter.com/MichelHi"
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
                        placeholder="https://www.github.com/Michel-Hi"
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
                      pt={'15px'}
                      pb={'20px'}
                      type="submit"
                    >
                      Je signe
                    </ButtonPrimary>
                  </Box>
                </Flex>
                <Text fontSize={1} textAlign="center" fontWeight={300} my={4}>
                  Votre signature sera validée dans les plus brefs délais !
                </Text>
                <Flex>
                  <Box width="92%">
                    <Text
                      fontSize="11px"
                      textAlign="justify"
                      color="dark_grey"
                      fontWeight={300}
                      lineHeight="15px"
                    >
                      Les informations recueillies sur ce formulaire sont
                      enregistrées dans un fichier informatisé par Data for Good
                      à des fins d'information et de communication externe.
                      Elles sont conservées pendant 24 mois et sont destinées à
                      une équipe de bénévoles de l'association Data for Good.
                      Conformément à la loi « informatique et libertés », vous
                      pouvez exercer votre droit d'accès aux données vous
                      concernant et les faire rectifier en contactant :
                      hellodataforgood@gmail.com.
                    </Text>
                  </Box>
                </Flex>
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
