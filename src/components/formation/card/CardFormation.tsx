import React from "react";
import {Box, CardBody, CardHeader, Heading, Text, Card} from "@chakra-ui/react";
import {MdSettings} from "react-icons/md";
import {Icon} from "@chakra-ui/icons";
import DateDisplay from "../../date/DateDisplay";
import './CardFormation.scss'
export default function CardFormation ({title = "", description = "", startDate = "", endDate = "", timeline = false, darkMode = false, classTimeline = "" }) {
    return (
        <Card shadow={'0px 0px 13px 0px rgba(153,207,181,0.4)'} textAlign={'left'} bgColor={darkMode ? '#514C4A' : '#fff'} color={darkMode ? '#fff' : '#514C4A'} className={timeline ? 'card-box-cv card-timeline ' + classTimeline : 'card-box-cv' + classTimeline } height={'100%'}>
            <CardHeader>
                <Heading fontSize={'18px'}>
                    {title}
                </Heading>
                <Text color={darkMode ? '#fff' : '#514C4A'} fontSize='sm'><DateDisplay date={startDate} /> - <DateDisplay date={endDate} /></Text>
            </CardHeader>
            <CardBody>
                <Box>
                    <Text color={darkMode ? '#fff' : '#514C4A'} pt='2' fontSize='16px'>
                        {description}
                    </Text>
                </Box>
            </CardBody>
        </Card>
    )
}