import React from 'react'
import projects from "../../DataStorage/ProjectPics.json"
import "./Projects.css"

export default function Projects() {

    const list = projects.map((project, index) => {     
        const {name, subtitle, imageUrl, liveSiteUrl, description, skillsApplied} = project
        
        return (
            <div key={index}>
                <h3>{name}</h3>
                <h4>{subtitle}</h4>
                <div className="Project___flexContainer">                  
                    <a alt={subtitle} href={liveSiteUrl} target="_blank" rel="noreferrer">
                        <img rel="preload" alt={name} src={imageUrl} className="Project__img " />
                    </a>                    
                    <p className="Project__p">{description}</p>
                </div>
                <ul className="Project__ul">
                    {skillsApplied.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </div>
        )
    })

    return (
        <div id="Projects" className="Project">
            <h2 className="Project-Title">Projects</h2>
            {list}
        </div>
    )
}
