import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Addcourse = () => {

  const navigate = useNavigate();
  const [course,setCourse] = useState('')

  const Addcourse = async () => {
    const data = {
      addcourse: course
    }

    axios.post('https://student-g9ap.onrender.com/course',data)
    .then(function (response) {
      // handle success
      console.log(response);
      navigate("/viewcourse")

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  setCourse("")
  
  }

  return (
    <div>
        
      <div className='d-flex justify-content-between m-4'>
        <div><h3>ADD COURSE</h3></div>
        <div><Link to="card">HOME</Link></div>
      </div>

      <div className='box m-auto'>
        <h4 className='text-primary'>ADD COURSE</h4>
        <input type='course' className='mt-2 fs-5 w-75' value={course} placeholder='add course'
        onChange={(e)=>{
          setCourse(e.target.value)
        }}
        ></input> 
        <br></br>
        <input type='submit' onClick={()=>Addcourse()} value="Addcourse" className='mt-3 p-2 bg-primary text-white rounded'></input>

      </div>
    </div>
  )
}

export default Addcourse
