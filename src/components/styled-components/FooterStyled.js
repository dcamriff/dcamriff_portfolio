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


@media (max-width: 375px){
    position: relative;
    flex-direction: column-reverse;
    padding: 30px;
    height: 120px;
}

@media (max-width: 412px){
    position: relative;
    flex-direction: column-reverse;
    padding: 30px;
    height: 120px;
}
`

export const FootLeftContainer = styled.div`
color: white;
margin-left: 15px;
@media (max-width: 375px){
    margin-top: 10px;
    margin-left: 0;
}

@media (max-width: 414px){
    margin-top: 10px;
    margin-left: 0;
}
`
export const FootCenterContainer = styled.div`
color: white;
img {
    width: 32px;
    padding: 0 10px;
}
a {
    text-decoration: none;
    color: white;
}
@media (max-width: 375px){
    /* margin-top: 10px; */
}

@media (max-width: 414px){
    /* margin-top: 10px; */
}
`

export const FootRightContainer = styled.div`
/* background-color: pink; */
/* border: solid 1px black; */
color: white;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 15px;
a {
    text-decoration: none;
    padding: 0 15px;
    color: white;
}
img {
    width: 32px;
    /* padding: 0 10px; */
}
@media (max-width: 375px){
    flex-wrap: wrap;
    margin-top: 10px;
    margin-right: 0;
}
@media (max-width: 414px){
    flex-wrap: wrap;
    margin-top: 10px;
    margin-right: 0;
}
`