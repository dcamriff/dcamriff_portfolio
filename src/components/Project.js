import React, { Component } from 'react'
import { ProjectSectionTitle, ProjectsContainer, Container, ProjectInfoTitle, ProjectImageContainer, Text, Overlay, Image } from './styled-components/ProjectStyled'
import DownArrow from './styled-components/img/down arrow.png'


class Project extends Component {
    state = {
        isProj1Selected: false,
        isProj2Selected: false,
        isProj3selected: false,
        isProj4Selected: false,
        isProj5Selected: false,
        isProj6Selected: false,
    }

    open = (project) => {
        console.log("banana")
        this.setState({project:true})
    }

    render () {
        return (
            <div>
            <ProjectSectionTitle>
                <img src={DownArrow} alt=""/>
                <span> Projects </span>
                <img src={DownArrow} alt=""/>
                </ProjectSectionTitle>
            <ProjectsContainer>
                <Container>
                    <ProjectInfoTitle>
                    <div onClick={() => this.open("isProj1Selected")}>Barista Goals</div>
                    {!this.state.isProj1Selected ? <div>Look</div> : <div>banana</div>}
                    </ProjectInfoTitle>

                    <ProjectImageContainer>
                    <a href="https://barista-goals.herokuapp.com/" target="_blank">
                        <img src="https://i.imgur.com/mlTyXWm.png" alt="barista goals"/>
    
                        <Overlay>
                            <Text><h1>Barista Goals</h1>React / Ruby on Rails / PostgreSQL</Text>
                        </Overlay>
                    </a>
                    </ProjectImageContainer>
                </Container>
    
                <Container>
                <h3>Jeopardy Game</h3>
                    <a href="http://jeopardy-for-kids-game-5e11a7.bitballoon.com/" target="_blank">
                        <img src="https://i.imgur.com/Er44s8D.png" alt="jeapoardy game app"/>
                       
                        <Overlay>
                            <Text><h1>Jeopardy Game</h1>HTML / CSS / Javascript</Text><br/>
                        </Overlay>
                    </a>
                </Container>
    
                <Container>
                <h3>Chore Rewarder</h3>
                    <a href="https://project-3-dcr.herokuapp.com/users" target="_blank">
                        <img src="https://i.imgur.com/Ue0nO1S.png" alt="chore rewarder app"/>
    
                        <Overlay>
                            <Text><h1>Chore Rewarder</h1>MongoDB / Express / React / Node.js</Text>
                        </Overlay>
    
                    </a>
                </Container>
    
                <Container>
                <h3>Vojago Travel</h3>
                    <a href="http://voyago.herokuapp.com/" target="_blank">
                        <img src="https://i.imgur.com/qefJNAY.png" alt="vojago app"/>
    
                        <Overlay>
                            <Text><h1>Vojago </h1>Group Project: React / Ruby on Rails / PostgreSQL</Text>
                        </Overlay>
                    </a>
                </Container>
                
                <Container>
                <h3>Gig Posters</h3>
                    <a href="https://gig-posters-wdi.herokuapp.com/" target="_blank">
                        <img src="https://i.imgur.com/RWjdxA0.png" alt="gig poster app"/>
    
                        <Overlay>
                            <Text><h1>Gig Posters</h1>MongoDB / Express / Node.js</Text>
                        </Overlay>
                    </a>
                </Container>
    
                <Container>
                <h3>Portfolio Site</h3>
                    <a href="https://github.com/dcamriff/dcamriff_portfolio/" target="_blank">
                        <img src="https://i.imgur.com/KqX07mk.png" alt="portfolio"/>
    
                        <Overlay>
                            <Text><h1>Portfolio</h1>React / Styled-Components</Text>
                        </Overlay>
                    </a>
                </Container>
                
            </ProjectsContainer>
            </div>
        )

    }

    
}

export default Project