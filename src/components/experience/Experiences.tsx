import React from "react";
import {Box} from '@chakra-ui/react'
import '../../assets/variables.scss'
import CardCv from "../card/CardCv";

export default function Experiences() {
    type Experience = {
        title: string;
        description: string;
        startDate: string;
        endDate: string;
    };
    const [experiences, setExperiences] = React.useState<Array<Experience>>([])
    React.useEffect(() => {
        fetch("/experiences")
            .then((res) => res.json())
            .then((data) => setExperiences(data));
    }, []);
    return(
        <Box textAlign={'center'}>
            {experiences.map((experience, index) => {
                if (index === 1 || index ==2) {
                    return (
                        <span key={index}>
                        <CardCv classTimeline={index === 1 ? "impair trait-bas" : "pair trait-bas"} darkMode={true} title={experience.title} description={experience.description} startDate={experience.startDate} endDate={experience.endDate} timeline={true} />
                    </span>
                    )
                }
                if (index % 2 !== 0 || index == experiences.length) {
                    return (
                    <span key={index}>
                        <CardCv classTimeline={"impair"} darkMode={true} title={experience.title} description={experience.description} startDate={experience.startDate} endDate={experience.endDate} timeline={true} />
                    </span>
                    )
                }
                return (
                    <span key={index}>
                        <CardCv classTimeline={"pair"} darkMode={true} title={experience.title} description={experience.description} startDate={experience.startDate} endDate={experience.endDate} timeline={true} />
                        {/*<svg className={'line'} width="200px" ><line x1="200px" y1="0" x2="0" y2="0"/></svg>*/}
                    </span>
                )
            })}
        </Box>
    )
}
