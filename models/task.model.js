const mongoose = require('mongoose');
const {
  Schema
} = mongoose;
const taskSchema = new Schema({
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
