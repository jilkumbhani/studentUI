import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';


const Adduser = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const adminragister =  async()=>{
      const data = {
        name: name,
        email: email,
        password: password
      }

      if(name == "")
      {
        alert("enter name")
      }
      else if(email == "")
      {
        alert("enter email")
      }
      else if(password == "")
      {
        alert("enter password")
      }
      else{
        await axios.post("https://student-g9ap.onrender.com/user",data).then((res)  => {
            console.log(res);

            navigate('/login')
          
          })
          setName("")
          setEmail("")
          setPassword("")
      }
    }

  return (
    <>


    <div className='box m-auto mt-5'>
      <h4 className='text-primary'>registration</h4>
      <input type='text' value={name}  onChange={(e)=>{setName(e.target.value)}} className='mt-2 fs-5 w-75 rounded ' placeholder='name' required></input> <br></br>
      <input type='email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} className='mt-2 fs-5 w-75 rounded ' placeholder='email'required ></input> <br></br>
      <input type='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} className='mt-2 fs-5 w-75 rounded ' placeholder='password' required></input> <br></br>
      <button className='mt-3 p-2 bg-primary text-white rounded' onClick={()=>adminragister()}>register</button>  <br></br>
      <Link to="/login">already have a account</Link>

    </div>
      
    </>
  )
}

export default Adduser