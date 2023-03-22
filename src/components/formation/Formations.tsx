import React from "react";
import {Box, Flex} from '@chakra-ui/react'
import '../../assets/variables.scss'
import CardCv from "../card/CardCv";

export default function Formations() {
    type Formation = {
        title: string;
        description: string;
        startDate: string;
        endDate: string;
    };
    const [formations, setFormations] = React.useState<Array<Formation>>([])
    React.useEffect(() => {
        fetch("/formations")
            .then((res) => res.json())
            .then((data) => setFormations(data));
    }, []);
    return(
        <Flex marginTop={'40px'} gap={5} flexWrap={'wrap'} className={'container-formation'} alignItems={'stretch'}>
            {formations.map((formation, index) => {
                return (
                    <Box key={index} flexBasis={0} flexGrow={1} className={'column'}>
                        <CardCv title={formation.title} description={formation.description} startDate={formation.startDate} endDate={formation.endDate} />
                    </Box>
                )
            })}
        </Flex>
    )
}
