import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import '../css/Books.css'


const Books = ({role}) => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get(`https://bookstore-6rbb.onrender.com/book/books`)
    .then(res => {
      setBooks(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  } , [])
  return (
    // <div className='book-page'>
    <div  className="parent-container">
    <div className='book-list'>
      {
        books.map(book => {
          return <BookCard key={book.id} book = {book} role = {role}></BookCard>
        })
      }
    </div>
    </div>
  )
}

export default Books;