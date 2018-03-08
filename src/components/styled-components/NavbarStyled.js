import styled from 'styled-components'

export const NavContainer = styled.div`
background-color: #DDEDE8;
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px;
/* height: 150px; */
height: 20vh;
width: 100vw;
position: fixed;

@media (max-width: 412px){
    flex-wrap: wrap;
    height: 35vh;
}
`
export const LogoContainer = styled.div`
margin: 50px;

img {
    height: 100px;
}

:hover {
    transform: scale(1.1);
    transition-duration: 2s;
    transition-timing-function: ease;
}
`
export const NavHeaderContainer = styled.div`
background-color: pink;
border: solid 1px black;
`

export const LinksContainer = styled.div`
/* background-color: pink; */
/* border: solid 1px black; */
display: flex;
justify-content: space-between;
align-items: center;
a {
    text-decoration: none;
    padding: 0 15px;
    color: black;
}
@media (max-width: 412px){
    flex-wrap: wrap;
}
`