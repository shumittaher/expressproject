import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//use parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('a');
});

export default app;
