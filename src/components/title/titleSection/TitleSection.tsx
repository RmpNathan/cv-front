import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';
import {MdSettings} from "react-icons/md";
export default function TitleSection ({title = ""}) {
    return (
        <Box>
            <Flex align='center'>
                <Icon as={MdSettings} className='icon' padding='5px' boxSize={50} color='#99CFB5' />
                <Text color='#514C4A' fontSize={'25px'} textTransform={'uppercase'}>
                    {title}
                </Text>
            </Flex>
        </Box>
    )
}