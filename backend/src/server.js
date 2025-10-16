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



const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log("Server started on port:", ENV.PORT);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();

export default app;