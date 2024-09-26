import express from 'express';
import connectDB from './server';
import dotenv from 'dotenv';
import boardsRouter from './routes/api/boards';
import cardsRouter from './routes/api/cards';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/boards', boardsRouter);
app.use('/api/cards', cardsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
