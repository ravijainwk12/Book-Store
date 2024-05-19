import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Book Store</h1>
            <p className='hero-description'>
            Browse the Collection of our best top interesting Books.
            you will definitely find what you are looking for.
            </p>
        </div>
        <div className='hero-image'  >
           <img src='images\home_page.png' 
            style={{
      width: '90%',  // Adjust the size of the image
      display: 'block',  // Ensures no extra space below the image if needed
      margin: '0 auto'  // Center the image if it's a block element
    }}
           />
        </div>
    </div>
  )
}

export default Home;