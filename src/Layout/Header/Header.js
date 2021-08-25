import React from 'react'
import Nav from '../Nav/Nav'
import "./Header.css"

export default function Header() {
    
    return (
        <header className="Header">
            <h2>
                <a className="Title" href="/">
                    Joseph Zhu
                </a>
            </h2>
            <Nav />
            <div>
            </div>   
        </header>
    )
}
