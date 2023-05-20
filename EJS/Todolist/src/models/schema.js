const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task:String
});

const task = new mongoose.model("TASK", todoSchema);
module.exports = task;