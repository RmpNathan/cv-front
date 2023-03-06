import React from "react";
import "./App.scss";
import { Box, ChakraProvider, Flex, Grid, GridItem } from '@chakra-ui/react'
import {Picture} from './components/Picture'
import BlocContact from './components/left_bloc/BlocContact'
import BlocSkills from './components/left_bloc/BlocSkills'

export default function App() {
  return (
    <ChakraProvider>
      <main>
        <Box w='100%' h='200px'>
          <Picture />
        </Box>
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <BlocContact />
            <BlocSkills />
          </GridItem>
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={4} bg='tomato' />
        </Grid>
      </main>
    </ChakraProvider>
  );
}
