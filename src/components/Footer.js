import React, { Component } from 'react'
import { FootContainer, FootLeftContainer, FootCenterContainer, FootRightContainer } from './styled-components/FooterStyled'
import GithubIcon from './styled-components/img/GitHub-Mark-Light-32px.png'
import LinkedIcon from './styled-components/img/In-White-28px-R.png'
import TwitterIcon from './styled-components/img/Twitter-bird-wht.png'
import MailIcon from './styled-components/img/envelope.png'

class Footer extends Component {
    render () {
        return (
            <FootContainer>
                <FootLeftContainer>Diane Riffel © </FootLeftContainer>
                <FootCenterContainer></FootCenterContainer>
                <FootRightContainer>
                    <a href="https://www.linkedin.com/in/dianeriffel-atl/" target="_blank"><img src={LinkedIcon} alt="LinkedIn"/></a>
                    <a href="https://twitter.com/ladydaytripper" target="_blank"><img width={32} src={TwitterIcon} alt="Twitter"/></a>
                    <a href="https://github.com/dcamriff?tab=repositories" target="_blank"><img src={GithubIcon} alt="Github"/></a>
                    <a href="mailto:diane.c.riffel@gmail.com"><img src={MailIcon} alt="email Diane"/></a>
                </FootRightContainer>
            </FootContainer>        
        )
    }
}

export default Footer