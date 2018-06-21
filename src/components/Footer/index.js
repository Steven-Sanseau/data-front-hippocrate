import React from 'react'
import { Flex, Box, Text, Link, Absolute, Relative } from 'rebass'
import Cookie from '../Cookie'

const Footer = () => (
  <footer>
    <Flex justifyContent="center" mt={[5, 6]}>
      <Text
        color="dark_blue"
        textAlign="center"
        fontSize={14}
        fontWeight={300}
        style={{ opacity: 0.7 }}
      >
        Ce projet est porté dans le cadre de la saison d’accélération de
        l’association{' '}
        <Link
          color="dark_blue"
          href="http://www.dataforgood.fr/?utm_source=hippocrate_batch4&utm_campaign=heading_website"
          target="_blank"
        >
          Data For Good
        </Link>
        <br />
        Des mises à jour régulières sont prévues. Vous pouvez contribuer et
        échanger autour de ce Serment sur notre{' '}
        <Link
          color="dark_blue"
          target="_blank"
          href="https://framavox.org/g/Qtz0JHr9/dataforgood-serment"
        >
          Framavox
        </Link>. <br />
        Illustrations par{' '}
        <Link
          target="_blank"
          color="dark_blue"
          href="http://chapottelaurie.fr/"
        >
          Laurie Chapotte
        </Link>
        <br />
      </Text>
    </Flex>
    <Relative>
      <Absolute right={0} bottom={0}>
        <Cookie />
      </Absolute>
    </Relative>
  </footer>
)

export default Footer
