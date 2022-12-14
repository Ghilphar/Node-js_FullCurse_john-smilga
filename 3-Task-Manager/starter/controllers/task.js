const Task = require('../modules/task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/curstom-error')


const getAllTask = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
    // res.status(200).json({ tasks, amount: tasks.length })
    // res.status(200).json({ success: true, data: { tasks, nBHits: tasks.length } })
    // res.status(500).json({ msg: error })
})

const createOneTask = asyncWrapper(async (req, res)=> {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getOneTask = asyncWrapper(async (req, res, next) => {
    const { id:taskID } = req.params
    const task = await Task.findOne({_id: taskID}).exec()
    if(!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
        // const error = new Error('Not Found')
        // error.status = 404
        // return next(error)

        // return res.status(404).json({ msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id:taskID } = req.params
    const { name:newName, completed:newCompleted } = req.body
    const options = {
        new: true,
        runValidators: true
    } 

    const task = await Task.findOneAndUpdate(
        { _id: taskID },
        { name: newName, completed:newCompleted },
        options
    )
    if(!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id:taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if(!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
        // return res.status(404).json({ msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({ task:null, status: 'succes' })
    res.status(500).json({ msg: error })
})

module.exports = {
    getAllTask,
    createOneTask,
    getOneTask,
    updateTask,
    deleteTask
}