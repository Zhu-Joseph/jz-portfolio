import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div className="Profile">
            <div className="Hello">hello world</div>
            <div className="Greeting">hello world, I'm</div>
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
                There I was able to learn languages such as JavaScript, HTML, and CSS, use frameworks such as React, Node, and Express, and learn industry best practices.
                In turn, I successfully landed a position as a software engineer where I primarily worked on the backend developing the API.
                My quick learning ability helped me pick up new languages and frameworks such as Ruby on Rails, PostgreSQL, and ActiveAdmin.
                Additionally, I developed new skills in test driven development using Rspec and Minitest, as well as developer tools such as Rollbar, DataDog and Porter. 
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
