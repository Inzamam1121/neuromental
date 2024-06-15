import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MainPortfoio from './Pages/Portofilio/MainPortfoio'
import Student from './Pages/Dashboard/MainDashboard/Student'
import Teacher from './Pages/Dashboard/TeacherDashboard/Teacher'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path='/*' element={<MainPortfoio/>}></Route>
          <Route path='/Student/*' element={<Student/>}></Route>
          <Route path='/Teacher/*' element={<Teacher/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
