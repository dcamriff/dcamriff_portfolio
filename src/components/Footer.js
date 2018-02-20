import React, { Component } from 'react'
import { FootContainer, FootLeftContainer, FootCenterContainer, FootRightContainer } from './styled-components/FooterStyled'


class Footer extends Component {
    render () {
        return (
            <FootContainer>
                <FootLeftContainer>Diane Riffel © </FootLeftContainer>
                <FootCenterContainer>get in touch</FootCenterContainer>
                <FootRightContainer>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </FootRightContainer>
            </FootContainer>        
        )
    }
}

export default Footer