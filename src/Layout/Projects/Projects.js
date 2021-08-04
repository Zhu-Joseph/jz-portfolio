import React from 'react'
import projects from "../../DataStorage/ProjectPics.json"


export default function Projects() {

    const list = projects.map((project) => {
        
        return (
            <div>
                <h4>{project.name}</h4>
                <a alt={project.subtitle} target="_blank" rel="noreferrer" href={project.liveSiteUrl}>
                    <img alt={project.name} src={project.imageUrl} />
                </a>
                <p>{project.description}</p>
                <p>{project.skillsApplied}</p>
            </div>
        )
    })

    return (
        <div>
            {list}
        </div>
    )
}
