import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Viewcourse = () => {

  const [viewcourse,setViewcourse] = useState(null)

  const deldata = (id) =>{

    axios.get("https://student-g9ap.onrender.com/course/delete/" + id)
    axios.get("https://student-g9ap.onrender.com/course")
    .then((res) => {
      setViewcourse(res.data.data)
    })

  }

  useEffect(() => {
    
    axios.get("https://student-g9ap.onrender.com/course")
    .then((res) => {
      setViewcourse(res.data.data)
    })

  },[])

  return (
    <div>
      <div>

        <Table striped bordered hover >
          <thead>
            <tr className='text-center'>
              <td>Course</td>
              <td>update</td>
              <td>delete</td>
            </tr>
          </thead>
          {viewcourse && viewcourse.map((item, index) => (
            <>
              <tbody>
                <tr className='text-center'>
                  <td>{item.addcourse}</td>
                  <td><Link to={`/courseupdatedata/${item._id}`}><button className='btn bg-success' > update</button></Link></td>

                  <td><button className='btn bg-danger' onClick={() => deldata(item._id)}>delete</button></td>

                </tr>

              </tbody>

            </>
          ))}
        </Table>
      </div>

    </div>
  )
}

export default Viewcourse
