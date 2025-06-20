import express from 'express';
import TaskController from '../controllers/taskController';

const router = express.Router();

router.get('/', TaskController.getTasks, (req, res) => {
  res.status(201).json(res.locals.tasks);
});

export default router;
