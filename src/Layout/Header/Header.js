import React from 'react'
import Nav from '../Nav/Nav'
import "./Header.css"

export default function Header() {
    return (
        <header className="Header">
            <h2 className="font">
                <a className="font" href="#About">
                    Joseph Zhu
                </a>
            </h2>
            <Nav />
        </header>
    )
}
