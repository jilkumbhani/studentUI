import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'

const Viewcontent = () => {
  const [lststaff, setLststaff] = useState(null)

  const [course, setCourse] = useState(null)

  const delcondata = (id) => {
    axios.get('https://student-g9ap.onrender.com/content/delete/' + id)
    getdata()
  }

  function getdata() {
    axios.get("https://student-g9ap.onrender.com/content")
      .then((res) => {
        setLststaff(res.data.data)

      })
  }

  useEffect(() => {

    getdata()

  }, [])

  useEffect(() => {
    axios.get("https://student-g9ap.onrender.com/course")
      .then((res) => {
        console.log(res.data.data)
        setCourse(res.data.data)

      })
  }, [])

  return (
    <div>

      <Table striped bordered hover >
        <thead>
          <tr>

            <td>course</td>
            <td>content</td>
            <td>fees</td>
            <td>duration</td>
            <td>manage</td>
            <td>manage</td>

          </tr>
        </thead>
        {lststaff && lststaff.map((item, index) => (
          <>
            <tbody>
              <tr >
                <td>{
                  course != null && course.map((jil)=>{
                    return jil._id == item.course_id && jil.addcourse
                   })
                }</td>
                <td>{item.contents}</td>
                <td>{item.fees}</td>
                <td>{item.duration}</td>
                <td><Link to={`/contentupdatedata/${item._id}`}><button className='btn bg-success'>update</button></Link></td>
                <td><button className='btn bg-danger' onClick={() => delcondata(item._id)}>delete</button></td>

              </tr>

            </tbody>

          </>
        ))}
      </Table>
    </div>

  )
}

export default Viewcontent
