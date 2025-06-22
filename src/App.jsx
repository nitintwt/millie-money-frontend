import { useState } from 'react'
import Landing from './Pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/chat' element={<Dashboard/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
