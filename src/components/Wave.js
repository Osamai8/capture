import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Wave = () => {
    return (
        <StyledWaveSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1932.46 641"
            fill='none'
        >
            <motion.path initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0, transition: { duration: 2 } }}
                stroke='#22d997'
                stroke-opacity='0.9'
                stroke-width='26px' d="M0,73.12C210.14,319.47,503.64,446.78,665.07,460.71c287.77,24.85,452.34-156.91,759.44-106.39,229.42,37.74,395.81,182.42,495.49,289.83" transform="translate(6.6 -8.6)" />
        </StyledWaveSvg>
    );
};

const StyledWaveSvg = styled.svg`
position:absolute;
left:0;
width:100%;
z-index:1;
`;


export default Wave;