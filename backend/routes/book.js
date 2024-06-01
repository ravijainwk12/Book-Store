import express from 'express'
import { Book } from '../models/Book.js';
const router = express.Router();
import { verifyAdmin } from './auth.js';


router.get('/book/download/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`Request to download book with id: ${id}`);
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
          }

        const downloadUrl = book.downloadUrl;

       
        if (downloadUrl) {
            console.log(`Redirecting to download URL: ${downloadUrl}`);
            return res.redirect(downloadUrl);
        } else {
            console.error('Download URL not found for this book');
            return res.status(404).json({ message: "Download URL not found for this book" });
        }
    } catch(err) {
        console.error('Error downloading the book:', err);
        return res.status(500).json({ message: "Error downloading the book", error: err });
    }
});



router.post('/add',verifyAdmin, async (req, res) => {
    try {
        const {name, author, imageUrl,downloadUrl} = req.body;
        const newbook = new Book({
            name,
            author,
            imageUrl,
            downloadUrl
        })
        await newbook.save()
        return res.json({added: true})
    } catch(err) {
        return res.json({message: "Error in adding book"})
    }
})

router.get('/books', async (req, res) => {
    try {
        const books = await Book.find()
        return res.json(books)
    }catch(err) {
        return res.json(err)
    }
})

router.get('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById({_id: id})
        return res.json(book)
    }catch(err) {
        return res.json(err)
    }
})
router.put('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, book})
    }catch(err) {
        return res.json(err)
    }
})

router.delete('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete({_id: id})
        return res.json({deleted: true, book})
    }catch(err) {
        return res.json(err)
    }
})

export {router as bookRouter};