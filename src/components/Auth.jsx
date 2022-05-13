import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

async function login(credentials) {
  try {
    const response = await axios.post(
      'http://159.223.57.121:8080/auth/do-login',
      credentials
    )
    console.log(response, 'response')
    localStorage.setItem('token', response.data.data.token)
    return response.data.token
  } catch (err) {
    console.log(err)
  }
}

const Auth = ({ setToken }) => {
  const navigate = useNavigate()
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  // set authorization header
  const setAuthHeader = (token) => {
    const authHeader = {
      headers: {
        Authorization: `${token}`
      }
    }
    return authHeader
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await login({
      username,
      password
    })
    console.log(token)
    setToken(token)
    navigate('/')
    setAuthHeader(token)
  }
  return (
    <div className='container mx-auto'>
      <div className='block p-6 my-20 mx-auto rounded-lg shadow-lg bg-white max-w-md'>
        <h1 className='text-2xl font-medium'>WELCOME BACK</h1>
        <p className=' text-sm mb-6 mt-2'>Please login to continue</p>
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-6'>
            <label
              htmlFor='username'
              className='form-label inline-block mb-2 text-gray-700'
            >
              Username
            </label>
            <input
              type='text'
              className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='username'
              placeholder='Enter username'
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className='form-group mb-6'>
            <label
              htmlFor='password'
              className='form-label inline-block mb-2 text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center mb-6'>
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                id='exampleCheck2'
              />
              <label className='form-check-label inline-block text-gray-800'>
                Remember me
              </label>
            </div>
            <a
              href='#!'
              className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
            >
              Forgot password?
            </a>
          </div>
          <button
            type='submit'
            className='
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
          >
            Sign in
          </button>
          <p className='text-gray-800 mt-6 text-center'>
            Not a member?{' '}
            <Link
              to={'/signup'}
              className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Auth
