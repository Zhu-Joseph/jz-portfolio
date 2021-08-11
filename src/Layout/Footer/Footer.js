import React from 'react'
import "./Footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="Footer">
            <div>&copy; 2020-{currentYear} Joseph Zhu</div>
        </footer>
    )
}
