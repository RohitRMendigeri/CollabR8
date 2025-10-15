import express from 'express';
import {ENV} from './config/env.js'; 

// load env vars from backend/.env (if present)


const app = express();

// use PORT from env or fallback to 3000
const PORT = ENV.PORT ;

console.log('mongo url is ', ENV.MONGO_URI);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));