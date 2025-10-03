const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Task = require("../models/Task");

// Get all tasks for user
router.get("/", auth, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user });
        res.json(tasks);
    } catch(err) {
        res.status(500).json({ msg: "Server error" });
    }
});

// Add new task
router.post("/", auth, async (req, res) => {
    const { title } = req.body;
    try {
        const newTask = new Task({ user: req.user, title });
        await newTask.save();
        res.json(newTask);
    } catch(err) {
        res.status(500).json({ msg: "Server error" });
    }
});

// Update task (toggle completed)
router.put("/:id", auth, async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({ msg: "Task not found" });
        task.completed = !task.completed;
        await task.save();
        res.json(task);
    } catch(err) {
        res.status(500).json({ msg: "Server error" });
    }
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ msg: "Task deleted" });
    } catch(err) {
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
