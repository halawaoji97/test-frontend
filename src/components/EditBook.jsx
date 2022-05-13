import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const EditBook = () => {
  const { state } = useLocation()
  const { id, isbn, title, author, publisher, description } = state.book
  const [form, setForm] = useState({
    isbn: '',
    title: '',
    author: '',
    publisher: '',
    description: ''
  })

  const [data, setData] = useState({ form })
  const navigate = useNavigate()

  const token = localStorage.getItem('token', 'data')
  const api = 'http://159.223.57.121:8080/books'

  const addBook = (e) => {
    e.preventDefault()
    axios
      .put(api, data, {
        headers: {
          Authorization: `${token}`
        }
      })
      .then((res) => {
        setData({
          id: id,
          isbn: res.data.isbn,
          title: res.data.title,
          description: res.data.description,
          publisher: res.data.publisher,
          author: res.data.author
        })
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='block p-6 container mx-auto my-10 rounded-lg shadow-lg bg-white max-w-sm'>
      <form>
        <input type='hidden' value={id} />
        <div className='form-group mb-6'>
          <label
            htmlFor='isbn'
            className='form-label inline-block mb-2 text-gray-700'
          >
            ISBN
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
            id='isbn'
            placeholder='Enter ISBN'
            value={isbn}
            onChange={(e) => onChange(e)}
            name='isbn'
          />
        </div>
        <div className='form-group mb-6'>
          <label
            htmlFor='title'
            className='form-label inline-block mb-2 text-gray-700'
          >
            Title
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
            id='title'
            placeholder='Enter title'
            onChange={(e) => onChange(e)}
            name='title'
            value={title}
          />
        </div>
        <div className='form-group mb-6'>
          <label
            htmlFor='author'
            className='form-label inline-block mb-2 text-gray-700'
          >
            Author
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
            id='author'
            placeholder='Enter author'
            onChange={(e) => onChange(e)}
            name='author'
            value={author}
          />
        </div>
        <div className='form-group mb-6'>
          <label
            htmlFor='publiser'
            className='form-label inline-block mb-2 text-gray-700'
          >
            Publiser
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
            id='publiser'
            placeholder='Enter publiser'
            onChange={(e) => onChange(e)}
            name='publisher'
            value={publisher}
          />
        </div>
        <div className='form-group mb-6'>
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
            id='description'
            rows='3'
            placeholder='Description'
            onChange={(e) => onChange(e)}
            name='description'
            value={description}
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
          onClick={(e) => addBook(e)}
        >
          Save
        </button>
        <Link
          to='/'
          className='text-blue-600 text-center block w-full my-4 bg-gray-100 py-2 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
        >
          Cancel
        </Link>
      </form>
    </div>
  )
}

export default EditBook
