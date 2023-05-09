import express from 'express';
import usersRoutes from './users.route';
import contestRouter from './contest.router';

const appRouter = express.Router();

appRouter.use('/users', usersRoutes);
appRouter.use('/contest', contestRouter);

export default appRouter;
