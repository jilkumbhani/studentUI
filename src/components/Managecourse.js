import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Managecourse = () => {

    const navigate = useNavigate();
    const [course,setCourse] = useState('')
    var {id} = useParams()


    useEffect(() => {

        axios.get('https://student-g9ap.onrender.com/c_data/' + id)
          .then(function (response) {
            // handle success
            console.log(response.data.data.addcourse);
    
            setCourse(response.data.data.addcourse)
    
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
        // Update(id)
      }, [id])
  
    const update = async (id) => {

        const data = {
          addcourse: course
        }
    
        await axios.post('https://student-g9ap.onrender.com/course/update/' + id, data)
          .then((res) => {
            console.log(res, 'data')
    
            navigate('/Viewcourse')
          })
    
        setCourse("")
      }

    return (
        <div>
            <div>

                <div className='d-flex justify-content-between m-4'>
                    <div><h3>ADD COURSE</h3></div>
                    <div><Link to="card">HOME</Link></div>
                </div>

                <div className='box m-auto'>
                    <h4 className='text-primary'>Add Course</h4>
                    <input type='course' className='mt-2 fs-5 w-75' value={course} placeholder='add course'
                        onChange={(e) => {
                            setCourse(e.target.value)
                        }}
                    ></input>
                    <br></br>
                    <input type='submit' onClick={() => update(id)} value="submit" className='mt-3 p-2 bg-primary text-white rounded'></input>

                </div>
            </div>
        </div>
    )
}

export default Managecourse
