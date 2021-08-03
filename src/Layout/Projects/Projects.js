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
            </div>
        )
    })

    return (
        <div>
            {list}

            {/* <h3>RAM</h3>
            <h4>Restaurant Assistance Manager</h4>
            <p>
                {projects[0].name}
            </p>
            <a alt="test" target="_blank" rel="noreferrer" href="https://restaurant-reservation-front-end-opal.vercel.app/dashboard"> 
            <img alt="App" src="https://lh3.googleusercontent.com/jXSIhGC3vEjhVj6otz5CRDYl94NHkSspSORmFOCkpB7t_N3ECRYwnYo2FFQFx0ywKePTiEZwNkVu14XxCUNEOaPshs-2Yy-O8yHKE14IE2I2O9ZjnLUNoWUf_ez2oZWB6Ie8Kklp1w=w2400" />
            </a> */}
           
        </div>
    )
}
