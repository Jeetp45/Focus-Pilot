import express from 'express';
import AuthController from '../controllers/authController';

const authRoute = express.Router();

authRoute.post('/register', AuthController.registerUser, (req, res) => {
  res.status(201).json({ token: res.locals.token, user: res.locals.user });
});

authRoute.post('/login', AuthController.loginUser, (req, res) => {
  res
    .status(201)
    .json({ token: res.locals.loginToken, user: res.locals.loginUser });
});

export default authRoute;
