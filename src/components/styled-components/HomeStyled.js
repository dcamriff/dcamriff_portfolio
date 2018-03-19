import styled from 'styled-components'
import HomeImage from './img/octane_thejane_0001_web.jpg'

export const HomeWrapper = styled.div`
width: 100vw;
`

export const HomeNavBackground = styled.div`
height: 21vh;
width: 100vw;
background-color: #DDEDE8;

@media (max-width: 700px){
    height: 0px;
}

@media (max-width: 375px){
    height: 0px;

}

@media (max-width: 414px){
    height: 0px;
}
`

export const HomeContent = styled.div`
background: url(${HomeImage}) center no-repeat;
width: 100%;
background-size: cover;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
height: 68vh;
margin: auto;

@media (max-width: 414px){
    /* flex-wrap: wrap; */
    /* flex-direction: column-reverse; */
    height: 550px;
}

@media (max-width: 375px){
    /* flex-wrap: wrap; */
    /* flex-direction: column-reverse; */
    height: 550px;
`
export const HomeText = styled.div`
width: 60%;
font-size: calc(1em + 1vw);
background-color: rgba(0,0,0,.5);
align-content: center;
border-top-right-radius: 1%;
border-bottom-right-radius: 1%;
h1 {
    /* color: #A56E60; */
    color: whitesmoke;
    /* font-size: 4em; */
    margin-left: 50px;
    text-shadow:
    -1px -1px 0 rgba(0,0,0,.3),  
    1px -1px 0 rgba(0,0,0,.3),
    -1px 1px 0 rgba(0,0,0,.3),
    1px 1px 0 rgba(0,0,0,.3);
}

@media (max-width: 375px){
    font-size: 12px;
    /* margin-left: 1px; */
    width: 100%;
}

@media (max-width: 414px){
    font-size: 12px;
    /* margin-left: 1px; */
    width: 100%;
}
/* @media (min-width: 1024px){
    width: 60%;
} */
`

export const ProfileImageContainer = styled.div`
width: 40%;
margin: auto;
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 275px;
    border-radius: 50%;
    border: 5px solid whitesmoke;
}
@media (max-width: 100px){
        width: 90%;
    }
@media (max-width: 375px){
    width: 100%;
    align-items: center;
    
}
@media (max-width: 414px){
    align-items: center;
    margin: auto;
}
@media (min-width: 1024px){
        /* margin-right: 5vw; */
    }
`


