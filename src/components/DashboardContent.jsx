import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'

const DashboardContent = ({ addBook, setData, data, onChange }) => {
  console.log(data)
  const [book, setBook] = useState([])

  const token = localStorage.getItem('token', 'data')
  const api = 'http://159.223.57.121:8080/books?limit=100&offset=2'

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(api, {
        headers: {
          Authorization: `${token}`
        }
      })
      setBook(result.data)
    }
    fetchData()
  }, [])

  return (
    <div className=''>
      <Link
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-32 text-center'
        to='/create'
      >
        Add
      </Link>
      <section>
        <Table book={book} onChange={onChange} addBook={addBook} />
      </section>
    </div>
  )
}

export default DashboardContent
