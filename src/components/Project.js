import React from 'react'
import { ProjectsContainer } from './styled-components/ProjectStyled'
import styled from 'styled-components'

const Project = () => {
    return (
        <ProjectsContainer>
            <Container id="projects">
                {/* <Container> */}
                    <a href="http://jeopardy-for-kids-game-5e11a7.bitballoon.com/">
                    <img src="https://i.imgur.com/o6ZAHFZ.png" alt="jeapoardy game app"/>
                    </a>
                <Overlay>
                    <Text>Project / Jeopardy Game</Text>
                </Overlay>

                {/* </Container> */}
            </Container>

            <div>
            <a href="https://project-3-dcr.herokuapp.com/users">
                <img src="https://i.imgur.com/jqmdVjg.png" alt="chore rewarder app"/>
            </a>
            </div>
            <div>
            <a href="http://voyago.herokuapp.com/">
                <img src="https://i.imgur.com/8NF55lW.png" alt="vojago app"/>
            </a>
            </div>
            <div>
            <a href="https://gig-posters-wdi.herokuapp.com/">
                <img src="https://i.imgur.com/QtSrgj7.png" alt="gig poster app"/>
            </a>
            </div>
        </ProjectsContainer>
    )
}

export default Project

const Container = styled.div `
    position: relative;
    width: 416.55px;
    a {
        width: 100%;
    }
  `
const Text = styled.div`
  color: darkgray;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`
  
const Image = styled.a`
width: 100%;
`
  
const Overlay = styled.div`
  
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(221,237,232, .9);
    /* background-color: rgb(251, 255, 0); */
    :hover {
    opacity: 1;
}
`
