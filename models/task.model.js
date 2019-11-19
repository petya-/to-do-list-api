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
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
