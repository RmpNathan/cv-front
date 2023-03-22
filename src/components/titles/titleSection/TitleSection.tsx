import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import React from 'react'
import {MdSettings} from "react-icons/md";


export default function TitleSection ({title = ""}) {
    return (
        <Box marginTop={'25px'} borderBottom={'2px solid #514C4A'}>
            <Flex align='center'>
                <Icon as={MdSettings} className='icon' padding='5px' boxSize={50} color='#99CFB5' />
                <Text color='#514C4A' fontSize={'25px'} textTransform={'uppercase'}>
                    {title}
                </Text>
            </Flex>
        </Box>
    )
}