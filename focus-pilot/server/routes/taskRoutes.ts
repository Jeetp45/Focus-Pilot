import express from 'express';
import TaskController from '../controllers/taskController';

const taskRoute = express.Router();

taskRoute.get('/', TaskController.getTasks, (req, res) => {
  res.status(201).json(res.locals.tasks);
});

taskRoute.post('/', TaskController.createTask, (req, res) => {
  res.status(201).json(res.locals.newTask);
});

taskRoute.patch('/:id/toggle', TaskController.toggleTask, (req, res) => {
  res.status(201).json(res.locals.toggledTask);
});

taskRoute.delete('/', TaskController.deleteTask, (req, res) => {
  res.status(201).json(res.locals.deletedTask);
});

export default taskRoute;
