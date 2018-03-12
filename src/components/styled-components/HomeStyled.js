import styled from 'styled-components'
import HomeImage from './img/octane_thejane_0001_web.jpg'

export const HomeWrapper = styled.div`
display: flex;
flex-wrap: wrap;
/* width: 100%; */
/* justify-content: space-around; */
@media (max-width: 412){
    width: 100vw;
    /* flex-wrap: wrap-reverse; */
    /* flex-direction: column-reverse; */
}
`

export const HomeNavBackground = styled.div`
/* height: 156px; */
height: 21vh;
background-color: #DDEDE8;

@media (max-width: 375px){
height: 38vh;
}
`

export const HomeContent = styled.div`
background: url(${HomeImage}) center no-repeat;
background-size: cover;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
height: 68vh;

@media (max-width: 412px){
    flex-wrap: wrap;
    flex-direction: column-reverse;
    /* height: 450px; */
}
`
export const HomeText = styled.div`
width: 50%;
font-size: calc(1em + 1vw);
h1 {
    /* color: #A56E60; */
    color: white;
    /* font-size: 4em; */
    margin-left: 10px;
    text-shadow:
    -1px -1px 0 rgba(0,0,0,.3),  
    1px -1px 0 rgba(0,0,0,.3),
    -1px 1px 0 rgba(0,0,0,.3),
    1px 1px 0 rgba(0,0,0,.3);
}

@media (max-width: 412px){
    font-size: 18px;
    margin-left: .5em;
    width: 100%;
}

@media (min-width: 1024px){
    width: 60%;
}
`

export const ProfileImageContainer = styled.div`

img {
    width: 275px;
    border-radius: 50%;
    border: 5px solid white;
    /* margin-right: 15vw; */
    @media (max-width: 615px) and (min-width: 376px){
        width: 200px;
    }
    @media (max-width: 412px){
        align-items: center;
        margin: 1vw;
        width: 250px;
    }

    @media (min-width: 1024px){
        margin-right: 5vw;
        /* width: 305px; */
    }
}
`


