import React, { useState, useEffect } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircle, BsCheckCircle, BsFillTrashFill } from 'react-icons/bs'
import Modal from './Components/Modal'


function Home() {
        const [tasks, setTasks] = useState([])
        const [classes, setClasses] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/get')
            .then(result => setTasks(result.data))
            .catch(err => console.log(err))

            axios
             .get('http://localhost:3001/classes') 
             .then(result => setClasses(result.data))
             .catch(err => console.log(err))
        }, [])

        const handleEdit = (id) => {
            axios.put('http://localhost:3001/update/'+id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
        }

        const handleDelete = (id) => {
            axios.delete('http://localhost:3001/delete/'+id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
        }

    return (
        <div>
            <h2>Uni-Track</h2>
            <Create classes={classes} />
            {
                tasks.length === 0 
                ?
                <div><h4>No tasks at the moment.</h4></div>
                :
                tasks.map(task => (
                    <div className='tasks' key={task._id}>
                       <div className='checkbox' onClick={() => handleEdit(task._id)}>
                           {task.done ? 
                           <BsCheckCircle className='icon'></BsCheckCircle>
                            : <BsCircle className='icon'/>
                            }
                            <p className={task.done ? "line_through" : ""}>{task.task}</p>
                        </div>
                        <div>
                            <span>
                                <BsFillTrashFill className='icon' 
                                onClick={() => handleDelete(task._id)}/>
                            </span>
                        </div>
                    </div>
                ))
            }
            <Modal /> 
        </div>
    )
}

export default Home