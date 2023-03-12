import React from "react";
import { Box } from '@chakra-ui/react'
import './Bloc.scss'
import '../../assets/variables.scss'
import Rating from '../rating/Rating'
import BlocTitle from './bloc_components/BlocTitle'

export default function BlocSkills() {
  type Skill = {
    title: string;
    rate: number;
    categorie: string;
  };
  const [skills, setSkills] = React.useState<Array<Skill>>([])
  React.useEffect(() => {
    fetch("/skills")
    .then((res) => res.json())
    .then((data) => setSkills(data));
  }, []);
  return(
    <Box w='100%'>
      <BlocTitle title='Competences' />
      {skills.map((skill, index) => {
        if (index === 0 || skill.categorie !== skills[index-1].categorie) {
          return (
              <Box key={index} marginLeft="10px">
                <Box color="#99CFB5" fontSize="22px">{skill.categorie}</Box>
                <Rating title={skill.title} rate={skill.rate}/>
              </Box>
          )
        } else {
          return (
              <Box key={index} marginLeft="10px">
                <Rating title={skill.title} rate={skill.rate}/>
              </Box>
          )
        }
      })}
    </Box>
  )
}
