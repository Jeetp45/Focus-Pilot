import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import dbConnect from './dbConnect.ts';
import taskRoute from './routes/taskRoutes.ts';
import authRoute from './routes/authRoutes.ts';
import AuthController from './controllers/authController.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/tasks', AuthController.authenticateUser, taskRoute);
app.use('/api/auth', authRoute);

// SERVE STATIC FILES (React Frontend)
const __dirname = path.resolve(); // Use path.resolve for ES modules
app.use(express.static(path.join(__dirname, 'dist'))); // Serve React build files

// 404 FOR UNRECOGNIZED REQUESTS
app.get(/.*/, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// GLOBAL ERROR HANDLER
interface CustomError extends Error {
  status?: number;
  log?: string;
}

app.use((err: CustomError, req: Request, res: Response): void => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, {
    log: err.log || defaultErr.log,
    status: err.status || defaultErr.status,
    message: err.message || defaultErr.message,
  });
  console.error(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

// INITIALIZE DATABASE CONNECTION
(async () => {
  try {
    await dbConnect();
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit if the database connection fails
  }
})();

// INITIALIZE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
