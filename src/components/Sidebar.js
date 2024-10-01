import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLogoReact } from "react-icons/io5";
import { AiFillDashboard } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { SiNginxproxymanager } from "react-icons/si";
import { SiConcourse } from "react-icons/si";
import { IoPersonAddSharp } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion';
import { IoMdAdd } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>
                
    <div >
      
      <div className=' bg-white ms-2 p-2 '>
        <IoLogoReact className='fs-1' color='blue' /> R E A C T
        <div className="user pt-3">
          <img src={require('./i.webp')} alt="" />
          <h6>JIL KUMBHANI</h6>
        </div>
        <nav>
          <ul className="main_menu">
            <div>
              <Accordion  >
                <Accordion.Item >
                  <Accordion.Header><li><Link to="card"><a href=""><AiFillDashboard className='me-1 fs-5' />DASHBOARD</a></Link></li> </Accordion.Header>
             
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              <Accordion defaultActiveKey="0" className='pt-2'>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><li><a href=""><GrUserManager className='me-1 fs-5' />ADD ADMIN</a></li></Accordion.Header>
                  <Accordion.Body>
                  <div className='pt-3'><li><Link to="viewuser"><a href=""><GrFormView className='me-1 fs-5'/> VIEW ADMIN</a></Link></li></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              <Accordion defaultActiveKey="0" className='pt-2'>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> <li><a href=""><SiConcourse className='me-1 fs-5' />ADD COURSE</a></li></Accordion.Header>
                  <Accordion.Body>
                  <div><li><Link to="addcourse"><a href=""><IoMdAdd  className='me-1 fs-5'/> ADD COURSE</a></Link></li></div>
                      <div className='pt-3'><li><Link to="viewcourse"><a href=""><GrFormView className='me-1 fs-5'/> VIEW COURSE</a></Link></li></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              <Accordion defaultActiveKey="0" className='pt-2'>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><li><a href=""><IoPersonAddSharp className='me-1 fs-5' />ADD CONTENT</a></li></Accordion.Header>
                  <Accordion.Body>
                      <div><li><Link to="addcontent"><a href=""><IoMdAdd  className='me-1 fs-5'/> ADD CONTENT</a></Link></li></div>
                      <div className='pt-3'><li><Link to="viewcontent"><a href=""><GrFormView className='me-1 fs-5'/> VIEW CONTENT</a></Link></li></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              <Accordion defaultActiveKey="0" className='pt-2'>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> <li><a href=""><SiNginxproxymanager className='me-1 fs-5' />ADD STUDENT</a></li></Accordion.Header>
                  <Accordion.Body>
                  <div><li><Link to="addstudent"><a href=""><IoMdAdd  className='me-1 fs-5'/> ADD STUDENT</a></Link></li></div>
                      <div className='pt-3'><li><Link to="viewstudent"><a href=""><GrFormView className='me-1 fs-5'/> VIEW STUDENT</a></Link></li></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              <Accordion defaultActiveKey="0" className='pt-2'>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><li><a href=""><IoPersonAddSharp className='me-1 fs-5' />ADD STAFF</a></li></Accordion.Header>
                  <Accordion.Body>
                      <div><li><Link to="addstaff"><a href=""><IoMdAdd  className='me-1 fs-5'/> ADD STAFF</a></Link></li></div>
                      <div className='pt-3'><li><Link to="viewstaff"><a href=""><GrFormView className='me-1 fs-5'/> VIEW STAFF</a></Link></li></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </ul>
        </nav>
      </div>

    </div>

    </div>
  )
}

export default Sidebar