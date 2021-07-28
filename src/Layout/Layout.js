import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Nav from './Nav/Nav'



export default function Layout() {
    return (
        <div>
            <Nav />
            <About />
            <Contact />
        </div>
    )
}
