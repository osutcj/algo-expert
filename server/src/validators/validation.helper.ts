import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { formatError } from '../utils/errors.util';

export const genericValidator = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response
      .status(400)
      .send(formatError('Invalid data', JSON.stringify(errors.array())));
  }

  next();
};
