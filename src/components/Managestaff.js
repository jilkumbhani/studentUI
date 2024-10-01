import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Staffmanage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  var { id } = useParams();

  useEffect(() => {

    axios.get('https://student-g9ap.onrender.com/stf_data/' + id)
      .then(function (response) {

        setName(response.data.data.name)
        setEmail(response.data.data.email)
        setPassword(response.data.data.password)
        
      })

  }, [id])

  const Updatestaff = async(id) => {

    const data = {
      name: name,
      email: email,
      password: password
    }

    await axios.post('https://student-g9ap.onrender.com/staff/update/' + id, data)
      .then((res) => {
        navigate('/viewstaff')
      })

    setName("")
    setEmail("")
    setPassword("")

    
  }

  return (
    <>
      <div className='d-flex justify-content-between m-4'>
        <div><h3>Update staff</h3></div>
        <div><Link to="card">HOME</Link></div>
      </div>

      <div className='box m-auto'>
        <h4 className='text-primary'>Add staff</h4>
        <input type='name' className='mt-2 fs-5 w-75' value={name} placeholder='name'
          onChange={(e) => {
            setName(e.target.value
            )
          }}></input>

        <br></br>

        <input type='email' className='mt-2 fs-5 w-75' value={email} placeholder='email'
          onChange={(e) => {
            setEmail(e.target.value
            )
          }}
        ></input>

        <br></br>

        <input type='password' className='mt-2 fs-5 w-75' value={password} placeholder='password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        ></input> <br></br>
        <input type='submit'onClick={() => Updatestaff(id)} value="submit" className='mt-3 p-2 bg-primary text-white rounded' ></input>
      </div>


    </>
  )
}

export default Staffmanage
