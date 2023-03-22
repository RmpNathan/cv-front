import React from "react";
import {Box, Flex} from '@chakra-ui/react'
import '../../assets/variables.scss'
import CardFormation from "./card/CardFormation";

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
        <Flex marginTop={'40px'} gap={30} flexWrap={'wrap'} className={'container-formation'} alignItems={'stretch'}>
            {formations.map((formation, index) => {
                return (
                    <Box flexBasis={0} flexGrow={1} className={'column'}>
                        <CardFormation key={index} title={formation.title} description={formation.description} startDate={formation.startDate} endDate={formation.endDate} />
                    </Box>
                )
            })}
        </Flex>
    )
}
