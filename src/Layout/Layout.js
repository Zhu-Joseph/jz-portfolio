import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Nav from './Nav/Nav'
import Projects from './Projects/Projects'



export default function Layout() {
    return (
        <div className="container">
            <Nav />
            <Intro />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}
