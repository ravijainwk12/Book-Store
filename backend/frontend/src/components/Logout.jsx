import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({setRole}) => {
    const navigate = useNavigate()
  useEffect(() => {
    axios.get(`https://bookstore-6rbb.onrender.com/auth/logout`)
    .then(res => {
        if(res.data.logout) {
          alert ("🔺❗ You just LoggedOut. SeeYou Soon.");
            setRole('')
            navigate('/')
        }
    }).catch(err =>{
      alert ("Error :" , err);
      console.log(err)});
  }, [])
}

export default Logout;