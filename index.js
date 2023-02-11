import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://crud:crud@localhost:27017/crud?authSource=admin',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.on('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute); 

app.listen(5000, () => console.log('Server up and running... '));