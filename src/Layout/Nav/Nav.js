import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
        <nav className="">
            <h2 >
                <a className="nav-link" href="#About">
                    Joseph Zhu
                </a>
            </h2>
            <ul >                   
                <li>
                    <a className="nav-link" href="#About">
                        About
                    </a>                   
                </li>
                <li>
                    <a className="nav-link" href="#Projects">
                        Projects
                    </a>                    
                </li>
                <li >
                    <a className="nav-link" href="#Contact">
                        Contact
                    </a>
                </li>
            </ul>            
        </nav>
    )
}
