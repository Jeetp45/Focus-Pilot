import TaskModel from '../models/taskModel';
import { taskController } from '../../src/types';

const TaskController = {} as taskController;

TaskController.getTasks = async (req, res, next) => {
  const tasks = await TaskModel.find().sort({ createdAt: -1 });
  if (!tasks) {
    return next({
      log: 'Error in TaskController.getTasks: No tasks found',
      status: 500,
      message: { err: 'An error occurred in retrieval of tasks from database' },
    });
  }
  res.locals.tasks = tasks;
  return next();
};

export default TaskController;
