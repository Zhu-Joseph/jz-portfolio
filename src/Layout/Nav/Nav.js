import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link>
                        About
                    </Link>                   
                </li>
                <li>
                    <Link>
                        Projects
                    </Link>                    
                </li>
                <li>
                    <Link>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
