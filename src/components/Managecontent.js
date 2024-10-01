import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Managecontent = () => {

  const [contents, setContents] = useState("")
  const [fees, setFees] = useState("")
  const [duration, setDuration] = useState("")
  const [course_id, setCourse_id] = useState("")
  const navigate = useNavigate()

  const [content, setContent] = useState('')

  var { id } = useParams();

  useEffect(() => {

    axios.get('https://student-g9ap.onrender.com/cn_data/' + id)
      .then(function (response) {

        setContents(response.data.data.contents)
        setFees(response.data.data.fees)
        setDuration(response.data.data.duration)

      })

  }, [id])

  useEffect(() => {
    axios.get("https://student-g9ap.onrender.com/course")
      .then((res) => {
        console.log(res.data.data)
        setContent(res.data.data)

      })
  }, [])

  const Updatecontent = async (id) => {

    const data = {
      course_id: course_id,
      contents: contents,
      fees: fees,
      duration: duration
    }

    await axios.post('https://student-g9ap.onrender.com/content/update/' + id, data)
      .then((res) => {
        navigate('/viewcontent')
      })

    setContents("")
    setFees("")
    setDuration("")


  }

  return (
    <>
      <div className='d-flex justify-content-between m-4'>
        <div><h3>Update content</h3></div>
        <div><Link to="card">HOME</Link></div>
      </div>

      <div className='box m-auto'>
        <h4 className='text-primary'>Add content</h4>
        <select class=" mt-2 fs-5 w-75" aria-label="Default select example"  onChange={(e)=>{setCourse_id(e.target.value)}}>
          <option selected value={content}>Select Course</option>
          {
            content && content.map((item) => {
              return <option value={item._id} >{item.addcourse}</option>
            })
          }
        </select>
        <input type='text' value={contents} onChange={(e) => { setContents(e.target.value) }} className='mt-2 fs-5 w-75' placeholder='Contents' ></input> <br></br>
        <input type='text' value={fees} onChange={(e) => { setFees(e.target.value) }} className='mt-2 fs-5 w-75' placeholder='Fees'></input> <br></br>
        <input type='number' value={duration} onChange={(e) => { setDuration(e.target.value) }} min="0" className='mt-2 fs-5 w-75' placeholder='duration'></input> <br></br>
        <input type='submit' onClick={() => Updatecontent(id)} value="submit" className='mt-3 p-2 bg-primary text-white rounded'></input>
      </div>


    </>
  )
}

export default Managecontent
