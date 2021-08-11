import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

export default function Layout() {

    return (
        <div className="container">
            <Header />
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    ) 
}
