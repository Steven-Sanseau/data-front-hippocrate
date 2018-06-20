import React from 'react'
import { Text, Box } from 'rebass'
import { themeGet } from 'styled-system'
import Markdown from 'react-remarkable'

import Link from '../Markdown/Link'
import Detail from '../Detail'

const TextPrinciple = Text.extend`
  margin-top: 1.8%;
  margin-left: 11.4%;
  font-size: 16px;
  color: ${themeGet('colors.dark_grey')};
  font-family: Circular;
  font-weight: 300;
  line-height: 24px;
  text-align: justify;
  img {
    width: 75%;
    height: auto;
  }
`

const Principle = ({ principle }) => (
  <div>
    <Box key={principle._id}>
      <TextPrinciple>
        <Markdown
          source={`... ${principle.title}`}
          options={{ linkTarget: '_blank' }}
        />
      </TextPrinciple>
      {principle.detail.length > 0 &&
        principle.detail.map(detail => (
          <Detail key={detail._id} detail={detail} />
        ))}
    </Box>
  </div>
)

export default Principle
