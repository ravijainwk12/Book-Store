import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDownload = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchDownloadUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/book/download/${id}`);
        if (response.status === 200) {
          window.location.href = response.request.responseURL;
        }
      } catch (error) {
        console.error('Error initiating download:', error);
     
      }
    };

    fetchDownloadUrl();
  }, [id]);

  return (
    <div>
    <p>Downloading...</p>
    </div>
  );
};

export default BookDownload;
