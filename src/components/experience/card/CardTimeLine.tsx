import React from "react";
import {Box, Card, CardBody, CardHeader, Heading, Text} from "@chakra-ui/react";
import DateDisplay from "../../date/DateDisplay";
import './CardTimeLine.scss'
export default function CardTimeLine ({title = "", description = "", startDate = "", endDate = "", timeline = false, darkMode = false, classTimeline = "" }) {
    return (
        <Card textAlign={'left'} bgColor={darkMode ? '#514C4A' : '#fff'} color={darkMode ? '#fff' : '#514C4A'} className={timeline ? 'card-box-cv card-timeline ' + classTimeline : 'card-box-cv' + classTimeline } height={'100%'}>
            <CardHeader paddingLeft={'0'} paddingRight={'0'} textAlign={'center'} borderBottom={'2px solid #99CFB5'} margin={'0 35px'}>
                <Heading fontSize={'18px'} fontFamily={'GothamBold'} color={'#99CFB5'} size='sm'>
                    {title}
                </Heading>
                <Text className={'date'} color={darkMode ? '#fff' : '#514C4A'} fontSize='15px'>
                    <DateDisplay date={startDate} /> - <DateDisplay date={endDate} />
                </Text>
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