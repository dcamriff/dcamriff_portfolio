import styled from 'styled-components'
import HomeImage from './img/octane_thejane_0001_web.jpg'

export const HomeNavBackground = styled.div`
height: 156px;
background-color: #DDEDE8;
`

export const HomeContainer = styled.div`
background: url(${HomeImage}) center no-repeat;
background-size: cover;
display: flex;
justify-content: space-between;
align-items: center;
height: 700px;

h1 {
    color: white;
    font-size: 4em;
    /* text-shadow: 2px 2px black; */
}

img {
    width: 300px;
    border-radius: 50%;
    border: 5px solid white;
    margin-right: 15vw;
}
`

export const HomeText = styled.div`
`

