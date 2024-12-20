const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./Models/Tasks')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get', (req, res) => {
    TaskModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) =>  {
    const {id} = req.params;
    TaskModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TaskModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TaskModel.create({
        task: task
    }).then(result => {
        console.log('Task created:', result)
        res.json(result)
        })
    .catch(err => {
        console.error('Error creating task:', err)
        res.json(err)
        })
})

// app.get('/classes', (req, res) => {
//     ClassModel.find()
//         .then((result) => res.json(result))
//         .catch((err) => res.status(500).json(err))
// })

// app.post('/classes', (req, res) => {
//     const { name, color } = req.body
//     ClassModel.create({ name, color })
//         .then((result) => res.json(result))
//         .catch((err) => res.status(500).json(err))
// })

// app.delete('/classes/:id', (req, res) => {
//     const { id } = req.params;

//     // Delete the class and associated tasks
//     ClassModel.findByIdAndDelete(id)
//         .then(() => {
//             TaskModel.deleteMany({ classId: id }).then(() => {
//                 res.json({ message: 'Class and associated tasks deleted' })
//             })
//         })
//         .catch((err) => res.status(500).json(err))
// })

app.listen(3001, () => {
    console.log("Server is running")
})