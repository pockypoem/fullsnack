import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(UserRoute);

app.listen(5000, ()=> console.log("Server Up and Running......"));