import styled from 'styled-components';

// styled components
export const StyledAbout = styled.div`
    min-height: 90vh;
    display:flex;    
    align-items:center;
    justify-content:space-around;
    padding:5rem 10rem;
    color:#fff;
    @media(max-width:900px){
        display:block;
        text-align:center;
        padding:2rem;
    }
`;
export const StyledDescription = styled.div`
    flex:1;
    padding-right:1rem;
    h2{
        font-weight:lighter;
    }
    @media(max-width:900px){
        padding:0;
        button{
            margin:2rem 0rem 5rem 0rem;
        }
    }
`;
export const StyledImg = styled.div`
    flex:1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        max-width:70vh;
        object-fit:cover;
        padding-left:5rem;
        
    }
`;

export const StyledHide = styled.div`
    overflow:hidden;
`;

