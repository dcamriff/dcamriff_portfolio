import React, {Component} from 'react';
import {
    Container,
    ProjectInfoTitle,
    ProjectImageContainer,
    Text,
    Overlay
} from './styled-components/ProjectStyled'

class ProjectCard extends Component {
    // state = {     isProjectSelected: false, } open = (project) =>
    // {this.setState({project:true})}

    render() {
        return (
            <Container>
                <ProjectInfoTitle>
                    <h3>{this.props.name}</h3>
                </ProjectInfoTitle>

                <ProjectImageContainer>
                    <a href={this.props.weblink} target="_blank">
                        <img src={this.props.imageUrl} alt={this.props.name}/>

                        <Overlay>
                            <Text>
                                <h1>{this.props.name2}</h1>
                                <br/>{this.props.technology}
                            </Text>
                        </Overlay>
                    </a>
                </ProjectImageContainer>
            </Container>
        )
    }
}

export default ProjectCard;