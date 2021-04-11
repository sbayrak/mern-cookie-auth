import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
const app = express();
dotenv.config();

connectDB();

app.get('/', (req, res) => {
  res.send('hi');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is listening on PORT 5000'));
