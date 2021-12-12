import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from '../movieState';
// framer motion 
import { pageAnim } from "../animation";
import { motion } from "framer-motion";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    // useeffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <motion.div variants={pageAnim} initial='hidden' animate='show' exit='exit'>
            {movie && (
                <StyledDetails>
                    <StyledHeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </StyledHeadLine>
                    <StyledAwards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title} />
                        ))}
                    </StyledAwards>
                    <StyledSecondImg>
                        <img src={movie.secondaryImg} alt="movie" />
                    </StyledSecondImg>
                </StyledDetails>
            )}
        </motion.div>
    );
}

const StyledDetails = styled.div`
color:#23d997;
`;
const StyledHeadLine = styled.div`
min-height:90vh;
padding-top: 20vh;
position:relative;
h2{
    position:absolute;
    top:10%;
    left:50%;
    padding-bottom:2rem;
    transform:translate(-50%, -10%);
}
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}
`;
const StyledAwards = styled.div`
    min-height:80vh;
    display:flex;
    margin:5rem 5rem;
    align-items:center;
    justify-content:space-around;
    @media(max-width:900px){
        display:block;
        margin:0.3rem;
    }
`;
const StyledAward = styled.div`
padding:5rem;
@media(max-width:900px){
        padding:1.5rem 1rem
    }
.line{
    width:100%;
    background:#23d997;
    height:0.2rem;
    margin:1rem 0rem;
}
`;
const StyledSecondImg = styled.div`
    min-height:50vh;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

// award component
const Award = ({ title, description }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );

}
export default MovieDetail;