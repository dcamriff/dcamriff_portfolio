import styled from 'styled-components'

export const NavContainer = styled.div`
background-color: rgba(221, 237, 232, .9);
border-bottom: solid 2px whitesmoke;
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px;
/* height: 150px; */
height: 20vh;
width: 100vw;
position: fixed;
z-index: 999;

@media (max-width: 375px){
    height: 50vh;
    font-size: 4vw;
    position: initial;
    flex-wrap: wrap;
    justify-content: flex-start;
}

@media (max-width: 414px){
    height: 50vh;
    font-size: 4vw;
    position: initial;
    flex-wrap: wrap;
    justify-content: flex-start;
}

@media (max-width: 707px){
    height: 35vh;
    position: initial;
    flex-wrap: wrap;
    justify-content: flex-start;
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

export const LinksContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 7px;
a {
    text-decoration: none;
    padding: 0 15px;
    color: black;
    font-size: 1.5em;
}
@media (max-width: 412px){
    flex-wrap: wrap;
}
`