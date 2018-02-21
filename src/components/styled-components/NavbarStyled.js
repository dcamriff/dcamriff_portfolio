import styled from 'styled-components'

export const NavContainer = styled.div`
background-color: #DDEDE8;
/* border: solid 1px green; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px;
height: 150px;
width: 100%;
position: fixed;

@media only screen (max-width: 375px){

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
`