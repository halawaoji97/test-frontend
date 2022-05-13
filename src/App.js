import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth'
import CreateBook from './components/CreateBook'
import Dashboard from './components/Dashboard'
import Register from './components/Register'

function setToken() {
  // localStorage.setItem('token', 'data')
}

function getToken() {
  return localStorage.getItem('token')
}

function App() {
  const token = getToken()

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/create' element={<CreateBook />} />
      <Route
        path='/signin'
        element={<Auth setToken={setToken} token={token} />}
      />
    </Routes>
  )
}

export default App
