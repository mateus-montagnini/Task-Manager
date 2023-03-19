require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get('/api/v1/tasks')            - get all the tasks
// app.post('/api/v1/tasks')            - create a new task
// app.get('/api/v1/task/:id')            - get single task
// app.patch('/api/v1/task/:id')            - update task
// app.delete('/api/v1/task/:id')            - delete task

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONO_URI)
        app.listen(PORT, console.log(`Server is listening on port: ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();