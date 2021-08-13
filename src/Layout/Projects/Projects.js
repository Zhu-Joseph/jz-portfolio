import React from 'react'
import projects from "../../DataStorage/ProjectPics.json"
import "./Projects.css"

export default function Projects() {

    const list = projects.map((project) => {     
        const {name, subtitle, imageUrl, liveSiteUrl, description, skillsApplied} = project
        
        return (
            <div className="Project">
                <h3>{name}</h3>
                <h4>{subtitle}</h4>
                <div className="Project___flexContainer">                  
                    <a alt={subtitle} href={liveSiteUrl} target="_blank" rel="noreferrer" >
                        <img alt={name} src={imageUrl} className="Project__img " />
                    </a>
                    
                    <div className="Project___rightColumn">
                        <p>{description}</p>
                        <ul className="Project__ul">
                            {skillsApplied.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>

                </div>
            </div>
        )
    })
// MAKE SURE TO ADD ID TO THE DIV LATER
    return (
        <div id="Projects" className="Project">
            <h3>Projects</h3>
            {list}
        </div>
    )
}
