import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const app = express();
dotenv.config();
import cookieParser from 'cookie-parser';

connectDB();
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is listening on PORT 5000'));
