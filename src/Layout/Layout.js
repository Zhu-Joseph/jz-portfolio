import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Nav from './Nav/Nav'



export default function Layout() {
    return (
        <div>
            <Nav />
            <Intro />
            <About />
            <Contact />
        </div>
    )
}
