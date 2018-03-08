import styled from 'styled-components'
import HomeImage from './img/octane_thejane_0001_web.jpg'

export const HomeWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`

export const HomeNavBackground = styled.div`
/* height: 156px; */
height: 18vh;
background-color: #DDEDE8;
@media (max-width: 412px){
height: 38vh;
}
`

export const HomeContent = styled.div`
background: url(${HomeImage}) center no-repeat;
background-size: cover;
display: flex;
justify-content: space-between;
align-items: center;
height: 700px;

@media (max-width: 412px){
    flex-wrap: wrap;
    flex-direction: column-reverse;
    /* width: 100vw; */
    /* height: 400px; */
}

h1 {
    color: #C9A190;
    font-size: 4em;
    @media (max-width: 412px){
        font-size: 2em;
        margin-left: .5em;
    }
}

img {
    width: 300px;
    border-radius: 50%;
    border: 5px solid white;
    margin-right: 15vw;
    @media (max-width: 412px){
        align-items: center;
        margin: 1vw;
        width: 250px;
    }
    @media (min-width: 768px){
        margin-right: 15vw;
    }
}
`

export const HomeText = styled.div`
`

