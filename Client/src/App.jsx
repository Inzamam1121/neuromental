import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MainPortfoio from './Pages/Portofilio/MainPortfoio'
import Student from './Pages/Dashboard/MainDashboard/Student'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainPortfoio/>}></Route>
          <Route path='/Student' element={<Student/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
