import React from "react";
import "./App.scss";
import {Box, ChakraProvider, Grid, GridItem, Text} from '@chakra-ui/react'
import {Picture} from './components/pictures/roundPicture/Picture'
import BlocContact from './components/leftBloc/BlocContact/BlocContact'
import BlocSkills from './components/leftBloc/BlocSkills/BlocSkills'
import Title from "./components/titles/svgTitle/Title";
import TitleSection from "./components/titles/titleSection/TitleSection";
import Formations from "./components/formation/Formations";
import Experiences from "./components/experience/Experiences";
export default function App() {
  return (
    <ChakraProvider>
      <main>
        <Grid
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Picture />
            <Box marginTop="200px">
              <BlocContact />
              <BlocSkills />
            </Box>
          </GridItem>

          <GridItem padding={'0 50px'} colSpan={4}>
            <section>
              <Box padding={"50px 0px"}>
                <Title/>
              </Box>
              <Box>
                <Text>
                  Passionné par le développement web et les nouvelles technologies, j'ai acquis
                  une expérience en tant que développeur full-stack au sein d'entreprises telles
                  que 14eight, ISI.nc et Amplitudes. Mon parcours professionnel m'a permis de
                  travailler sur des projets variés pour des clients de différents secteurs
                  d'activité (Agence digital, ESN, Agence de voyage). Fort de ces expériences,
                  je suis désormais à la recherche de nouveaux défis et d'opportunités pour
                  continuer à élargir mes compétences et contribuer à des projets ambitieux.
                </Text>
              </Box>
            </section>
            <section>
              <TitleSection title={'formations'}/>
              <Formations/>
            </section>
            <section>
              <TitleSection title={'experiences'}/>
              <Experiences/>
            </section>
          </GridItem>
        </Grid>
      </main>
    </ChakraProvider>
  );
}
