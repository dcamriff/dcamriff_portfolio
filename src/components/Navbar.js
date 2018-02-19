import React, {Component} from 'react'
import styled from 'styled-components'
import '../App.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>Nav Bar</h1>
            </div>
        )
    }
} 

export default Navbar

// STYLED COMPONENTS ...............

const Nav = styled.nav `
display: grid;
grid-template-columns: 33%px 33% 33%;
grid-gap: 5px;
background-color: var(--mint);
position: fixed;
margin: 5px;
height: 80px;

.item {
    display: grid;
grid-template-columns: 33%px 33% 33%;
grid-gap: 5px;
background-color: var(--mint);
position: fixed;
margin: 5px;
height: 80px;
}

.container {
    display: grid;
    grid-template-columns: 200px auto 200px 200px;
    grid-gap: 20px;

}

`
