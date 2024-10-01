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


function AllRouter() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUS' element={<AboutUs/>}/>
     
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
