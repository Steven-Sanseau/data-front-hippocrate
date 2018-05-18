import React from 'react'
import Link from 'gatsby-link'
import FillFooter from '../Svg/FillFooter'
import { Relative, Absolute, Box } from 'rebass'

const Footer = () => (
  <div>
    <Relative>
      <Absolute top={0} left={0}>
        <FillFooter />
      </Absolute>
    </Relative>
    <Box>
      Ce projet a été porté dans le cadre de la saison d’accélération de
      l’association Data For Good
    </Box>
  </div>
)

export default Footer
