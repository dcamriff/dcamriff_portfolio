import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import PinIconB from './styled-components/img/pin-black-2x.png'
import { ProjectSectionTitle, ProjectsContainer } from './styled-components/ProjectStyled'

class ProjectList extends Component {
    // state = {
    //     isProjectSelected: false
    // }
    
    render() {
        const projectCards = this.props.projects.map((project, index) => {
            return (
            <ProjectCard
                key={index}
                name={project.name}
                name2={project.name2}
                description={project.description}
                technology={project.technology}
                github={project.github}
                weblink={project.weblink}
                imageUrl={project.imageUrl} />
            )
        })

        return (
            <div>
                <ProjectSectionTitle id="projects">
                    <img src={PinIconB} alt=""/>
                    <span> Projects </span>
                </ProjectSectionTitle>

                <ProjectsContainer>
                    {projectCards}
                </ProjectsContainer>

            </div>
        );
    }
}

export default ProjectList;