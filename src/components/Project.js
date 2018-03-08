import React from 'react'
import { ProjectSectionTitle, ProjectsContainer, Container, Text, Overlay, Image } from './styled-components/ProjectStyled'
import styled from 'styled-components'

const Project = () => {
    return (
        <div>
        <ProjectSectionTitle>Projects</ProjectSectionTitle>
        <ProjectsContainer>
            <Container id="projects">
                <a href="http://jeopardy-for-kids-game-5e11a7.bitballoon.com/">
                    <img src="https://i.imgur.com/o6ZAHFZ.png" alt="jeapoardy game app"/>
                   
                    <Overlay>
                        <Text><span>Jeopardy Game</span> / HTML / CSS / Javascript</Text><br/>
                    </Overlay>
                </a>
            </Container>

            <Container>
                <a href="https://project-3-dcr.herokuapp.com/users">
                    <img src="https://i.imgur.com/jqmdVjg.png" alt="chore rewarder app"/>

                    <Overlay>
                        <Text>Chore Rewarder</Text><br/>
                        <Text></Text>
                    </Overlay>

                </a>
            </Container>

            <Container>
                <a href="http://voyago.herokuapp.com/">
                    <img src="https://i.imgur.com/8NF55lW.png" alt="vojago app"/>

                    <Overlay>
                        <Text>Group | Vojago</Text><br/>
                        <Text></Text>
                    </Overlay>
                </a>
            </Container>

            <Container>
                <a href="https://gig-posters-wdi.herokuapp.com/">
                    <img src="https://i.imgur.com/QtSrgj7.png" alt="gig poster app"/>

                    <Overlay>
                        <Text>Gig Posters</Text><br/>
                        <Text></Text>
                    </Overlay>
                </a>
            </Container>

            <Container>
                <a href="https://gig-posters-wdi.herokuapp.com/">
                    <img src="https://i.imgur.com/QtSrgj7.png" alt="gig poster app"/>

                    <Overlay>
                        <Text>Barista Goals</Text><br/>
                        <Text></Text>
                    </Overlay>
                </a>
            </Container>
            
            
        </ProjectsContainer>
        </div>
    )
}

export default Project