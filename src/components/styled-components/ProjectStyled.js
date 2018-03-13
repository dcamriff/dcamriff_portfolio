import styled from 'styled-components'

export const ProjectSectionTitle = styled.div`
font-size: 1.50em;
align-items: center;
text-align: center;
img {
    margin-top: 5px;
}
`

export const ProjectsContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin-bottom: 50px;

/* @media (max-width: 375px){
    margin-left: 0;
} */

/* @media (max-width: 414px){
    margin-left: 0;
} */

`

export const ProjectInfoTitle = styled.div`
background-color: white;
width: 100%;
height: 10%;
text-align: center;
/* padding: 5px; */
/* margin-left: 7px; */
@media (max-width: 720px){
    font-size: 11px;
}
`
export const ProjectImageContainer = styled.div`
position: relative;
/* width: 500px; */
/* height: 400px; */
width: 100%;
height: 25%;

@media (max-width: 375px){
    width: 375px;
    height: 338px;
}

img {
    /* width: 375px; */
    width: 100%;
    /* height: 400px; */
    border: solid 1px whitesmoke;
    @media (max-width: 375px){
        width: 375px;
        /* height: 300px; */
        margin-left: 0;
    }
}

a {
     width: 100%;
    }

`
export const Container = styled.div `
position: relative;
width: 33.33%;
height: 25%;

@media (max-width: 414px){
    width: 100vw;
    height: 376px;
}

@media (max-width: 375px){
    width: 100vw;
    height: 338px;
}
img {
    width: 100%;
    border: solid 1px whitesmoke;
    
    @media (max-width: 414px){
        width: 100vw;
        margin-left: 0;
    }
    @media (max-width: 375px){
        width: 100vw;
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

  @media (max-width: 875px){
      font-size: 75%;
  }
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
    border: solid 1px whitesmoke;
    :hover {
    opacity: 1;
}
`