import React from 'react'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ImagesDemo from './components/ImagesDemo'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
     
<Route path="/" element={<ImagesDemo />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
