import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
        <nav className="Nav">
            
            <div className="d-flex flex-row align-items-center">
                <h2 className="mr-auto p-2">
                    <a className="nav-link" href="#About">
                            Joseph Zhu
                    </a>
                </h2>
            </div>

            <div className="d-flex flex-row">

                <ul className="Nav__ul">
                    
                    <div >
                        <li className="li">
                            <a className="nav-link" href="#About">
                                About
                            </a>                   
                        </li>
                    </div>

                    <div className="p-2">
                        <li className="li">
                            <a className="nav-link" href="#Projects">
                                Projects
                            </a>                    
                        </li>
                    </div>
                    
                    <div className="p-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">
                                Contact
                            </a>
                        </li>
                    </div>

                </ul>
            
            </div>

        </nav>
    )
}
