import express, { Request, Response } from 'express';
import {
  emailPasswordValidator,
  registerValidator,
} from '../validators/auth.validator';
import * as authController from '../controllers/auth.controller';

const authRouter = express.Router();

authRouter.post('/login', ...emailPasswordValidator, authController.login);
authRouter.post('/register', ...registerValidator, authController.register);

export default authRouter;
