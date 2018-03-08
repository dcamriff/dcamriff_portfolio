import React, { Component } from 'react'
import { HomeNavBackground, HomeContainer, HomeText } from './styled-components/HomeStyled.js'
import ProfilePic from './styled-components/img/profile-pic-sq.png'


class Home extends Component {
    render () {
        return (
            <div>
                <HomeNavBackground></HomeNavBackground>
                <HomeContainer>
                <div>
                <h1>Hello! I'm Diane, a shop owner turned full-stack developer.</h1>
                </div>
                <div><img src={ProfilePic} alt=""/></div>

            </HomeContainer>
            </div>
        )
    }
}

export default Home
