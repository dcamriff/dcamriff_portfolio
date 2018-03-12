import React from 'react'
import { ProjectSectionTitle, ProjectsContainer, Container, Text, Overlay, Image } from './styled-components/ProjectStyled'
import styled from 'styled-components'

const Project = () => {
    return (
        <div>
        <ProjectSectionTitle>Projects</ProjectSectionTitle>
        <ProjectsContainer>
            <Container>
                <a href="https://barista-goals.herokuapp.com/" target="_blank">
                    <img src="https://i.imgur.com/eIl6CVG.png" alt="gig poster app"/>

                    <Overlay>
                        <Text><h1>Barista Goals</h1>React / Ruby on Rails / PostgreSQL </Text>
                    </Overlay>
                </a>
            </Container>

            <Container id="projects">
                <a href="http://jeopardy-for-kids-game-5e11a7.bitballoon.com/" target="_blank">
                    <img src="https://i.imgur.com/R1xQCpB.png" alt="jeapoardy game app"/>
                   
                    <Overlay>
                        <Text><h1>Jeopardy Game</h1>HTML / CSS / Javascript</Text><br/>
                    </Overlay>
                </a>
            </Container>

            <Container>
                <a href="https://project-3-dcr.herokuapp.com/users" target="_blank">
                    <img src="https://i.imgur.com/o77uyu6.png" alt="chore rewarder app"/>

                    <Overlay>
                        <Text><h1>Chore Rewarder</h1>MongoDB / Express / React / Node.js</Text>
                    </Overlay>

                </a>
            </Container>

            <Container>
                <a href="http://voyago.herokuapp.com/" target="_blank">
                    <img src="https://i.imgur.com/8NF55lW.png" alt="vojago app"/>

                    <Overlay>
                        <Text><h1>Vojago </h1>Group Project: React / Ruby on Rails / PostgreSQL </Text>
                    </Overlay>
                </a>
            </Container>
            
            <Container>
                <a href="https://gig-posters-wdi.herokuapp.com/" target="_blank">
                    <img src="https://i.imgur.com/QtSrgj7.png" alt="gig poster app"/>

                    <Overlay>
                        <Text><h1>Gig Posters</h1>MongoDB / Express / Node.js</Text>
                    </Overlay>
                </a>
            </Container>

            <Container>
                <a href="https://github.com/dcamriff/dcamriff_portfolio/" target="_blank">
                    <img src="https://i.imgur.com/osrb7hF.png" alt="gig poster app"/>

                    <Overlay>
                        <Text><h1>Portfolio</h1>React / Styled-Components </Text>
                    </Overlay>
                </a>
            </Container>
            
        </ProjectsContainer>
        </div>
    )
}

export default Project