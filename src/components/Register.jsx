import React, { useState } from 'react'
import { Link } from 'react-router-dom'

async function register(profileName, username, password, address) {
  const response = await fetch('http://159.223.57.121:8080/auth/do-register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profileName, username, password, address })
  })
  const data = await response.json()
  return data
}

const Register = () => {
  const [profileName, setprofileName] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (profileName && username && password) {
      const data = await register(profileName, username, password, address)
      console.log(data)
      if (data.username === username) {
        setMessage(`${data.message}`)
        setError(false)
        // redirect to login page
      } else {
        setMessage(`${data.message}`)
        setError(true)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'profileName') {
      setprofileName(value)
    } else if (name === 'username') {
      setUserName(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'address') {
      setAddress(value)
    }
  }
  return (
    <div className='container mx-auto'>
      <div className='block p-6 rounded-lg my-20 mx-auto shadow-lg bg-white max-w-md'>
        {error && <div className='text-gray-900 text-center'>{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-6'>
            <label
              htmlFor='profileName'
              className='form-label inline-block mb-2 text-gray-700'
            >
              Full Name
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
              id='profileName'
              placeholder='Enter full name'
              name='profileName'
              value={profileName}
              onChange={handleChange}
              required
            />
          </div>
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
              name='username'
              value={username}
              onChange={handleChange}
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
              id='exampleInput126'
              placeholder='Enter password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className='form-group mb-6'>
            <label
              htmlFor='address'
              className='form-label inline-block mb-2 text-gray-700'
            >
              Address
            </label>
            <textarea
              className='
        form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
              id='address'
              rows='3'
              placeholder='Enter address'
              name='address'
              value={address}
              onChange={handleChange}
            ></textarea>
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
            Sign up
          </button>
        </form>
        <div>
          <Link to='/signin'>Signin</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
