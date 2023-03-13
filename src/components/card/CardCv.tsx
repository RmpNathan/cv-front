import React from "react";
import {Box, CardBody, CardHeader, Heading, Text, Card} from "@chakra-ui/react";
import {MdSettings} from "react-icons/md";
import {Icon} from "@chakra-ui/icons";
import DateDisplay from "../date/DateDisplay";

export default function CardCv ({title = "", description = "", startDate = "", endDate = "", timeline = false, darkMode = false, classTimeline = "" }) {
    return (
        <Card textAlign={'left'} bgColor={darkMode ? '#514C4A' : '#fff'} color={darkMode ? '#fff' : '#514C4A'} className={timeline ? 'card-box-cv card-timeline ' + classTimeline : 'card-box-cv' + classTimeline } height={'100%'}>
            <CardHeader>
                <Heading size='sm'>
                    <Icon as={MdSettings} className='icon' padding='5px' boxSize={25} color='#99CFB5' />
                    {title}
                </Heading>
                <Text color={darkMode ? '#fff' : '#514C4A'} fontSize='sm'><DateDisplay date={startDate} /> - <DateDisplay date={endDate} /></Text>
            </CardHeader>
            <CardBody>
                <Box>
                    <Text color={darkMode ? '#fff' : '#514C4A'} pt='2' fontSize='sm'>
                        {description}
                    </Text>
                </Box>
            </CardBody>
        </Card>
    )
}