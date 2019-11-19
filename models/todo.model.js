const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: String
});

module.exports = Todo;
