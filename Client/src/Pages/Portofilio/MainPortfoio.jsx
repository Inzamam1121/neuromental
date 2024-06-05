import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

const MainPortfoio = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default MainPortfoio