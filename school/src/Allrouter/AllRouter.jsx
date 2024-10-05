import React from 'react'

import { Routes,Route } from 'react-router-dom';

import Home from '../Page/Home';

import AboutUs from '../Page/AboutUs';
import Admission from '../Page/Admission';
import Gallary from '../Page/Gallary';
import ContactUs from '../Page/ContactUs';
import SchoolTiming from '../Page/SchoolTiming';
import Uniform from '../Page/Uniform';
import Guidelines from '../Page/Guidelines';
import Signup from '../Page/Signup';
import Login from '../Page/Login';
import SchoolDashboard from '../Page/SchoolDashboard';
// import AdminDashboard from '../Page/AdminDashboard';
// import TeacherDashboard from '../Page/TeacherDashboard';

// import ParentDashboard from '../Page/ParentDashboard';
import MyClass from '../Page/MyClass';
import TeacherDashboard from '../Page/TeacherDashboard';
import StudentDashboard from '../Page/StudentDashboard';
import Dashboard from '../Page/Dashbord';


function AllRouter() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUS' element={<AboutUs/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
      <Route path='/schooldashbord' element={<SchoolDashboard/>}/>
      <Route path='/teacher' element={<TeacherDashboard/>}/>
      {/* <Route path='/teacher' element={<TeacherDashboard/>}/> */}
      <Route path='/myclass' element={<MyClass/>}/>
      <Route path='/student' element={<StudentDashboard/>}/>
      <Route path='/dashbord' element={<Dashboard/>}/>


      {/* <Route path='/parent' element={<ParentDashboard/>}/> */}


      <Route path='/login' element={<Login/>}/>
      <Route path='/admission' element={<Admission/>}/>
      <Route path='/Gallary' element={<Gallary/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/schooltiming' element={<SchoolTiming/>}/>
      <Route path='/schooluniform' element={<Uniform/>}/>
      <Route path='/schoolguidelines' element={<Guidelines/>}/>


 

        </Routes>
    </div>
  )
}

export default AllRouter
