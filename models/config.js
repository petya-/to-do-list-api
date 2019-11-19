const mongoose = require('mongoose');
const Task = require('./task.model');
require('dotenv').config();

const connectDb = async () => mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const models = {
  Task
};

module.exports = {
  models,
  connectDb
};
