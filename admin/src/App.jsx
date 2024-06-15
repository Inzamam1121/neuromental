import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Admin from './Pages/MainDashboard/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/Admin/*' element={<Admin/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
