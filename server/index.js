import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose"
import express from "express";

import postRoutes from './routes/posts.js'

const app = express();

app.use('/post', postRoutes);

app.use(bodyParser.json({limit:"30mb", extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended : true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://reactproject:Satyam%407491@myfirstcluster.wi6nbne.mongodb.net/?retryWrites=true&w=majority';

const Port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(Port, () => console.log(`server running on port ${Port}`)))
.catch((error)=> console.log(error.message))


// checking git