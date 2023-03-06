import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import React from 'react'

export default function Rating({ title = "", rate = 0 }){
  const listItems = [];
  for (let i = 0; i < 5; i++) {
    listItems.push(
      <Box key={i} >
        <Icon key={i} viewBox='0 0 200 200' color={rate > i ? '#529273' : '#99CFB5'}>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      </Box>);
  }
  return (
    <Box width='200px'>
      <Flex align='center'>
        <Text color='#000'>
          {title}
        </Text>
        <Spacer/>
        {listItems}
      </Flex>
    </Box>
  )
}
