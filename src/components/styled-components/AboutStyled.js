import styled from 'styled-components'

export const AboutSectionTitle = styled.div`
font-size: 1.50em;
align-items: center;
text-align: center;
width: 100%;
margin-bottom: 7px;
margin-top: 3px;
img {
padding-right: 5px;
}
`

export const AboutContainer = styled.div`
background-color: #9B5144;
color: whitesmoke;
/* border: solid 1px green; */
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
/* height: 900px; */
/* font-size: 30px; */
`
export const AboutCard = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 5%;
margin-right: 10%;
width: 100%;
@media (max-width: 414px){
    margin: auto;
}

@media (max-width: 375px){
    margin: auto;
}
`

export const AboutText = styled.div`
width: 60vw;
padding-left:10px;
margin: auto;

p {
    font-size: 16px;
}
@media (max-width: 414px){
    width: 90%;
}

@media (max-width: 375px){
    width: 90%;
}
`
export const AboutImage = styled.div`
@media (max-width: 414px){
    margin: auto;
}
@media (max-width: 375px){
    margin: auto;
}
img {
    width: 175px;
    height: 175px;
    border-radius: 3px;
    padding: 5px;

}
`