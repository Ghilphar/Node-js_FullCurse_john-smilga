const Job = require('../models/Job')
const { StatusCode } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort(' createdAt ')
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
    res.send('get all jobs')
}

const getJob = async (req, res) => {
    res.send('get job')
}
const createJob = async (req, res) => {
    res.body.createBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.OK).json({ job })
}
const updateJob = async (req, res) => {
    res.send('update jobs')
}
const deleteJob = async (req, res) => {
    res.send('delete job')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}