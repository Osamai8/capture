import React from 'react';
import home2 from "../assets/img/home2.png"
import money from "../assets/img/money.svg";
import glass from '../assets/img/glass.svg';
import team from '../assets/img/team.svg';
import clock from '../assets/img/clock.svg';
// styles
import styled from 'styled-components';
import { StyledImg, StyledDescription, StyledAbout, } from '../styles';

const ServiceSection = () => {
    return (
        <StyledServices>
            <StyledImage>
                <img src={home2} alt="cupcake" />
            </StyledImage>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img alt='icon' src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img alt='icon' src={team} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img alt='icon' src={money} />
                            <h3>Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img alt='icon' src={glass} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
        </StyledServices>
    )
}

const StyledServices = styled(StyledAbout)`
h2{
    padding-bottom:5rem;
}
p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
}
`;
const StyledCards = styled.div`
    display:flex;
    justify-content:space-between;
    @media(max-width:900px){
        justify-content:center;
    }
      
`;
const StyledCard = styled.div`
    flex-basis:20rem;
    .icon{
        display:flex;
        align-items:center;
        
        h3{
            color:#23d997;
            padding:0.4rem;
        }
        img{
            height:2.7rem;
            width:2.7rem;
            margin-right:1rem;            
            padding-bottom:0.3rem;
        }
    }
`;
const StyledImage = styled(StyledImg)`
    img{
        padding:0rem 5rem 0rem 0rem;
    }
    
`;

export default ServiceSection;