import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <nav>
            <div>
                <Link>
                    About
                </Link>
                <Link>
                    Projects
                </Link>
                <Link>
                    Contact
                </Link>
            </div>
        </nav>
    )
}
