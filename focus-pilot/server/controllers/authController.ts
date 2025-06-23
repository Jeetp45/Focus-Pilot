import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';
import { authController } from '../../src/types';

const JWT_SECRET = process.env.JWT_SECRET!;

const AuthController = {} as authController;

AuthController.registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const existingInfo = await UserModel.findOne({ email });
  if (existingInfo)
    return res.status(401).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    username,
    email,
    password: hashedPassword,
  });
};

AuthController.loginUser = async (req, res, next) => {
  //
};

AuthController.authenticateUser = async (req, res, next) => {
  //
};
