import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Addstudent = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const sturegister =  async()=>{
      const data = {
        name: name,
        email: email,
        password: password
      }
      
        await axios.post("https://student-g9ap.onrender.com/student",data).then((res)  => {
            console.log(res);

            navigate('/viewstudent')
          
          })
          setName("")
          setEmail("")
          setPassword("")
          
    }

  return (
    <>

    
    <div className='d-flex justify-content-between m-4'>
      <div><h3>ADD STUDENT</h3></div>
      <div><Link to="">HOME</Link></div>
    </div>

    <div className='box m-auto'>
      <h4 className='text-primary'>ADD STUDENT</h4>
      <input type='text' value={name}  onChange={(e)=>{setName(e.target.value)}} className='mt-2 fs-5 w-75 rounded ' placeholder='name' ></input> <br></br>
      <input type='email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} className='mt-2 fs-5 w-75 rounded ' placeholder='email' ></input> <br></br>
      <input type='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} className='mt-2 fs-5 w-75 rounded ' placeholder='password'></input> <br></br>
      <button className='mt-3 p-2 bg-primary text-white rounded' onClick={()=>sturegister()}>submit</button>

    </div>
      
    </>
  )
}

export default Addstudent