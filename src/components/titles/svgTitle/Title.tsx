import { Box } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';
import './Title.scss'
export default function Title () {
    // useEffect(() => {
    //     const runAnimation = () => {
    //         anime({
    //             targets: '#calque .cls-1',
    //             strokeDashoffset: [anime.setDashoffset, 0],
    //             duration: 2000,
    //             easing: 'linear',
    //             loop: false,
    //             complete: function () {
    //                 console.log("finish")
    //             }
    //         });
    //     };
    //     runAnimation();
    // }, []);
    return (
        <Box maxWidth={'800px'} margin={'0 auto'} textAlign={"center"}>
            <svg id="calque" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.75 67.17">
                <defs>
                </defs>
                <path className="cls-1" d="M25.11,4.56h5.58L43.57,21.48V4.56h6V32H44.4L31.08,14.57V32h-6Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-1"
                      d="M65.57,4.36h5.58L82.93,32H76.61l-2.51-6.17H62.47L60,32H53.79Zm6.36,16.18-3.65-8.92-3.65,8.92Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-1" d="M90,10.13H81.68V4.56h22.78v5.58H96.09V32H90Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-1" d="M109.1,4.56h6V15.44H126.3V4.56h6V32h-6V21H115.15V32h-6Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-1"
                      d="M148.38,4.36H154L165.74,32h-6.32l-2.51-6.17H145.27L142.76,32h-6.17Zm6.36,16.18-3.65-8.92-3.65,8.92Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-1" d="M170,4.56h5.58l12.88,16.93V4.56h6V32h-5.15L176,14.57V32h-6Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M232.32,32l-8-10.68h-7.85V32h-3.1V4.56h11.82c6,0,9.94,3.26,9.94,8.21,0,4.6-3.14,7.27-7.46,8.05L236.13,32ZM225,7.42h-8.48V18.58h8.44c4.12,0,7.07-2.12,7.07-5.69C232,9.47,229.42,7.42,225,7.42Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M267.4,32h-3.34l-3.22-7.27h-15L242.62,32h-3.18L252,4.36h2.91ZM253.38,8l-6.28,14h12.53Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M286,24.51h-.16l-10-14.69V32h-3V4.56H276l10,15,10-15h3.14V32H296V9.78Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M316.7,22.35H310V32h-3.1V4.56h10.29c6.21,0,10.29,3.3,10.29,8.76C327.5,19.28,322.56,22.35,316.7,22.35ZM317,7.42h-7v12.1h6.79c4.56,0,7.54-2.44,7.54-6.09C324.36,9.47,321.42,7.42,317,7.42Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M336.54,4.56V32h-3.1V4.56Z" transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M344.6,4.56h3.1V29.18h15.47V32H344.6Z" transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M368.91,4.56H372V29.18h15.47V32H368.91Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M404.42,32.52c-8.37,0-14-6.56-14-14.18A13.94,13.94,0,0,1,404.5,4.08c8.37,0,14,6.56,14,14.18A13.94,13.94,0,0,1,404.42,32.52Zm0-25.57c-6.28,0-10.76,5-10.76,11.31s4.56,11.39,10.84,11.39,10.76-5,10.76-11.31S410.7,7,404.42,7Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M445.27,4.56h3V32h-2.47L428.07,9.5V32h-3V4.56H428l17.32,22Z"
                      transform="translate(-5.33 -4.08)"/>
                <line className="cls-3" x1="4.43" y1="38.57" x2="457.49" y2="38.57"/>
                <circle className="cls-3" cx="4.34" cy="38.66" r="3.84"/>
                <circle className="cls-3" cx="457.4" cy="38.66" r="3.84"/>
                <path className="cls-2"
                      d="M107.31,70.94H101V52.61h6.36c5.76,0,9.74,4,9.74,9.14S113.07,70.94,107.31,70.94Zm0-16.42H103V69h4.29c4.63,0,7.59-3.14,7.59-7.23S111.95,54.52,107.31,54.52Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M134.68,54.5H123.5v6.26h10v1.88h-10v6.42h11.31v1.88H121.43V52.61h13.25Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M152.78,52.61H155l-7.88,18.46h-1.83l-7.88-18.46h2.3l6.52,15.79Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M171.87,54.5H160.69v6.26h10v1.88h-10v6.42H172v1.88H158.62V52.61h13.25Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M176.17,52.61h2.07V69h10.32v1.91H176.17Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M199.84,71.25a9.48,9.48,0,1,1,9.37-9.5A9.21,9.21,0,0,1,199.84,71.25Zm0-17a7.21,7.21,0,0,0-7.17,7.54,7.29,7.29,0,0,0,7.23,7.59,7.21,7.21,0,0,0,7.17-7.54A7.29,7.29,0,0,0,199.84,54.21Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M220.11,64.47h-4.45v6.47h-2.07V52.61h6.86c4.14,0,6.86,2.2,6.86,5.84C227.31,62.43,224,64.47,220.11,64.47Zm.18-9.95h-4.63v8.06h4.53c3,0,5-1.62,5-4.06C225.21,55.88,223.25,54.52,220.29,54.52Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M237.6,64.47h-4.45v6.47h-2.07V52.61h6.86c4.14,0,6.86,2.2,6.86,5.84C244.8,62.43,241.5,64.47,237.6,64.47Zm.18-9.95h-4.63v8.06h4.53c3,0,5-1.62,5-4.06C242.71,55.88,240.75,54.52,237.79,54.52Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M261.83,54.5H250.65v6.26h10v1.88h-10v6.42H262v1.88H248.58V52.61h13.25Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M281.1,63.11c0,5.34-3.06,8.12-7.65,8.12s-7.62-2.78-7.62-8V52.61h2.07V63.14c0,4,2.09,6.18,5.6,6.18s5.52-2,5.52-6V52.61h2.07Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M298.62,70.94l-5.32-7.12h-5.24v7.12H286V52.61h7.88c4,0,6.63,2.17,6.63,5.47,0,3.06-2.09,4.84-5,5.37l5.63,7.49Zm-4.9-16.42h-5.66V62h5.63c2.75,0,4.71-1.41,4.71-3.8S296.68,54.52,293.72,54.52Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M323.89,52.56h1.7l5,15.32,5.24-15.27H338l-6.55,18.46h-1.75l-5-14.87-5.05,14.87h-1.73l-6.55-18.46h2.25l5.24,15.27Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2" d="M355,54.5H343.85v6.26h10v1.88h-10v6.42h11.31v1.88H341.78V52.61H355Z"
                      transform="translate(-5.33 -4.08)"/>
                <path className="cls-2"
                      d="M373.1,57.19a4.44,4.44,0,0,1-2.91,4.27c2.17.65,3.93,1.91,3.93,4.45,0,3.17-2.65,5-6.65,5h-8.14V52.61h7.8C370.74,52.61,373.1,54.39,373.1,57.19Zm-2.09.29c0-1.83-1.44-3-4.06-3h-5.58v6.31h5.42C369.28,60.78,371,59.65,371,57.48Zm1,8.3c0-2-1.68-3.17-4.87-3.17h-5.79v6.47h6.15C370.3,69.08,372,67.85,372,65.78Z"
                      transform="translate(-5.33 -4.08)"/>
            </svg>
        </Box>
    )
}