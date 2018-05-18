import React from 'react'
import { Text, Box, Flex } from 'rebass'
import SupporterForm from '../SupporterForm'
import SupporterList from '../SupporterList'

const Supporter = () => (
  <Box id="supporter" width={1 / 3}>
    <SupporterForm />
    <SupporterList />
  </Box>
)
export default Supporter
