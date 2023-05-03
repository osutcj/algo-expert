import { body, validationResult } from 'express-validator';
import { genericValidator } from './validation.helper';

export const emailPasswordValidator = [
  body('email').isEmail(),
  body('password').isString().isLength({ min: 5 }),
  genericValidator,
];

export const registerValidator = [
  body('email').isEmail(),
  body('password').isString().isLength({ min: 5 }),
  body('name').isString(),
  genericValidator,
];
