import express from 'express';
import dotenv from 'dotenv';
import './db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AdminRouter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';
import { Book } from './models/Book.js';
import { Student } from './models/Student.js';
import { Admin } from './models/Admin.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Get directory name

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser());

// Serve static files from the 'frontend/dist' directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Route to serve the frontend application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Define  API routes
app.use('/auth', AdminRouter);
app.use('/student', studentRouter);
app.use('/book', bookRouter);

app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments();
        const admin = await Admin.countDocuments();
        const book = await Book.countDocuments();
        return res.json({ ok: true, student, book, admin });
    } catch (err) {
        return res.json(err);
    }
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
