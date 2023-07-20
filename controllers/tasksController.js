const Task = require('../models/taskModel')
const asyncHandler = require('express-async-handler');

const getAllTasks = asyncHandler(async (req, res) => {
        const tasks = await Task.find()
    
        if(!tasks) {
            res.status(404)
            throw new Error('No Tasks Found')
        }
        res.status(200).json({ tasks })
    });


    const createTask = asyncHandler(async (req, res) => {
        const { name } = req.body;
    
        if (!name) {
            res.status(400);
            throw new Error('All fields are mandatory')
        }
    
        const task = await Task.create({
            name,
        })
    
        res.status(201).json({ task });
    });
    

const getTask = asyncHandler(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    res.status(404);
    throw new Error('No task were found')
  }

  res.status(200).json({ task })
})

const updateTask = asyncHandler(async (req, res) => {
    const { id: taskID } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
        res.status(404);
        throw new Error('No task were found')
    }
  
    res.status(200).json({ task })
});


const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if(!task) {
        res.status(404);
        throw new Error('Task not Found')
    }

    await Task.findByIdAndDelete(task)

    res.status(200).json(task)
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}