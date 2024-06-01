import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const BookCard = ({book, role}) => {
    const {name, author, imageUrl,downloadUrl} = book;

    const handleClick = async(e) => {
      e.preventDefault();
      console.log(`Attempting to download book: ${name}`);

      if (downloadUrl) {
        console.log(`Direct download URL found: ${downloadUrl}`);
        window.open(downloadUrl, '_blank');
    } else {
      try {
        console.log(`Fetching download URL for book ID: ${_id}`);
        const response = await axios.get(`/book/download/${_id}`);
        if (response.status === 200) {
            console.log('Download initiated successfully');
            window.open(response.data.downloadUrl, '_blank');
        }
    } catch (error) {
        console.error('Error initiating download:', error);
    }
    }
  };


  return (
    <div className='book-card'>
     <a href="#" onClick={handleClick}>
                <img src={imageUrl} alt={name} className='book-image' />
            </a>
        <div className="book-details">
            <h3>{name}</h3>
            <p>{author}</p>
        </div>
        {role === "admin" &&
        <div className="book-actions">
        <button><Link to={`/book/${book._id}`} className='btn-link'>Edit</Link></button>
        <button><Link to={`/delete/${book._id}`} className='btn-link'>Delete</Link></button>
    </div>}
        
    </div>
  )
}

export default BookCard ; 
