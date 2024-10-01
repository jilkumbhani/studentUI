import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'

const Viewstaff = () => {
  const [lststaff, setLststaff] = useState(null)

  const delstfdata = (id) => {
    axios.get('https://student-g9ap.onrender.com/staff/delete/' + id)
    getdata()
  }

  function getdata() {
    axios.get("https://student-g9ap.onrender.com/staff")
      .then((res) => {
        setLststaff(res.data.data)

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
        {lststaff && lststaff.map((item, index) => (
          <>
            <tbody>
              <tr >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td><Link to={`/staffupdatedata/${item._id}`}><button className='btn bg-success'>update</button></Link></td>
                <td><button className='btn bg-danger' onClick={() => delstfdata(item._id)}>delete</button></td>

              </tr>

            </tbody>

          </>
        ))}
      </Table>
    </div>

  )
}

export default Viewstaff
