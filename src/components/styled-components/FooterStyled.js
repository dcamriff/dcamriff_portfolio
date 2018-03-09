import styled from 'styled-components'

export const FootContainer = styled.div`
background-color: black;
color: white;
/* border: solid 1px green; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px;
height: 50px;
z-index: 999;
position: fixed;
bottom: 0;
right: 0;
left: 0;


@media only screen (max-width: 412px){

}
`

export const FootLeftContainer = styled.div`
color: white;
/* background-color: pink; */
/* border: solid 1px black; */
`
export const FootCenterContainer = styled.div`
color: white;
/* background-color: pink; */
/* border: solid 1px black; */
`

export const FootRightContainer = styled.div`
/* background-color: pink; */
/* border: solid 1px black; */
color: white;
display: flex;
justify-content: space-between;
align-items: center;
a {
    text-decoration: none;
    padding: 0 15px;
    color: white;
}
`