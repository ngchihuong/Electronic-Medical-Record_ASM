import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import userRoutes from "./routes/Users.route";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, { dbName: 'AssignmentFrontEnd' })
    .then(() =>
        console.log("Connected to database: ", process.env.MONGODB_CONNECTION_STRING)
    );


const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", userRoutes)

app.listen(3009, () => {
    console.log("Server listening on localhost:3009");

})