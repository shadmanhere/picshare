import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({limit:"32mb", extended:true}))
app.use(bodyParser.urlencoded({ limit:"32mb", extended:true}))
app.use(cors())

// here /posts will be the prefix: for all routes from postRoutes;
app.use('/posts', postRoutes);

const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(DB_CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => app.listen(PORT, ()=>console.log(`Server running on port:${PORT}`)))
  .catch(err => console.log(err.message))