import React from 'react'
import Nav from '../Nav/Nav'
import "./Header.css"

export default function Header() {
    return (
        <header className="Header">
            <Nav />
            <h2 className="Title">
                <a  href="/">
                    Joseph Zhu
                </a>
            </h2>
        </header>
    )
}
