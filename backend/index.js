



import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import './db.js';
import { AdminRouter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';
import { Book } from './models/Book.js';
import { Student } from './models/Student.js';
import { Admin } from './models/Admin.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser());

// Define API routes
app.use('/auth', AdminRouter);
app.use('/student', studentRouter);
app.use('/book', bookRouter);

app.get('/dashboard', async (req, res) => {
    try {
        const studentCount = await Student.countDocuments();
        const adminCount = await Admin.countDocuments();
        const bookCount = await Book.countDocuments();
        return res.json({ ok: true, student: studentCount, book: bookCount, admin: adminCount });
    } catch (err) {
        console.error("Error fetching dashboard data:", err);
        return res.status(500).json({ ok: false, error: "Failed to fetch dashboard data" });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
