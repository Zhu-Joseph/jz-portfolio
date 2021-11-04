import React from 'react'
import "./Contact.css"
import icons from "../../DataStorage/Icons.json"

export default function Contact() {
  const color ="#2B7A78"

    return (
        <div id="Contact" className="Contact___links">
          <h2>Contact</h2>
          <p>I'm currently looking for the right job opportunity. If you think I'd be a good fit for your team or project, please feel free to each out!</p>
          <a title="email" target="_blank" rel="noreferrer" href="mailto:josephzhu3@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill={color} className="bi bi-envelope" viewBox="0 0 16 16">
              <path d={icons.email}/>         
            </svg>
          </a>
          <a title="github" target="_blank" rel="noreferrer" href="https://github.com/Zhu-Joseph">
            <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill={color} className="bi bi-github" viewBox="0 0 16 16">
              <path d={icons.github}/>
            </svg>
          </a>
          <a title="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joseph-zhu-cpa/">
            <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill={color} className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d={icons.linkedin}/>
            </svg>
          </a>
          <a title="resume" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1wYcOv_8t5QMskSeqvfvjFOEhNlMvUscQ/view?usp=sharing">
            <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill={color} className="bi bi-file-earmark-text" viewBox="0 0 16 16">
              <path d={icons.resumeInner}/>
              <path d={icons.resumeOuter}/>
            </svg>
          </a>
        </div>
    )
}
