import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className='bg-sky-600 pt-2 md:pt-1 pb-1 px-16 mt-0 h-auto fixed w-full z-20 top-0 flex justify-end'>
        <ul className='list-reset flex justify-between flex-1 md:flex-none items-center'>
          <li className='flex-1 md:flex-none md:mr-3'>
            <Link
              to='/logout'
              className='inline-block py-2 px-4 text-white no-underline'
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
