import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy
app.use(cors())

app.get('/', (request, response) => {
    return response.status(234).send("welcome");
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`I'm listening to ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    })