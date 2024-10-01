import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Adduser from './components/Adduser';
import Admin_login from './components/Admin_login';
import Viewcontent from './components/Viewcontent';
import Addcontent from './components/Addcontent';
import Viewuser from './components/Viewuser';
import Addcourse from './components/Addcourse';
import Viewcourse from './components/Viewcourse';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Manage from './components/Manage';
import Managecourse from './components/Managecourse';
import Managecontent from './components/Managecontent';
import Addstudent from './components/Addstudent';
import Viewstudent from './components/Viewstudent';
import Addstaff from './components/Addstaff';
import Viewstaff from './components/Viewstaff';
import Studentmanage from './components/Studentmanage';
import Managestaff from './components/Managestaff';

function App() {
  let loginscreen

  const [status, setStatus] = useState(loginscreen)
  
  useEffect(() => {
    loginscreen = localStorage.getItem('status')
    loginscreen == true || loginscreen == null ? loginscreen = true : loginscreen = false
  }, [status])

  return (
    <>

      {
        status ? <Routes>
          <Route path="/" element={<Adduser />} />
          <Route path="/login" element={<Admin_login setStatus={setStatus} />} />
          <Route path="/register" element={<Adduser />} />
        </Routes>
          :
          <div>
            <div className='d-flex'>
              <div className='w-25'><Sidebar></Sidebar></div>
              <div className='w-75 '>
                <div><Header setStatus={setStatus}></Header></div>
                <Routes>
                  <Route path="/viewuser" element={<Viewuser />} />
                  <Route path="/addcourse" element={<Addcourse />} />
                  <Route path="/viewcourse" element={<Viewcourse />} />
                  <Route path="/updatedata/:id" element={<Manage />} />
                  <Route path="/courseupdatedata/:id" element={<Managecourse />}></Route>
                  <Route path="/addstudent" element={<Addstudent />} />
                  <Route path="/viewstudent" element={<Viewstudent />} />
                  <Route path="/addcontent" element={<Addcontent />} />
                  <Route path="/viewcontent" element={<Viewcontent />} />
                  <Route path="/studentupdatedata/:id" element={<Studentmanage />}></Route>
                  <Route path="/staffupdatedata/:id" element={<Managestaff />}></Route>
                  <Route path="/addstaff" element={<Addstaff />}></Route>
                  <Route path="/viewstaff" element={<Viewstaff />}></Route>
                  <Route path="/addcontent" element={<Addcontent />} />
                  <Route path="/viewcontent" element={<Viewcontent />} />
                  <Route path="/contentupdatedata/:id" element={<Managecontent />}></Route>

                </Routes>
              </div>
            </div>

          </div>
      }
    </>
  );
}

export default App;