import React from 'react'

import { Routes,Route } from 'react-router-dom';
import Signup from '../Page/Signup';
import Home from '../Page/Home';
import Login from '../Page/Login';
import AboutUs from '../Page/AboutUs';
import Admission from '../Page/Admission';
import Gallary from '../Page/Gallary';
import ContactUs from '../Page/ContactUs';


function AllRouter() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUS' element={<AboutUs/>}/>
      {/* <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/> */}
      <Route path='/admission' element={<Admission/>}/>
      <Route path='/Gallary' element={<Gallary/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>



        </Routes>
    </div>
  )
}

export default AllRouter
