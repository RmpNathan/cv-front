import React from "react";
import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { MdSettings } from 'react-icons/md'

export default function TextIcon({ title = 'default titles' }) {
  return(
    <Box color='white' padding='5px 10px 10px 0'>
      <Flex align='center'>
        <Icon as={MdSettings} className='icon' padding='5px' boxSize={6} bg='white' color='#99CFB5' />
        <Text color='#000'>
          {title}
        </Text>
      </Flex>
    </Box>
  )
}
