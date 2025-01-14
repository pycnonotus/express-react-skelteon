import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authMiddleware from './middlewares/auth';

dotenv.config();

const app = express();
app.use(express.json());
app.use(authMiddleware);

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

export default app;