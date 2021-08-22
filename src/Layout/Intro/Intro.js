import React from 'react'
import pictures from "../../DataStorage/ProfilePics.json"
import "./Intro.css"

export default function Intro() {


    const pictureNum = Math.floor(Math.random() * 5)
    
    const Alt = pictures[pictureNum].alt
    const Url = pictures[pictureNum].url

    return (
        <section>
            <img alt={Alt} src={Url} className="Pic"/>                      
        </section>
    )
}
