import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { user } from './app/modules/user/user.route';
import { userLogin } from './app/modules/auth/auth.route';


// Adjust the path as necessary

const app: Application = express();
app.use(cors());
app.use(express.json());

 app.use('/api/v1', user);
 app.use('/api/v1', userLogin);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;