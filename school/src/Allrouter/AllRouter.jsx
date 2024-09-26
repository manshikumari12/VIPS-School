import React from 'react'

import { Routes,Route } from 'react-router-dom';
import Signup from '../Page/Signup';
import Home from '../Page/Home';
import Login from '../Page/Login';
import AboutUs from '../Page/AboutUs';
import Admission from '../Page/Admission';


function AllRouter() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUS' element={<AboutUs/>}/>

      <Route path='/login' element={<Login/>}/>
           
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/admission' element={<Admission/>}/>

          
            {/* <Route path='/profile' element={<Notepage/>}/> */}


        </Routes>
    </div>
  )
}

export default AllRouter
