import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { titleAnim, pageAnim } from '../animation';
import ScrollTop from '../components/Refresh';

const ContactUs = () => {
    return (
        <StyledContact variants={pageAnim} initial="hidden" animate='show' exit='exit' >
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </StyledHide>
            </StyledTitle>
            <div>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h4>Twitter</h4>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h4>Email</h4>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h4>Facebook</h4>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h4>Instagram</h4>
                    </StyledSocial>
                </StyledHide>
            </div>
            <ScrollTop />
        </StyledContact>
    );
}

const StyledContact = styled(motion.div)`
    padding:5rem 10rem;
    color:whitesmoke;
    min-height:90vh;
    @media(max-width:900px){
        padding:2rem;
        font-size:1rem;
    }
`
const StyledTitle = styled.div`
    margin-bottom:2rem;
    color:whitesmoke;
`
const StyledHide = styled.div`
overflow:hidden;
`
const StyledCircle = styled.div`
    border-radius:50%;
    width:1rem;
    height:1rem;
    background:whitesmoke;
`
const StyledSocial = styled(motion.div)`
    display:flex;
    align-items:center;
    h4{
        margin:1rem 2rem;
    }
`

export default ContactUs;