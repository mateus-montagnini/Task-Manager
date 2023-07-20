require('dotenv').config();
const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasksRoutes');
const PORT = process.env.PORT || 3000;
const connectDB = require('./db/connect');

//db connection
connectDB();


// middleware
app.use(express.static('./public'))
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasksRoute);



app.listen(PORT, () => console.log(`Listenin on port: ${PORT}`))