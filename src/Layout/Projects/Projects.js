import React from 'react'
import projects from "../../DataStorage/ProjectPics.json"
import "./Projects.css"

export default function Projects() {

    const list = projects.map((project) => {     
        const {name, subtitle, imageUrl, liveSiteUrl, description, skillsApplied} = project
        
        return (
            <div className="">
                <h3>{name}</h3>
                <h4>{subtitle}</h4>
                <a alt={subtitle} target="_blank" rel="noreferrer" className="" href={liveSiteUrl}>
                    <img alt={name} src={imageUrl} className="Project__img" />
                </a>
                <p className="Project___rightColumn">{description}</p>
                <p>{skillsApplied}</p>
            </div>
        )
    })
// MAKE SURE TO ADD ID TO THE DIV LATER
    return (
        <div className="Project">
            <h3>Projects</h3>
            {list}
        </div>
    )
}
