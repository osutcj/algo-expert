import { Request, Response } from 'express';
import * as userService from '../services/users.service';
import { formatError } from '../utils/errors.util';

export async function getUsers(request: Request, response: Response) {
  const users = await userService.getUsers();

  response.send(users);
}

export async function getById(request: Request, response: Response) {
  const id = request.params.id;
  const user = await userService.getById(id);

  if (user) {
    return response.send(user);
  }

  response.status(404).send(formatError('User not found'));
}

export async function addUser(request: Request, response: Response) {
  const email: string = request.body.email;
  const name: string = request.body.name;

  const user = await userService.addUser(email, name);

  if (user) {
    return response.send(user);
  }

  return response.status(400).send(formatError('User data is invalid'));
}

export async function deleteUser(request: Request, response: Response) {
  const id = request.params.id;

  try {
    await userService.deleteUser(id);

    return response.status(204).send();
  } catch (error) {
    console.log(error);
  }

  return response.status(404).send(formatError('User was not found'));
}
