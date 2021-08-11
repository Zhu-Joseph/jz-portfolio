import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import Projects from './Projects/Projects'



export default function Layout() {

    const currentYear = new Date().getFullYear()

    return (
        <div className="container">
            <Header />
            <Intro />
            <About />
            <Projects />
            <Contact />
            <footer>
                <div>&copy; 2020-{currentYear} Joseph Zhu</div>
            </footer>
        </div>
    ) 
}
