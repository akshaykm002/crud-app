import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom';

function Home() {
  const [data, setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/users")
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])

  const handleDelete = (id) =>{
    const confirmDelete = window.confirm("Would you like to delete?")
    if(confirmDelete){
      axios.delete(`http://localhost:4000/users/${id}`)
      .then(res =>{
        setData(data.filter(item => item.id !== id));
      } )
      .catch(err => console.log(err));
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add User</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E mail</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d,i)=>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className='btn'><i className="fa-brands fa-readme"></i></Link>
                    <Link to={`/update/${d.id}`} className='btn'><i className="fa-solid fa-pen-to-square"></i></Link>
                    <button onClick={() => handleDelete(d.id)} className='btn'><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;
