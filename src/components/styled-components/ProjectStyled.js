import styled from 'styled-components'

export const ProjectSectionTitle = styled.div`
font-size: 2em;
align-items: center;
text-align: center;
`

export const ProjectsContainer = styled.div`
display: flex;
flex-wrap: wrap;
/* justify-content: flex-start; */
align-items: center;
border: solid 1px white;
/* margin-left: 4vw; */

@media (max-width: 375px){
    margin-left: 0;
}

img {
    /* width: 500px; */
    /* height: 400px; */
    /* border: solid 1px white; */
    /* @media (max-width: 375px){ */
        /* width: 372px; */
        /* height: 300px; */
        /* margin-left: 0; */
    }
}
`

export const Container = styled.div `
position: relative;
/* width: 500px; */
/* height: 400px; */
width: 33%;
height: 25%;

@media (max-width: 375px){
    width: 375px;
    height: 312px;
}
img {
    /* width: 375px; */
    width: 100%;
    /* height: 400px; */
    border: solid 1px white;
    @media (max-width: 375px){
        width: 372px;
        /* height: 300px; */
        margin-left: 0;
    }
}

a {
     width: 100%;
    }
  `
export const Text = styled.div`
  color: black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`
  
export const Image = styled.a`
width: 100%;
`
  
export const Overlay = styled.div`
  
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(221,237,232, .9);
    border: solid 1px white;
    /* background-color: rgb(251, 255, 0); */
    :hover {
    opacity: 1;
}
`