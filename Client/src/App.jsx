import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MainPortfoio from './Pages/Portofilio/MainPortfoio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainPortfoio/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
