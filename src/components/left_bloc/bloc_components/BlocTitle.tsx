import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import React from "react";

export default function BlocTitle ({title = ""}) {
  return(
    <Box className='bloc' w='200px' color='white' padding='5px 10px'>
      <Flex align='center'>
        <Text>
          {title}
        </Text>
        <Spacer/>
        <StarIcon className='icon' padding='5px' boxSize={6} bg='white' color='#99CFB5' />
      </Flex>
    </Box>
  )
}
