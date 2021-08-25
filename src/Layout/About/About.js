import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div className="Profile">
            <div className="Greeting">hello world</div>
            <div className="Im">hello world, I'm</div>
            <div className="Name">Joseph Zhu</div>
            <p>
                My journey into software development was not typical. 
                I have a CPA, a degree in Economics from UCLA and about three years of experience in accounting. 
                However, during my time working, I began to realize how vital software was in our everyday life. 
                It could literally save your day with the auto save function, or ruin it by not working properly. 
                Eventually, I realized that my interest in software development outweighed my interest in accounting.
            </p>
            <p>
                This led me to take a leap of faith and enroll in a Full-Stack programming bootcamp with Thinkful. 
                There I was able to learn languages such as JavaScript, React, Node, Express, HTML and CSS, all while learning industry best practices. 
            </p>
            <p>
                Coupling my software development experience with my accounting background has taught me to not miss the forest for the trees. 
                To balance being detail oriented and seeing the overall picture.
                This balance helps recognize excellent design without missing the overall goal.  
                I hope to exercise my skills as <a className="Job" alt="Job Hunt" href="#Contact">I am currently on the job hunt </a>and look forward to learning more from other great programmers.
            </p>
        </div>
    )
}
