import type { Request, Response, NextFunction } from 'express';

export interface WidgetProps {
  title: string;
  value: string;
  children?: React.ReactNode;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export type taskController = {
  getTasks: (req: Request, res: Response, next: NextFunction) => void;
  createTask: (req: Request, res: Response, next: NextFunction) => void;
  toggleTask: (req: Request, res: Response, next: NextFunction) => void;
  deleteTask: (req: Request, res: Response, next: NextFunction) => void;
};

export type authController = {
  registerUser: (req: Request, res: Response, next: NextFunction) => void;
  loginUser: (req: Request, res: Response, next: NextFunction) => void;
  authenticateUser: (req: Request, res: Response, next: NextFunction) => void;
};
