import React from "react";
import home1 from "../assets/img/home1.png";
//style
import { StyledAbout, StyledDescription, StyledHide, StyledImg } from '../styles';
// framer
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from "./Wave";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim} initial='hidden' animate='show' exit='exit'>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim} initial='hidden' animate='show' exit='exit'>your<span> dreams</span></motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim} initial='hidden' animate='show' exit='exit'>comes true.</motion.h2>
                    </StyledHide>
                </div>
                <motion.p variants={fade}>
                    Contact us for any wedding event or party.
                    We have professionals to handle all types of events.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImg>
                <motion.img variants={photoAnim} src={home1} alt="wallhanging" />
            </StyledImg>
            <Wave />
        </StyledAbout>
    );
}

export default AboutSection;
