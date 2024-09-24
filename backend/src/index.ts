import express, {Request, Response} from 'express';
import connectDB from './server';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
