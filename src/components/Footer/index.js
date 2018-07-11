import React from 'react'
import { Flex, Box, Text, Link, Absolute, Relative } from 'rebass'
import Cookie from '../Cookie'

const Footer = () => (
  <footer>
    <Flex justifyContent="center" mt={[5, 6]} mb={5}>
      <Text
        color="dark_blue"
        textAlign="center"
        fontSize={14}
        fontWeight={600}
        style={{ opacity: 0.7 }}
      >
        Vous pouvez contribuer et échanger autour de ce Serment sur notre{' '}
        <Link
          color="dark_blue"
          target="_blank"
          href="https://framavox.org/g/Qtz0JHr9/dataforgood-serment"
        >
          Framavox
        </Link>{' '}
        ou sur notre{' '}
        <Link
          color="dark_blue"
          target="_blank"
          href="https://github.com/dataforgoodfr/batch4_data_manifesto"
        >
          Github
        </Link>. <br />
        <Text fontWeight={300} mt={2}>
          Site web par{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/stevensanseau/"
            color="dark_blue"
          >
            Steven Sanséau
          </Link>{' '}
          - Illustrations par{' '}
          <Link
            target="_blank"
            color="dark_blue"
            href="http://chapottelaurie.fr/"
          >
            Laurie Chapotte
          </Link>
          <br />
        </Text>
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
