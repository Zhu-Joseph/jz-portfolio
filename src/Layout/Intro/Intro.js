import React from 'react'
import pictures from "../../DataStorage/ProfilePics.json"
import "./Intro.css"

export default function Intro() {


    const pictureNum = Math.floor(Math.random() * 5)
    
    const Alt = pictures[pictureNum].alt
    const Url = pictures[pictureNum].url

    return (
        <div>
            <section>
                <div>
                    <div className="text-center">
                       <img alt={Alt} src={Url} className="rounded float-left img-thumbnail"/>                      
                    </div>
                    <div>
                        <h1 className="text-muted">Hi I'm Joseph Zhu</h1>
                        <p>
                            I graduated from UCLA in 2016 with a career lined up as a tax accountant. 
                            My hope was to help guide people towards financial freedom, 
                            specifically through helping people with their taxes. 
                            However, as I was working in tax, 
                            I eventually realized that building better and more accessible software was going to reach more people than a single CPA could.
                        </p>

                        <p>
                            Being a CPA in Los Angeles has given me the background and knowledge of what professionals and average Joes are looking for. 
                            They want something simple, easy to use, and accurate in order to bring them confidence in their financial situation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
