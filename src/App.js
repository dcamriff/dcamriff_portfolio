import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Work from './components/Work'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        {/* <About /> */}
        <Project />
        {/* <Work /> */}
        <Footer />
      </div>
    )
  }
}

export default App
