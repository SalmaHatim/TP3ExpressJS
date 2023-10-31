import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import {bookRouter} from './routes/BookRoute'

dotenv.config()
const server = express()
server.use(express.json())
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/book', bookRouter)

mongoose
  .connect('mongodb://127.0.0.1/typescript_ex', {
  })

  .then(() => {
    server.listen(3000, ()=>{
        console.log("listening on port 3000")
    })

  })
  .catch((error:any) => console.log(`${error} did not connect`));
