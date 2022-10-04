const getAllTask = (req, res) => {
    res.send('all items')
}

const createOneTask = (req, res)=> {
    res.json(req.body)
}

const getOneTask = (req, res) => {
    res.send('Get one')
}

const updateTask = (req, res) => {
    res.send('Update one')
}

const deleteTask = (req, res) => {
    res.send('Delete one')
}

module.exports = {
    getAllTask,
    createOneTask,
    getOneTask,
    updateTask,
    deleteTask
}