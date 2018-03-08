import React, { Component } from 'react'
import { HomeWrapper, HomeNavBackground, HomeContent, HomeText } from './styled-components/HomeStyled.js'
import ProfilePic from './styled-components/img/profile-pic-sq.png'


class Home extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeNavBackground></HomeNavBackground>
                <HomeContent>
                <div>
                <h1>Hello! I'm Diane, a shop owner turned full-stack developer.</h1>
                </div>
                <div><img src={ProfilePic} alt=""/></div>
                </HomeContent>
            </HomeWrapper>
        )
    }
}

export default Home
