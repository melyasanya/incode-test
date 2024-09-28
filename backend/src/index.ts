import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import boardsRouter from './routes/api/boards';
import cardsRouter from './routes/api/cards';
import connectDB from './server';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/boards', boardsRouter);
app.use('/api/cards', cardsRouter);

app.head('/api/head', (req, res) => {
  res.setHeader('Custom-Header', 'YourValue');
  res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
