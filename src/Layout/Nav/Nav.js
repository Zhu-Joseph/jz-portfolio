import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
        <nav className="navbar">
            
            {/* <div className="d-flex flex-row align-items-center"> */}
                <h2 className="name">
                    <a className="nav-link" href="#About">
                            Joseph Zhu
                    </a>
                </h2>
            {/* </div> */}

            {/* <div className="d-flex flex-row"> */}
                <ul className="Nav__ul">                   
                    <div>
                        <li>
                            <a className="navlink" href="#About">
                                About
                            </a>                   
                        </li>
                    </div>
                    <div className="p-2">
                        <li >
                            <a className="navlink" href="#Projects">
                                Projects
                            </a>                    
                        </li>
                    </div>
                    <div className="p-2">
                        <li className="nav-item">
                            <a className="navlink" href="#Contact">
                                Contact
                            </a>
                        </li>
                    </div>
                </ul>            
            {/* </div> */}

        </nav>
    )
}
