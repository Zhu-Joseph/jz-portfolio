import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
        <>
        <nav className="Nav">
            <ul className="Nav__ul">                   
                <li>
                    <a href="#About">
                        About
                    </a>                   
                </li>
                <li>
                    <a  href="#Projects">
                        Projects
                    </a>                    
                </li>
                <li >
                    <a href="#Contact">
                        Contact
                    </a>
                </li>
            </ul>            
        </nav>
        <a>
        {/* FOR SOME REASON THIS NEEDS TO BE HERE FOR CSS TO WORK  */}
        </a>
        </>
    )
}
