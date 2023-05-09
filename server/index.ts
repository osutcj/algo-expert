import express, { Express } from 'express';
import dotenv from 'dotenv';
import authRouter from './src/routes/auth.router';
import cors from 'cors';
import bodyParser from 'body-parser';
import appRouter from './src/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/v1', appRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
