import React from "react";
import {Box, Heading} from '@chakra-ui/react'
import '../Bloc.scss'
import '../../../assets/variables.scss'
import Rating from './rating/Rating'
import BlocTitle from '../blocComponents/BlocTitle'

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
  return (
      <Box w="100%">
        <BlocTitle title="Competences" />
        {skills.map((skill, index) => (
            <Box>
              {index === 0 || skills[index].categorie !== skills[index - 1].categorie ? (
                  <Heading marginBottom={'5px'} marginLeft={'5px'} as={'h2'} color="#99CFB5" fontSize="22px">
                    {skill.categorie}
                  </Heading>
              ) : null}
              <Rating key={index} title={skill.title} rate={skill.rate} />
            </Box>
        ))}
      </Box>
  );
}
