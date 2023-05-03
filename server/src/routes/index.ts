import express from 'express';
import usersRoutes from './users.route';

const appRouter = express.Router();

appRouter.use('/users', usersRoutes);

export default appRouter;
