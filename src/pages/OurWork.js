import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
// images
import athlete from "../assets/img/athlete-small.png";
import theracer from "../assets/img/theracer-small.png";
import goodtimes from "../assets/img/goodtimes-small.png";
// framer motion 
import { pageAnim, fade, slowFade, photoAnim, lineAnim } from "../animation";
import { motion } from "framer-motion";
// scroll anim
import { useScroll } from '../components/UseScroll';

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <StyledWork variants={pageAnim} initial='hidden' animate='show' exit='exit'>
            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/ourwork/the-athlete">
                    <Styledhide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Styledhide>
                </Link>
            </StyledMovie>
            <StyledMovie variants={slowFade} ref={element} animate={controls} initial='hidden'>
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} animate={controls} initial='hidden' ref={element} className="line"></motion.div>
                <Link to="/ourwork/the-racer">
                    <img src={theracer} alt="theracer" />
                </Link>
            </StyledMovie>
            <StyledMovie variants={slowFade} ref={element2} animate={controls2} initial='hidden'>
                <h2>The Goodtimes</h2>
                <motion.div variants={lineAnim} animate={controls2} initial='hidden' ref={element2} className="line"></motion.div>
                <Link to="/ourwork/goodtimes">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </StyledMovie>
        </StyledWork>
    );
}

const StyledWork = styled(motion.div)`
    min-height:100vh;
    overflow:hidden;
    padding:5rem 10rem;
    h2{
        padding:1rem 0rem;
        color:#23d997;
    }
    @media(max-width:900px){
        padding:2rem 2rem;
    }
`;
const StyledMovie = styled(motion.div)`
    padding-bottom:10rem;
    .line{
        height:0.3rem;
        background:#ccc;
        margin-bottom:3rem;
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`;
const Styledhide = styled.div`
    overflow:hidden;
`;

export default OurWork;