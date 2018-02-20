import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <AboutContainer>
            <p>Hi, I'm Diane, a full stack developer living in Atlanta.</p>
            <p>As a former craft coffee business owner, I have a passion for learning, connecting and creating meaningful experiences. Let's seek solutions together.</p>
        </AboutContainer>
    )
}

export default About

// STYLED COMPONENTS
const AboutContainer = styled.div`
font-size: 30px;
`