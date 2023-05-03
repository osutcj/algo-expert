import express from 'express';
import * as userController from '../controllers/users.controller';

const usersRoutes = express.Router();

usersRoutes.get('', userController.getUsers);

usersRoutes.get('/:id', userController.getById);

usersRoutes.post('', userController.addUser);

usersRoutes.delete('/:id', userController.deleteUser);

export default usersRoutes;
