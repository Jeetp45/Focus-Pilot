import TaskModel from '../models/taskModel';
import { taskController } from '../../src/types';

const TaskController = {} as taskController;

//Retrieve all tasks from the database
TaskController.getTasks = async (req, res, next) => {
  const userId = res.locals.user.id;
  try {
    const tasks = await TaskModel.find({ user: userId }).sort({
      createdAt: -1,
    });
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

//Make a new task in the database
TaskController.createTask = async (req, res, next) => {
  console.log('BODY:', req.body);
  const { title } = req.body;
  const userId = res.locals.user.id;
  if (!title || !userId) return res.status(400).send('Missing data');
  try {
    const newTask = await TaskModel.create({ title, user: userId });
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

//Toggle task after completion
TaskController.toggleTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const task = await TaskModel.findById(id);
    if (!task) return res.status(400).send('No task found');
    task.completed = !task.completed;
    await task.save();
    res.locals.toggledTask = task;
    return next();
  } catch (error) {
    return next({
      log: `Error in TaskController.toggleTask: ${error}`,
      message: { err: 'An error occurred while toggling task.' },
      status: 500,
    });
  }
};

TaskController.deleteTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    if (!deletedTask) return res.status(400).send('No task was found');
  } catch (error) {
    return next({
      log: `Error in TaskController.deleteTask: ${error}`,
      message: { err: 'An error occurred while deleting task.' },
      status: 500,
    });
  }
};

export default TaskController;
