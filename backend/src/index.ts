import express, {Request, Response} from 'express';
import connectDB from './server';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({message: 'Hello from the backend!'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
