import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'

const Viewstudent = () => {
  const [lststudent, setLststudent] = useState(null)

  const delstudata = (id) => {
    axios.get('https://student-g9ap.onrender.com/student/delete/' + id)
    getdata()
  }

  function getdata() {
    axios.get("https://student-g9ap.onrender.com/student")
      .then((res) => {
        setLststudent(res.data.data)

      })
  }

  useEffect(() => {

    getdata()
    
  }, [])

  return (
    <div>

      <Table striped bordered hover >
        <thead>
          <tr>

            <td>name</td>
            <td>email</td>
            <td>password</td>
            <td>manage</td>
            <td>manage</td>

          </tr>
        </thead>
        {lststudent && lststudent.map((item, index) => (
          <>
            <tbody>
              <tr >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td><Link to={`/studentupdatedata/${item._id}`}><button className='btn bg-success'>update</button></Link></td>
                <td><button className='btn bg-danger' onClick={() => delstudata(item._id)}>delete</button></td>

              </tr>

            </tbody>

          </>
        ))}
      </Table>
    </div>

  )
}

export default Viewstudent
