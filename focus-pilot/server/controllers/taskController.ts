import TaskModel from '../models/taskModel';
import { taskController } from '../../src/types';

const TaskController = {} as taskController;

TaskController.getTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().sort({ createdAt: -1 });
    if (!tasks) return res.status(400).send('No tasks found.');
    res.locals.tasks = tasks;
    return next();
  } catch (error) {
    return next({
      log: `Error in TaskController.getTasks: ${error}`,
      message: { err: 'An error occurred while retrieving the tasks.' },
      status: 500,
    });
  }
};

TaskController.createTask = async (req, res, next) => {
  console.log('BODY:', req.body);
  const { title } = req.body;
  if (!title) return res.status(400).send('No title found');
  try {
    const newTask = await TaskModel.create({ title });
    res.locals.newTask = newTask;
    return next();
  } catch (error) {
    return next({
      log: `Error in TaskController.createTask: ${error}`,
      message: { err: 'An error occurred while creating task.' },
      status: 500,
    });
  }
};

export default TaskController;
