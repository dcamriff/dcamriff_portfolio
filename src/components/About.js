import React from 'react'
import { AboutContainer, AboutCard, AboutSectionTitle, AboutText, AboutImage } from './styled-components/AboutStyled'
import VisionImage from './styled-components/img/octane-logo-2x.png'
import SpacesImage from './styled-components/img/ef-logo-2x.png'
import CodeImage from './styled-components/img/ga-logo-2x.png'
import HeartImage from './styled-components/img/heart-toast-2x.png'
import PinIconW from './styled-components/img/pin-white-2x.png'

const About = () => {
    return (
        <AboutContainer id="about-me">
            <AboutSectionTitle>
            <img src={PinIconW} alt=""/>
            <span> About Me </span>
            <div> ... </div>
            <div>I love to Create Things</div>
            </AboutSectionTitle>

            
            <div>
            <AboutCard>
                <AboutImage>
                <img src={VisionImage} alt="vision"/>
                </AboutImage>
                <AboutText>
                <p>In 2003, I co-founded Octane Coffee, with humble beginnings on the Westside of Atlanta. Knowing very little about the coffee industry, but always having the passion to learn and believe in what was possible, the idea of a single coffee shop grew to be a thriving coffee business and community hub with 8 business units. I co-owned and co-operated the company from it’s infancy to April 2017.</p>
                </AboutText>
            </AboutCard>
            <AboutCard>
                <AboutImage>
                <img src={SpacesImage} alt="spaces"/>
                </AboutImage>
                <AboutText>
                <p>In 2015, co-working spaces in Atlanta were relatively unknown, but very much in need. Through a partnership between myself and three others, Elevator Factory was born. I helped lead a team of designers and builders to transform an empty shell into a beautiful co-working and event space.</p>
                </AboutText>
            </AboutCard>
            <AboutCard>
                <AboutImage>
                <img src={CodeImage} alt="code"/>
                </AboutImage>
                <AboutText>
                <p>Being a business owner, I am always seeking solutions through software. I am self-taught in the Adobe Creative Suite and enjoy learning through self-discovery and mentorship. Having this passion, I decided to embark on a new journey to pursue a career in web development, which led me to General Assembly.</p>
                </AboutText>
            </AboutCard>
            <AboutCard>
                <AboutImage>
                <img src={HeartImage} alt="heart"/>
                </AboutImage>
                <AboutText>
                <p>Other Things That Bring Me Joy > I love working in front-end development and building on my full-stack knowledge / I love working with others / I'm passionate about what I do / I love seeking solutions and efficiency </p>
                </AboutText>
            </AboutCard>
            </div>


            
        </AboutContainer>
    )
}

export default About

