import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, Box } from 'rebass'
import { themeGet } from 'styled-system'
import Markdown from 'react-remarkable'

const TextDetails = Text.extend`
  margin-bottom: 20px;
  margin-left: 12.4%;
  font-size: 16px;
  color: ${themeGet('colors.dark_grey')};
  font-family: Circular;
  opacity: 0.7;
  font-weight: 300;
  line-height: 24px;
  text-align: justify;
`

const TextTitle = Text.extend`
  margin-bottom: 20px;
  margin-left: 12.4%;
  font-size: 16px;
  color: ${themeGet('colors.supporter_grey')};
  font-weight: 300;
  line-height: 24px;
  text-align: justify;
`

const TextMore = Text.extend`
  cursor: pointer;
  color: ${themeGet('colors.supporter_grey')};
  text-decoration: underline;
  font-weight: 300;
`

export default class Detail extends Component {
  static propTypes = {
    detail: PropTypes.object,
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
    this.toggleShowDetail = this.toggleShowDetail.bind(this)
  }

  toggleShowDetail = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { detail } = this.props
    const { isOpen } = this.state
    return (
      <Box>
        <TextTitle>
          {detail.title}{' '}
          <TextMore is="span" color="dark_blue" onClick={this.toggleShowDetail}>
            {!isOpen && <span>Lire la suite</span>}
            {isOpen && <span>Lire moins</span>}
          </TextMore>
        </TextTitle>

        {isOpen && (
          <TextDetails>
            <Markdown source={detail.text} />
          </TextDetails>
        )}
      </Box>
    )
  }
}
