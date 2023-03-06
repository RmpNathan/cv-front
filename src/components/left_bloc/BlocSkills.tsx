import React from "react";
import { Box, Flex, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import './Bloc.scss'
import '../../assets/variables.scss'
import Rating from '../rating/Rating'
import BlocTitle from './bloc_components/BlocTitle'

export default function BlocSkills() {
  type Skill = {
    title: string;
    rate: number;
  };
  const [skills, setSkills] = React.useState([])
  React.useEffect(() => {
    fetch("/skills")
    .then((res) => res.json())
    .then((data) => setSkills(data));
  }, []);
  return(
    <Box w='100%'>
      <BlocTitle title='Competences' />
      {skills.map((skill: Skill, index) => {
        return <Rating title={skill.title} rate={skill.rate}/>
      })}
    </Box>
  )
}
