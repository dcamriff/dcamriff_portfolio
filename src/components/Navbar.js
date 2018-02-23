import React, {Component} from 'react'
import { NavContainer, LogoContainer, NavHeaderContainer, LinksContainer } from './styled-components/NavbarStyled'
import '../App.css'
import logo2 from '../logo2.svg'
import Project from './Project'
import About from './About'

class Navbar extends Component {
    render() {
        return (
            <NavContainer>
                <LogoContainer><img src={logo2} alt="diane riffel logo"/></LogoContainer>
                {/* <NavHeaderContainer>Nav Head</NavHeaderContainer> */}
                <LinksContainer>
                <a href="#projects">Projects</a>
                <span> / </span>
                <a href="#about-me">About Me</a>
                </LinksContainer>
            </NavContainer>
        )
    }
} 

export default Navbar

// STYLED COMPONENTS ...............

// const Nav = styled.nav `
// display: grid;
// grid-template-columns: 33%px 33% 33%;
// grid-gap: 5px;
// background-color: var(--mint);
// position: fixed;
// margin: 5px;
// height: 80px;

// .item {
//     display: grid;
// grid-template-columns: 33%px 33% 33%;
// grid-gap: 5px;
// background-color: var(--mint);
// position: fixed;
// margin: 5px;
// height: 80px;
// }

// .container {
//     display: grid;
//     grid-template-columns: 200px auto 200px 200px;
//     grid-gap: 20px;

// }

// `
