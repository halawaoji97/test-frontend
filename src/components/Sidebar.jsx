import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav>
      <div className='bg-slate-100 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-64'>
        <ul className='flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left'>
          <li className='mr-3 flex-1 pl-8'>
            <Link
              to='/'
              className='block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-sky-500'
            >
              <span className='pb-1 md:pb-0 text-xl text-gray-700 block md:inline-block'>
                Katalog Buku
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
