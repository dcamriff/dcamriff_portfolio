import React, {Component} from 'react'
import { NavContainer, LogoContainer, LinksContainer } from './styled-components/NavbarStyled'
import '../App.css'
import logo2 from '../logo2.svg'

class Navbar extends Component {
    render() {
        return (
            <NavContainer>
                <LogoContainer><img src={logo2} alt="diane riffel logo"/></LogoContainer>
                {/* <NavHeaderContainer>Nav Head</NavHeaderContainer> */}
                <LinksContainer>
                <div>
                <a href="#projects">Projects</a>
                <span>/</span>
                </div>
                <div>
                <a href="#about-me">About</a>
                <span>/</span>
                </div>
                <div>
                <a href="https://drive.google.com/file/d/1Ti5X-KEb--O6cDYiz9Tq_YdTDXtE_hSY/view?usp=sharing" target="blank">Resume</a>
                </div>
                </LinksContainer>
            </NavContainer>
        )
    }
} 

export default Navbar

