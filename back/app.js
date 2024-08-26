const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Task = require('./models/task');

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/task/new', async (req, res) => {
    const task = new Task({
        text: req.body.text,
        priority: req.body.priority,
        dueDate: req.body.dueDate,
        notes: req.body.notes
    });

    await task.save();
    res.json(task);
});

app.put('/task/update/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (task) {
        task.text = req.body.text;
        task.priority = req.body.priority;
        task.dueDate = req.body.dueDate;
        task.notes = req.body.notes;

        await task.save();
        res.json(task);
    } else {
        res.status(404).send("Task not found");
    }
});

app.delete('/task/delete/:id', async (req, res) => {
    const result = await Task.findByIdAndDelete(req.params.id);
    res.json({ result });
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
