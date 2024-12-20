import React, { useState } from 'react'
import axios from 'axios'
import './Class.css'

function Class() {
    const [classes, setClasses] = useState([])
    const [className, setClassName] = useState('')
    const [classColor, setClassColor] = useState('#000000')

    const addClass = () => {
        setClasses([...classes, { name: className, color: classColor }])
        setClassName('')
        setClassColor('#000000')
    }

    const deleteClass = (index) => {
        setClasses(classes.filter((_,i) => i !== index))

    }

    return (
        <div className="class-page">
            <h2>Manage Classes</h2>
            <div className="create_class">
                <input
                type="text"
                placeholder="Class Name"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                />
                <input
                type="color"
                value={classColor}
                onChange={(e) => setClassColor(e.target.value)}
                />
                <button onClick={addClass}>Add Class</button>
            </div>
            <ul className="class-list">
                {classes.map((classItem, index) => (
                    <li key={index} style={{ backgroundColor: classItem.color}}>
                        {classItem.name}
                        <button onClick={() => deleteClass(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Class
