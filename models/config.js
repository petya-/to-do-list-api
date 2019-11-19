const mongoose = require('mongoose');
const Todo = require('./todo.model');
require('dotenv').config();

const connectDb = async () => {
  return mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
};

const models = {
  Todo
};

module.exports = {
  models,
  connectDb
};
