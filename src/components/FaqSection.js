import React from 'react';
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any Question <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?" >
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam hic ullam deleniti repudiandae, voluptatem temporibus!</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule" >
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam hic ullam deleniti repudiandae, voluptatem temporibus!</p>
                    </div>
                </Toggle>
                <Toggle title="Payment Methods" >
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam hic ullam deleniti repudiandae, voluptatem temporibus!</p>
                    </div>
                </Toggle>
                <Toggle title="What services do we offer?" >
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam hic ullam deleniti repudiandae, voluptatem temporibus!</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>

    );
}

const StyledFaq = styled(StyledAbout)`
    display:block;
    span{
        display:block;
        padding-bottom:3rem;
    }
    h2{
        padding:2rem;
        font-weight:lighter;
    }
    .line{
        height:1.5px;
        width:100%;
        margin:2rem 0;
        background:#ccc;
    }
    .question{
        cursor:pointer;        
    }
    
`;

export default FaqSection;