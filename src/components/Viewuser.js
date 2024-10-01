import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'

const Viewuser = () => {
  const [lstUser, setLstUser] = useState(null)

  const deldata = (id) => {
    axios.get('https://student-g9ap.onrender.com/user/delete/' + id)
    getdata()
  }

  function getdata() {
    axios.get("https://student-g9ap.onrender.com/user")
      .then((res) => {
        setLstUser(res.data.data)

      })
  }

  useEffect(() => {

    getdata()
    
  }, [])

  console.log(lstUser)
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
        {lstUser && lstUser.map((item, index) => (
          <>
            <tbody>
              <tr >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td><Link to={`/updatedata/${item._id}`}><button className='btn bg-success'>update</button></Link></td>
                <td><button className='btn bg-danger' onClick={() => deldata(item._id)}>delete</button></td>

              </tr>

            </tbody>

          </>
        ))}
      </Table>
    </div>

  )
}

export default Viewuser
