import express from 'express';
import * as contestController from '../controllers/contest.controller';

const contestRouter = express.Router();

contestRouter.get('', contestController.getContests);

contestRouter.get('/:id', contestController.getById);

contestRouter.post('', contestController.addContest);

contestRouter.delete('/:id', contestController.deleteContest);

export default contestRouter;
