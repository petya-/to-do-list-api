const {
  models
} = require('../models/config');

const index = async ({
  name,
  completed
}) => {
  try {
    const tasks = await models.Task.find();

    return {
      message: 'success',
      data: tasks
    };
  } catch (error) {
    throw error;
  }
};

const create = async (
  data) => {
  try {
    console.log(data);
    const task = new models.Task({
      description: data
    });
    await task.save();

    return {
      message: 'success',
      data: task
    };
  } catch (error) {
    throw error;
  }
};

const update = async () => {
  return true;
};

module.exports = {
  index,
  create,
  update
};
