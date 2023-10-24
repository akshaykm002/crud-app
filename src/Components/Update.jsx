import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {

  const {id} = useParams()

  const [values, setValues]=useState({
    name:'',
    email:'',
    phone:''
  })

  const navigate = useNavigate()
  const handleUpdate = (event) =>{
    event.preventDefault()
    axios.put("http://localhost:4000/users/"+id,values)
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err));
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/users/"+id)
    .then(res => setValues(res.data))
    .catch(err => console.log(err));
  },[id])
  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100 bg-light'>
    <div className='w-50 bg-white shadow border rounded px-5 pb-5 pt-3'>
      <h1>Update User</h1>
      <form onSubmit={handleUpdate}>
        <div className='mb-2'>
          <label htmlFor="name">Name :</label>
          <input type="text" name='name' placeholder='Enter Name' className='form-control'
            onChange={e=>setValues({...values, name: e.target.value})} 
            value={values.name}  />
        </div>
        <div className='mb-2'>
          <label htmlFor="email">E mail :</label>
          <input type="email" name='email' placeholder='Enter E mail' className='form-control'
            onChange={e=>setValues({...values, email: e.target.value})} 

            value={values.email}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="name">Phone :</label>
          <input type="text" name='name' placeholder='Enter Phone' className='form-control'
            onChange={e=>setValues({...values, phone: e.target.value})} 

           value={values.phone} />
        </div>
        <button className='btn btn-success'>Update</button>
        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
      </form>

    </div>

  </div> 
   )
}

export default Update