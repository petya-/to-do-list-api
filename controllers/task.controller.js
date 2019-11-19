const {
  models
} = require('../models/config');

const index = async () => {
  try {
    const tasks = await models.Task.find();

    return {
      message: 'success',
      data: tasks
    };
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

    return {
      message: 'success',
      data: task
    };
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
    return {
      message: 'success',
      data: task
    };
  } catch (error) {
    throw new Error('There was an error while editing the task.');
  }
};

module.exports = {
  index,
  create,
  update
};
