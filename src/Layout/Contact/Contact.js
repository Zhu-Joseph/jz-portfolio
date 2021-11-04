import React from 'react'
import "./Contact.css"
//STORING ICONS IN A JSON FILE TO KEEP CODE LOOKING CLEANER WILL SORT THROUGH ARRAY 
import icons from "../../DataStorage/Icons.json"

export default function Contact() {

  const list = icons.map((icon) => {//TO DISPLAY EACH ICON FROM JSON FILE
    const {link, path, path2, className} = icon
    return (
      <a title="email" target="_blank" rel="noreferrer" href={link}>
      <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="#2B7A78" className={className} viewBox="0 0 16 16">
        <path d={path}/>   
        <path d={path2}/>         
      </svg>
    </a>
    )
  })

  if(list) {
    return (
      <div id="Contact" className="Contact___links">
        {list}
      </div>
    )
  }

  return (
      <div id="Contact" className="Contact___links">
        Loading...
      </div>
  )
}
