import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#About">
                        About
                    </a>                   
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Projects">
                        Projects
                    </a>                    
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">
                        Contact
                    </a>
                </li>
            </ul>
            <h2 className="text-align-right">Joseph Zhu</h2>
        </nav>
    )
}
