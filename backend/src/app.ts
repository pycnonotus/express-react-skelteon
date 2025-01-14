import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

export default app;