import express from 'express';
import {ENV} from './config/env.js'; 
import {connectDB} from './config/db.js';
import { clerkMiddleware } from "@clerk/express";
import {functions, inngest} from './config/inngest.js';
import { serve } from "inngest/express";
// load env vars from backend/.env (if present)


const app = express();

app.use(express.json()); // to parse json request body
app.use(clerkMiddleware()); // req.auth will be available in the request object


app.use("/api/inngest", serve({ client: inngest, functions }));
// use PORT from env
const PORT = ENV.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});






app.listen(PORT, () =>{
  console.log(`server is running on port ${PORT}`);
  connectDB();
});