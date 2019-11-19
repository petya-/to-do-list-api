const {
  models
} = require('../models/config');

const index = async () => {
  try {
    const tasks = await models.Task.find();

    return tasks;
  } catch (error) {
    throw new Error('There was an error getting the tasks. Please try again');
  }
};

const create = async ({
  description
}) => {
  try {
    const task = new models.Task({
      description
    });
    await task.save();

    return task;
  } catch (error) {
    throw new Error('There was an error while creating a task.');
  }
};

const update = async (_id, {
  description,
  completed
}) => {
  try {
    const task = await models.Task.findOne({
      _id
    });

    task.description = description;
    task.completed = completed;
    await task.save();
    return task;
  } catch (error) {
    throw new Error('There was an error while editing the task.');
  }
};

const deleteTask = async (_id) => {
  try {
    await models.Task.remove({
      _id
    });
    return {};
  } catch (error) {
    throw new Error('There was an error while deleting the task.');
  }
};

module.exports = {
  index,
  create,
  update,
  deleteTask
};
