import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { formatError } from '../utils/errors.util';

export async function login(request: Request, response: Response) {
  const email: string = request.body.email;
  const password: string = request.body.password;

  const user = await authService.login(email, password);

  if (user) {
    return response.send(user);
  }

  response.status(400).send(formatError('Incorrect credentials'));
}

export async function register(request: Request, response: Response) {
  const email: string = request.body.email;
  const password: string = request.body.password;
  const name: string = request.body.name;

  const user = await authService.register(email, password, name);

  if (user) {
    return response.send(user);
  }

  response.status(400).send(formatError('Invalid email: user already exists'));
}
