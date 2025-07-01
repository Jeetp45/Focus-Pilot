import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';
import { authController } from '../../src/types';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

const AuthController = {} as authController;

AuthController.registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  try {
    const existingInfo = await UserModel.findOne({ email });
    if (existingInfo)
      return res.status(401).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.locals.token = token;
    res.locals.user = { id: user._id, username, email };
    return next();
  } catch (error) {
    return next({
      log: `Error in AuthController.registerUser: ${error}`,
      message: { err: 'An error occurred while registering user.' },
      status: 500,
    });
  }
};

AuthController.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.locals.loginToken = token;
    res.locals.loginUser = { id: user._id, username: user.username, email };
    return next();
  } catch (error) {
    return next({
      log: `Error in AuthController.loginUser: ${error}`,
      message: { err: 'An error occurred while logging in user.' },
      status: 500,
    });
  }
};

AuthController.authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    res.locals.user = { id: decoded.id };
    return next();
  } catch (error) {
    return next({
      log: `Error in AuthController.authenticateUser: ${error}`,
      message: { err: 'An error occurred while authenticating user.' },
      status: 500,
    });
  }
};

export default AuthController;
