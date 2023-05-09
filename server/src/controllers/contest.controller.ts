import { Request, Response } from 'express';
import * as contestService from '../services/contest.service';
import { formatError } from '../utils/errors.util';

export async function getContests(request: Request, response: Response) {
  const users = await contestService.getContest();

  response.send(users);
}

export async function getById(request: Request, response: Response) {
  const id = request.params.id;
  const user = await contestService.getById(id);

  if (user) {
    return response.send(user);
  }

  response.status(404).send(formatError('User not found'));
}

export async function addContest(request: Request, response: Response) {
  const contest: Contest = request.body;

  const user = await contestService.addContest(contest);

  if (user) {
    return response.send(user);
  }

  return response.status(400).send(formatError('User data is invalid'));
}

export async function deleteContest(request: Request, response: Response) {
  const id = request.params.id;

  try {
    await contestService.deleteContest(id);

    return response.status(204).send();
  } catch (error) {
    console.log(error);
  }

  return response.status(404).send(formatError('User was not found'));
}
