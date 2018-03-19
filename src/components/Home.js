import React, {Component} from 'react'
import {HomeWrapper, HomeNavBackground, HomeContent, HomeText, ProfileImageContainer} from './styled-components/HomeStyled.js'
import ProfilePic from './styled-components/img/profile-pic-sq.png'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeNavBackground></HomeNavBackground>
                <HomeContent>
                    <HomeText>
                        <h1>Hi, I love to create things.</h1>
                    </HomeText>
                    <ProfileImageContainer>
                        <img src={ProfilePic} alt="diane"/>
                    </ProfileImageContainer>
                </HomeContent>
            </HomeWrapper>
        )
    }
}

export default Home
