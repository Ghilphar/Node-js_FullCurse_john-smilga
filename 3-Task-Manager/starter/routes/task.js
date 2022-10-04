const express = require('express')
const router = express.Router()

const {
    getAllTask,
    createOneTask,
    getOneTask,
    updateTask,
    deleteTask
} = require('../controllers/task')

router.route('/').get(getAllTask)
router.route('/').post(createOneTask)
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)

// router.patch('/:id')
// router.route('/:id')

module.exports = router