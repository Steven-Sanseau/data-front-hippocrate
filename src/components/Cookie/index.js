import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, Box, Link } from 'rebass'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

import CookieCrumbs from '../Svg/CookieCrumbs'
import CookieCrumbs1 from '../Svg/CookieCrumbs1'
import CookieCrumbs2 from '../Svg/CookieCrumbs2'
import CookieCrumbs3 from '../Svg/CookieCrumbs3'

const BoxCookie = Box.extend`
  cursor: pointer;
  border-radius: 4px;
  user-select: none;
`
export default class Cookie extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      step: 0,
      hideBanner: cookies.get('cookie_banner_close') || false,
    }

    this.crunch = this.crunch.bind(this)
    this.closeCookieBanner = this.closeCookieBanner.bind(this)
  }

  crunch = e => {
    const currentStep = this.state.step + 1
    if (currentStep > 3) {
      this.closeCookieBanner()
    }
    this.setState({ step: currentStep })
  }

  closeCookieBanner = () => {
    cookies.set('cookie_banner_close', true)
    this.setState({ hideBanner: true })
  }

  render() {
    const { step, hideBanner } = this.state
    return (
      <div>
        {!hideBanner && (
          <BoxCookie bg="grey_background" onClick={this.crunch} p={[2, 3]}>
            <Text
              color="violet_text"
              fontWeight={300}
              fontSize="16px"
              lineHeight="16px"
            >
              Nous utilisons des{' '}
              {step === 0 && <CookieCrumbs width={16} height={16} />}
              {step === 1 && <CookieCrumbs1 width={16} height={16} />}
              {step === 2 && <CookieCrumbs2 width={16} height={16} />}
              {step === 3 && <CookieCrumbs3 width={16} height={16} />}
              {step > 3 && <Text is="span">cookies</Text>}, <br />pour en savoir
              plus{' '}
              <Link href="/cookie" color="violet_text">
                cliquez ici
              </Link>
            </Text>
          </BoxCookie>
        )}
      </div>
    )
  }
}
