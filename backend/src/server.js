import express from 'express';
import {ENV} from './config/env.js'; 
import {connectDB} from './config/db.js';

// load env vars from backend/.env (if present)


const app = express();

// use PORT from env or fallback to 3000
const PORT = ENV.PORT ;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () =>{
  console.log(`server is running on port ${PORT}`);
  connectDB();
});