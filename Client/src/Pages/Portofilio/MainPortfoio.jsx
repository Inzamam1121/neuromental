import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Login from './Login'
import SignUp from './SignUp'
const MainPortfoio = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default MainPortfoio