import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Admin_login = ({ setStatus }) => {

  const navigate = useNavigate('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const login = async () => {

    const data = {
      email: email,
      password: password
    }


    axios.post('https://student-g9ap.onrender.com/login', data)
      .then(function (response) {
        console.log(response.data.status);

        if (response.data.status == "true") {
          setStatus(false)
          localStorage.setItem('status', false)
          navigate("/viewuser")
        }
        else if (response.data.status == "check password of admin") {
          alert("check password of admin")
        }
        else if (response.data.status == "check email of admin") {
          alert("check email of admin")
        }
        else {
          alert("already admin login")
        }
      })
    setEmail("")
    setPassword("")
  }

  return (
    <div>

      <div className='d-flex justify-content-between m-4'>

        <div className='box m-auto'>
          <h2 className='text-primary'>Login</h2>

          <div class="input_box">
            <input type="email" placeholder="Enter your email" className='mt-2 fs-5 w-75 rounded '
              onChange={(e) => { setEmail(e.target.value) }} value={email}
              required />
          </div>
          <div class="input_box">
            <input type="password" placeholder="Enter your password" className='mt-2 fs-5 w-75 rounded '
              onChange={(e) => { setPassword(e.target.value) }} value={password}
              required />
          </div>


          <button class="button" className='mt-3 p-2 bg-primary text-white rounded' onClick={() => { login() }}>Login Now</button>

          <div class="login_signup ">
            <Link to={'/register'}><a href="">Create an account!</a></Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Admin_login