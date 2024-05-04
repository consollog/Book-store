import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.Route.js'
import userRouter from './route/user.Route.js'
import cors from 'cors';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.PORT;
const URI = process.env.MongoDBURL;

//Connect to MongoDb
try {
    mongoose.connect(URI,
        {
            UseNewUrlParser: true,
            UseUnifiedTopology: true
        });
    console.log("Connected to MongoDb");
} catch (error) {
    console.log("Error:", error);
}

app.use("/book", bookRoute)
app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`app is listening ${port}`);
})