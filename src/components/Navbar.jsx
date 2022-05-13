import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/signin')
  }
  return (
    <header>
      <nav className='bg-sky-600 pt-2 md:pt-1 pb-1 px-16 mt-0 h-auto fixed w-full z-20 top-0 flex justify-end'>
        <ul className='list-reset flex justify-between flex-1 md:flex-none items-center'>
          <li className='flex-1 md:flex-none md:mr-3'>
            <button
              onClick={logout}
              className='inline-block py-2 px-4 text-white no-underline'
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
