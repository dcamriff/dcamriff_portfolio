import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import DownArrow from './styled-components/img/down arrow.png'
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
                <ProjectSectionTitle>
                    <img src={DownArrow} alt=""/>
                    <span> Projects </span>
                    <img src={DownArrow} alt=""/>
                </ProjectSectionTitle>

                <ProjectsContainer>
                    {projectCards}
                </ProjectsContainer>

            </div>
        );
    }
}

export default ProjectList;