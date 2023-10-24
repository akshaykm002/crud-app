import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [values, setValues]=useState({
    name:'',
    email:'',
    phone:''
  })

  const navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("http://localhost:4000/users",values)
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err));

  }
  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100 bg-light'>
      <div className='w-50 bg-white shadow border rounded px-5 pb-5 pt-3'>
        <h1>Add an User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name :</label>
            <input type="text" name='name' placeholder='Enter Name' className='form-control'
            onChange={e=>setValues({...values, name: e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">E mail :</label>
            <input type="email" name='email' placeholder='Enter E mail' className='form-control'
             onChange={e=>setValues({...values, email: e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Phone :</label>
            <input type="text" name='name' placeholder='Enter Phone' className='form-control'
             onChange={e=>setValues({...values, phone: e.target.value})} />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>

      </div>

    </div>
  )
}

export default Create