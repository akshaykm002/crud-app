import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const [data, setData]=useState([])

  const {id} = useParams()

  useEffect(()=>{
    axios.get("http://localhost:4000/users/"+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[id])

  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100 bg-light'>
      <div className='w-45 bg-white shadow border rounded px-5 pb-5 pt-3'>
        <h1 className='d-flex justify-content-center'>Details of <span className='text-success ms-3'> {data.name}</span></h1>
        <div className='mb-2'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>E mail: {data.email} </strong>
        </div>
        <div className='mb-2'>
          <strong>Phone: {data.phone}</strong>
        </div>
        <div className='mb-2'>
          <strong>Website: {data.website}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>

  )
}

export default Read