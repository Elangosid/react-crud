import React from 'react'
import { Create } from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import "./App.css"
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='main'>
      <ToastContainer theme='dark' position='bottom-right' />
      <h2>Crud Opration</h2>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App