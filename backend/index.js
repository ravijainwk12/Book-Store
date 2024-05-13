import express from 'express' ;
import dotenv from 'dotenv' ;
dotenv.config( );
import './db.js';

import cors from 'cors'
import cookieParser from 'cookie-parser'

import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { bookRouter } from './routes/book.js'
import { Book } from './models/Book.js'
import { Student } from './models/Student.js'
import { Admin } from './models/Admin.js'
import path from 'path';
const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173' 
    , "https://bookstorems-ravi-jains-projects-3fc6af80.vercel.app/"],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/student', studentRouter)
app.use('/book', bookRouter)

app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()
        return res.json({ok: true, student, book, admin})
    } catch(err) {
        return res.json(err)
    }
})

app.get("/", (req, res) => { 
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
 res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
 }
);

app.listen(process.env.PORT, () => {
    console.log(`Server Started at  ${process.env.PORT} `);
})