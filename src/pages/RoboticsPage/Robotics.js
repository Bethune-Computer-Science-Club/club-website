import React, {useState} from 'react'

function Robotics() {

    // "blocks" is a section with information for a project
    const [blocks, setBlocks] = useState([
    {
        key: 0,
        title: "Hello, World!",
        authors: "The Bethune CS Club",
        description: "This is where you will put a short description of your project. Don’t write too much, and try to aim for three sentences. Just include the most important parts.",
        projectName: "React Website"
    },
    {
        key: 1,
        title: "title",
        authors: "idk",
        description: "Lorem doesnt work here",
        projectName: "tutorial simulator"
    }
    ])

    // functions for modifying state inside components
    
    
    

    return blocks.map(info => (
        <>
            <h1> Title: {info.title} </h1>
            <h2> projectName: {info.projectName} </h2>
            <h2> authors: {info.authors} </h2>
            <h3> description: {info.description}</h3>
        </>
    ))
}

export default Robotics
