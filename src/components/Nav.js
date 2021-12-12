import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StylesNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <StyledLine transition={{ duration: 0.65 }} initial={{ width: 0 }} animate={{ width: pathname === '/' ? '50%' : '0%' }} />
                </li>
                <li>
                    <Link to="/ourwork">2. Our Work</Link>
                    <StyledLine transition={{ duration: 0.65 }} initial={{ width: 0 }} animate={{ width: pathname === '/ourwork' ? '50%' : '0%' }} />
                    <StyledLine transition={{ duration: 0.65 }} initial={{ width: 0 }} animate={{ width: pathname === '/ourwork/the-athlete' ? '50%' : '0%' }} />
                    <StyledLine transition={{ duration: 0.65 }} initial={{ width: 0 }} animate={{ width: pathname === '/ourwork/the-racer' ? '50%' : '0%' }} />
                    <StyledLine transition={{ duration: 0.65 }} initial={{ width: 0 }} animate={{ width: pathname === '/ourwork/goodtimes' ? '50%' : '0%' }} />
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <StyledLine transition={{ duration: 0.65 }} initial={{ width: 0 }} animate={{ width: pathname === '/contact' ? '50%' : '0%' }} />
                </li>
            </ul>
        </StylesNav>
    );
}

const StylesNav = styled.nav`
    min-height:10vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding:1rem 10rem 0rem 10rem;
    background:#282828;
    position:sticky;
    z-index:7;
    top:0;
    a{
        color:white;
        text-decoration:none;
        
    }
    ul{
        display:flex;
        list-style:none;
    }
    #logo{
        font-size:2rem;
        font-weight:lighter;
        font-family:"Lobster", cursive;
    }
    li{
        padding: 0rem 2rem;
        position:relative;
    }
    @media(max-width:900px){
        flex-direction:column;
        padding:2rem 0rem;
        padding:1rem;
        ul{
            padding:1rem;
            justify-content:space-between;
            width:100%;
            li{
                position:relative;
                padding-left:2rem;                
            }

        }
    }

`;
const StyledLine = styled(motion.div)`
    height:0.13rem;
    background:#23d997;
    width:0%;
    position:absolute;
    bottom:-5%;
    left:25%;
`;

export default Nav;