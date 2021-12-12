import React from "react";
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/Refresh';
// framer motion 
import { pageAnim } from "../animation";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <motion.div variants={pageAnim} initial='hidden' animate='show' exit='exit'>
            <AboutSection />
            <ServiceSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    )
}
export default AboutUs;