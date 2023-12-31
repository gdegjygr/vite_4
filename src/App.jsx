import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import UserForm from './pages/UserForm'
import UserData from './pages/Userdata'
import Layout from './components/Layout'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='form' element={<UserForm/>} />
        <Route path='data-base' element={<UserData/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App