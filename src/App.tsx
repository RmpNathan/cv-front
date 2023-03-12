import React, {useEffect} from "react";
import "./App.scss";
import {Box, ChakraProvider, Grid, GridItem, Text} from '@chakra-ui/react'
import {Picture} from './components/Picture'
import BlocContact from './components/left_bloc/BlocContact'
import BlocSkills from './components/left_bloc/BlocSkills'
import anime from "animejs/lib/anime.es.js";

export default function App() {

  useEffect(() => {
    const runAnim2 = () => {
      anime({
        targets: '#calque .cls-1',
        fill: '#99CFB5',
        duration: 1000,
        direction: 'alternate',
        easing: 'easeInOutSine',
        loop: false,
        complete: () => {
          console.log('show the rest of the webpage')
        }
      });
    }
    const runAnimation = () => {
      anime({
        targets: '#calque .cls-1',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 2000,
        easing: 'linear',
        loop: false,
        complete: function () {
          console.log("toto")
          // runAnim2()
        }
      });
    };
    runAnimation();
  }, []);

  return (
    <ChakraProvider>
      <main>
        <Grid
          templateRows='repeat(2, 1fr)'
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
          <GridItem colSpan={4}>
            <Box padding={"50px 200px"}>
              <Text textAlign={"center"} fontSize={"30px"}>
                <svg id="calque" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.19 21.72">
                  <path className="cls-1" d="M1.18.52H5.44l9.84,12.93V.52h4.56v21H15.91L5.74,8.17V21.52H1.18Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-1"
                        d="M32.08.37h4.26l9,21.15H40.51l-1.92-4.71H29.71l-1.92,4.71H23.08Zm4.86,12.36L34.15,5.92l-2.79,6.81Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-1" d="M50.77,4.78H44.38V.52h17.4V4.78H55.39V21.52H50.77Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-1" d="M65.32.52h4.62V8.83h8.52V.52h4.62v21H78.46V13.09H69.94v8.43H65.32Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-1"
                        d="M95.32.37h4.26l9,21.15h-4.83l-1.92-4.71H92.95L91,21.52H86.32Zm4.86,12.36L97.39,5.92,94.6,12.73Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-1" d="M111.82.52h4.26l9.84,12.93V.52h4.56v21h-3.93L116.38,8.17V21.52h-4.56Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2"
                        d="M159.43,21.52l-6.09-8.16h-6v8.16H145V.52h9c4.62,0,7.59,2.49,7.59,6.27,0,3.51-2.4,5.55-5.7,6.15l6.45,8.58ZM153.82,2.71h-6.48v8.52h6.45c3.15,0,5.4-1.62,5.4-4.35S157.21,2.71,153.82,2.71Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2"
                        d="M186.22,21.52h-2.55L181.21,16H169.78l-2.49,5.55h-2.43L174.43.37h2.22ZM175.51,3.13l-4.8,10.71h9.57Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2"
                        d="M200.44,15.76h-.12L192.67,4.54v17h-2.31V.52h2.4L200.41,12,208.06.52h2.4v21h-2.37v-17Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2"
                        d="M223.87,14.11h-5.1v7.41H216.4V.52h7.86c4.74,0,7.86,2.52,7.86,6.69C232.12,11.77,228.34,14.11,223.87,14.11Zm.21-11.4h-5.31V12H224c3.48,0,5.76-1.86,5.76-4.65C229.72,4.27,227.47,2.71,224.08,2.71Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2" d="M239,.52v21h-2.37V.52Z" transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2" d="M245.17.52h2.37V19.33h11.82v2.19H245.17Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2" d="M263.74.52h2.37V19.33h11.82v2.19H263.74Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2"
                        d="M290.86,21.88a10.55,10.55,0,0,1-10.68-10.83A10.71,10.71,0,1,1,301.6,11,10.65,10.65,0,0,1,290.86,21.88Zm0-19.53c-4.8,0-8.22,3.84-8.22,8.64s3.48,8.7,8.28,8.7,8.22-3.84,8.22-8.64S295.66,2.35,290.86,2.35Z"
                        transform="translate(-1.18 -0.16)"/>
                  <path className="cls-2" d="M322.06.52h2.31v21h-1.89L308.92,4.3V21.52h-2.31V.52h2.22l13.23,16.83Z"
                        transform="translate(-1.18 -0.16)"/>
                </svg>
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </main>
    </ChakraProvider>
  );
}
