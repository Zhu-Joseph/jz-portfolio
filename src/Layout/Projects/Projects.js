import React from 'react'
import project from "../../DataStorage/ProjectPics.json"


export default function Projects() {
    return (
        <div>
            <h3>RAM</h3>
            <h4>Restaurant Assistance Manager</h4>
            <p>
                {project[0].name}
            </p>
            <a alt="test" href="https://restaurant-reservation-front-end-opal.vercel.app/dashboard"> 
            <img alt="App" src="https://lh3.googleusercontent.com/jXSIhGC3vEjhVj6otz5CRDYl94NHkSspSORmFOCkpB7t_N3ECRYwnYo2FFQFx0ywKePTiEZwNkVu14XxCUNEOaPshs-2Yy-O8yHKE14IE2I2O9ZjnLUNoWUf_ez2oZWB6Ie8Kklp1w=w2400" />
            {/* <img alt="App" src="https://lh3.googleusercontent.com/VZooqI-XBZywGKntPfMVGZWDxMZgflc5knifp047XYGY7zdjLlgD56ZUizOC7OqVZZuKxDWVyLKrr-E-96I2y2kVUefs7FhKLHI3UMfLuEPohjbcZy7-AvSb1lsGpoeabx6KnGzJFg=w600-h315-p-k" /> */}
            </a>
            {/* <a href="https://photos.app.goo.gl/FPJZbzjqC9kMZycEA">Photo Link Test</a> */}
            <a href="https://restaurant-reservation-front-end-opal.vercel.app/dashboard"> Aye</a>
        </div>
    )
}
